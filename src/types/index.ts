export type Tone = 1 | 2 | 3 | 4 | 5; // 5 is neutral

export interface PinyinItem {
  zhuyin: string;
  pinyin: string;
  example: string;
  exampleZhuyin: string;
  tip?: string;
  category: 'initial' | 'simple-final' | 'compound-final' | 'nasal-final' | 'combination-final';
}

export interface TrapRule {
  id: string;
  title: string;
  zhuyinPattern: string;
  pinyinPattern: string;
  pitfall: string;
  ruleExplanation: string;
  mnemonic: string; // 口訣
  examples: Array<{
    word: string;
    zhuyin: string;
    pinyin: string;
    meaning?: string;
  }>;
}

export type QuestionType = 'single-choice' | 'zhuyin-to-pinyin' | 'pinyin-to-zhuyin' | 'fill-blank' | 'assemble-blocks';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  subPrompt?: string;
  targetZhuyin?: string;
  targetPinyin?: string;
  targetWord?: string;
  options?: string[];
  correctAnswer: string;
  blocks?: string[]; // For assemble-blocks
  explanation: string;
  audioText?: string;
}

export interface Stage {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  targetCategory: string;
  iconName: string;
  questions: QuizQuestion[];
  unlockRequirementExp: number;
}

export interface UserStats {
  exp: number;
  level: number;
  streak: number;
  bestStreak: number;
  totalAnswered: number;
  totalCorrect: number;
  stageProgress: Record<number, { stars: number; highScore: number; completed: boolean }>;
  unlockedAchievements: string[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirementExp?: number;
  requirementStreak?: number;
  condition: (stats: UserStats) => boolean;
}

export interface TypingWord {
  hanzi: string;
  zhuyin: string;
  pinyin: string;
  shortcut: string; // 簡拼 (initials only)
  category: string;
}
