import React, { useState, useEffect } from 'react';
import { Play, Sparkles, BookOpen, Keyboard, ShieldAlert, Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from './components/Header';
import { StageCard } from './components/StageCard';
import { QuizModal } from './components/QuizModal';
import { TypingTrainer } from './components/TypingTrainer';
import { PinyinChart } from './components/PinyinChart';
import { TrapsGuide } from './components/TrapsGuide';
import { AchievementsModal } from './components/AchievementsModal';
import { STAGES } from './data/stagesData';
import { Stage, UserStats } from './types';
import { loadUserStats, updateStatsAfterQuiz, DEFAULT_STATS } from './utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<'stages' | 'typing' | 'chart' | 'traps' | 'stats'>('stages');
  const [userStats, setUserStats] = useState<UserStats>(DEFAULT_STATS);
  const [activeQuizStage, setActiveQuizStage] = useState<Stage | null>(null);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [unlockedToast, setUnlockedToast] = useState<string | null>(null);

  // Load stats on mount
  useEffect(() => {
    const loaded = loadUserStats();
    setUserStats(loaded);
  }, []);

  const handleStartStage = (stage: Stage) => {
    setActiveQuizStage(stage);
  };

  const handleFinishQuiz = (
    stageId: number,
    correctCount: number,
    total: number,
    earnedExp: number,
    maxStreak: number
  ) => {
    const { updatedStats, newlyUnlocked } = updateStatsAfterQuiz(
      userStats,
      stageId,
      correctCount,
      total,
      earnedExp,
      maxStreak
    );

    setUserStats(updatedStats);

    if (newlyUnlocked.length > 0) {
      setUnlockedToast(`🎉 恭喜解鎖新成就：${newlyUnlocked.join('、')}！`);
      setTimeout(() => setUnlockedToast(null), 4000);
    }
  };

  const handleAddExpFromTyping = (amount: number) => {
    const newStats: UserStats = {
      ...userStats,
      exp: userStats.exp + amount,
    };
    setUserStats(newStats);
  };

  // Quick stats summary
  const totalStars = Object.values(userStats.stageProgress).reduce((acc, curr) => acc + curr.stars, 0);
  const completedStages = Object.values(userStats.stageProgress).filter((s) => s.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(t) => {
          if (t === 'stats') {
            setIsAchievementsOpen(true);
          } else {
            setActiveTab(t as any);
          }
        }}
        exp={userStats.exp}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenAchievements={() => setIsAchievementsOpen(true)}
      />

      {/* Achievement Toast */}
      {unlockedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold animate-bounce border border-slate-700">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{unlockedToast}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* TAB 1: 關卡闖關地圖 */}
        {activeTab === 'stages' && (
          <div className="space-y-8 animate-fade-in">
            {/* Hero Banner */}
            <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-10 overflow-hidden shadow-sm">
              <div className="relative z-10 max-w-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>注音族專屬 · 漢語拼音漸進式學習</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  輕鬆轉換！從注音符號到拼音盲打
                </h1>

                <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                  參考經典對照法則，針對台灣人最容易踩坑的捲舌音 (zh/ch/sh)、舌面音 (j/q/x) 與縮寫規律，
                  循序漸進關卡挑戰，累積積分解鎖勳章，建立自然流暢的打字直覺！
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      const firstUnlocked = STAGES.find(
                        (s) => !userStats.stageProgress[s.id]?.completed && userStats.exp >= s.unlockRequirementExp
                      ) || STAGES[0];
                      handleStartStage(firstUnlocked);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-950 font-bold text-xs sm:text-sm rounded-xl hover:bg-indigo-50 active:scale-95 transition-all shadow-sm cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-indigo-950" />
                    <span>立即開始闖關</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('typing')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm rounded-xl transition-all cursor-pointer backdrop-blur-xs"
                  >
                    <Keyboard className="w-4 h-4" />
                    <span>練習實戰打字機</span>
                  </button>
                </div>
              </div>

              {/* Decorative overview stats */}
              <div className="hidden lg:flex absolute right-8 bottom-8 flex-col gap-2.5 text-xs text-indigo-200 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-between gap-6">
                  <span>通關進度:</span>
                  <strong className="text-white font-bold tabular-nums">{completedStages} / 8 關</strong>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>累積星級:</span>
                  <span className="flex items-center gap-1 text-amber-300 font-bold tabular-nums">
                    <Star className="w-3.5 h-3.5 fill-amber-300" /> {totalStars} / 24
                  </span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>累計 EXP:</span>
                  <strong className="text-white font-bold tabular-nums">{userStats.exp} 分</strong>
                </div>
              </div>
            </div>

            {/* Stages Grid Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    關卡闖關地圖 (8 大主題階梯)
                  </h2>
                  <p className="text-xs text-slate-500">
                    由淺入深，逐步突破聲母、韻母、平捲舌與縮寫大魔王陷阱
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>已完成 {completedStages} 關</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 text-amber-600 font-medium">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{totalStars} 星星</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {STAGES.map((stage) => (
                  <StageCard
                    key={stage.id}
                    stage={stage}
                    userExp={userStats.exp}
                    progress={userStats.stageProgress[stage.id]}
                    onStart={handleStartStage}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Quick Feature Access Banners */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div
                onClick={() => setActiveTab('typing')}
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Keyboard className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    實戰拼音打字模擬器
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    體驗免打聲調、簡拼 (如 <code>zznc</code>=珍珠奶茶) 直出的極速快感。
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 mt-4">
                  <span>進入打字機</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('traps')}
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    台灣人痛點避坑指南
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    收錄 8 大魔王陷阱：ju/qu/xu 省點、-ian、-ong、-iu 以及 v 代打 ü 口訣。
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-amber-700 mt-4">
                  <span>查閱避坑口訣</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('chart')}
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-violet-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    完整對照表與即時換算字典
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    全系列聲母、韻母、結合韻、聲調速查表，支援真人發音與音節拆解。
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-violet-600 mt-4">
                  <span>開啟對照字典</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 實戰打字機 */}
        {activeTab === 'typing' && (
          <TypingTrainer
            soundEnabled={soundEnabled}
            onAddExp={handleAddExpFromTyping}
          />
        )}

        {/* TAB 3: 對照表與速查字典 */}
        {activeTab === 'chart' && <PinyinChart />}

        {/* TAB 4: 避坑指引 */}
        {activeTab === 'traps' && <TrapsGuide />}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            注音轉拼音大作戰 · 專為注音符號習慣設計的遊戲化漢語拼音教學
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('chart')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              注音拼音對照表
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveTab('traps')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              8 大避坑指引
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsAchievementsOpen(true)}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              成就徽章
            </button>
          </div>
        </div>
      </footer>

      {/* Quiz Modal */}
      {activeQuizStage && (
        <QuizModal
          stage={activeQuizStage}
          soundEnabled={soundEnabled}
          onClose={() => setActiveQuizStage(null)}
          onFinishQuiz={handleFinishQuiz}
        />
      )}

      {/* Achievements Profile Modal */}
      {isAchievementsOpen && (
        <AchievementsModal
          stats={userStats}
          onClose={() => setIsAchievementsOpen(false)}
          onResetStats={() => setUserStats(DEFAULT_STATS)}
        />
      )}
    </div>
  );
}
