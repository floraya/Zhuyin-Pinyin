import { UserStats } from '../types';
import { ACHIEVEMENTS } from '../data/achievementsData';

const STORAGE_KEY = 'zhuyin_to_pinyin_quest_v1';

export const DEFAULT_STATS: UserStats = {
  exp: 0,
  level: 1,
  streak: 0,
  bestStreak: 0,
  totalAnswered: 0,
  totalCorrect: 0,
  stageProgress: {},
  unlockedAchievements: [],
};

export function getLevelFromExp(exp: number): { level: number; title: string; currentExp: number; nextLevelExp: number } {
  const levels = [
    { lvl: 1, exp: 0, title: '注音萌新' },
    { lvl: 2, exp: 60, title: '聲母學徒' },
    { lvl: 3, exp: 140, title: '舌尖御風者' },
    { lvl: 4, exp: 240, title: '音韻探險家' },
    { lvl: 5, exp: 380, title: '平捲辨析師' },
    { lvl: 6, exp: 550, title: '盲打鍵盤手' },
    { lvl: 7, exp: 760, title: '除陷達人' },
    { lvl: 8, exp: 1050, title: '拼音大師' },
    { lvl: 9, exp: 1400, title: '簡拼宗師' },
    { lvl: 10, exp: 1800, title: '拼音至尊' },
  ];

  for (let i = levels.length - 1; i >= 0; i--) {
    if (exp >= levels[i].exp) {
      const nextExp = levels[i + 1] ? levels[i + 1].exp : levels[i].exp + 400;
      return {
        level: levels[i].lvl,
        title: levels[i].title,
        currentExp: exp,
        nextLevelExp: nextExp,
      };
    }
  }

  return { level: 1, title: '注音萌新', currentExp: exp, nextLevelExp: 60 };
}

export function loadUserStats(): UserStats {
  if (typeof window === 'undefined') return DEFAULT_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATS, ...parsed };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // ignore
  }
}

export function updateStatsAfterQuiz(
  currentStats: UserStats,
  stageId: number,
  correctCount: number,
  totalQuestions: number,
  earnedExp: number,
  maxStreakInRound: number
): { updatedStats: UserStats; newlyUnlocked: string[] } {
  const newExp = currentStats.exp + earnedExp;
  const newLevel = getLevelFromExp(newExp).level;
  const newTotalAnswered = currentStats.totalAnswered + totalQuestions;
  const newTotalCorrect = currentStats.totalCorrect + correctCount;
  const newBestStreak = Math.max(currentStats.bestStreak, maxStreakInRound);

  // Calculate stars (1 star: >= 50%, 2 stars: >= 75%, 3 stars: 100%)
  const percentage = (correctCount / totalQuestions) * 100;
  let earnedStars = 0;
  if (percentage === 100) earnedStars = 3;
  else if (percentage >= 75) earnedStars = 2;
  else if (percentage >= 50) earnedStars = 1;

  const currentStageProg = currentStats.stageProgress[stageId] || { stars: 0, highScore: 0, completed: false };
  const updatedStageProgress = {
    ...currentStats.stageProgress,
    [stageId]: {
      stars: Math.max(currentStageProg.stars, earnedStars),
      highScore: Math.max(currentStageProg.highScore, correctCount),
      completed: currentStageProg.completed || earnedStars >= 1,
    },
  };

  const tempStats: UserStats = {
    ...currentStats,
    exp: newExp,
    level: newLevel,
    bestStreak: newBestStreak,
    totalAnswered: newTotalAnswered,
    totalCorrect: newTotalCorrect,
    stageProgress: updatedStageProgress,
  };

  // Check achievements
  const newlyUnlocked: string[] = [];
  const currentUnlocked = new Set(currentStats.unlockedAchievements);

  for (const ach of ACHIEVEMENTS) {
    if (!currentUnlocked.has(ach.id) && ach.condition(tempStats)) {
      currentUnlocked.add(ach.id);
      newlyUnlocked.push(ach.name);
    }
  }

  const finalStats: UserStats = {
    ...tempStats,
    unlockedAchievements: Array.from(currentUnlocked),
  };

  saveUserStats(finalStats);
  return { updatedStats: finalStats, newlyUnlocked };
}
