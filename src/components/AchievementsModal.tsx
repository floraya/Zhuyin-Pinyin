import React from 'react';
import { Award, Zap, CheckCircle2, RotateCcw, X, Target } from 'lucide-react';
import { UserStats } from '../types';
import { ACHIEVEMENTS } from '../data/achievementsData';
import { getLevelFromExp, DEFAULT_STATS, saveUserStats } from '../utils/storage';

interface AchievementsModalProps {
  stats: UserStats;
  onClose: () => void;
  onResetStats: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  stats,
  onClose,
  onResetStats,
}) => {
  const levelInfo = getLevelFromExp(stats.exp);
  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
    : 0;

  const completedStagesCount = Object.values(stats.stageProgress).filter((s) => s.completed).length;

  // Level progress percentage
  const expInCurrentLvl = stats.exp - (levelInfo.currentExp - (stats.exp % (levelInfo.nextLevelExp || 100)));
  const expNeeded = (levelInfo.nextLevelExp - stats.exp) > 0 ? (levelInfo.nextLevelExp - stats.exp) : 0;
  const progressPct = Math.min(100, Math.max(10, Math.round(((stats.exp) / levelInfo.nextLevelExp) * 100)));

  const handleReset = () => {
    if (window.confirm('確定要重置所有闖關進度與成就嗎？此動作無法復原。')) {
      saveUserStats(DEFAULT_STATS);
      onResetStats();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">
              個人進度與成就勳章
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Level banner */}
          <div className="p-5 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl text-white space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-indigo-200 tracking-wider">
                  目前稱號
                </span>
                <h4 className="text-2xl font-black">{levelInfo.title}</h4>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black tabular-nums">Lv.{levelInfo.level}</span>
                <span className="block text-[11px] text-indigo-200 tabular-nums">
                  {stats.exp} 累積 EXP
                </span>
              </div>
            </div>

            {/* EXP Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-indigo-100">
                <span>升級進度</span>
                <span>還差 {expNeeded} EXP 升級</span>
              </div>
              <div className="w-full bg-indigo-900/40 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-amber-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block mb-0.5">通關關卡</span>
              <strong className="text-lg font-bold text-slate-900 tabular-nums">
                {completedStagesCount} / 15
              </strong>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block mb-0.5">總答題數</span>
              <strong className="text-lg font-bold text-slate-900 tabular-nums">
                {stats.totalAnswered} 題
              </strong>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block mb-0.5 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-indigo-600" /> 正確率
              </span>
              <strong className="text-lg font-bold text-emerald-600 tabular-nums">
                {accuracy}%
              </strong>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block mb-0.5 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 最高連勝
              </span>
              <strong className="text-lg font-bold text-amber-600 tabular-nums">
                {stats.bestStreak} 題
              </strong>
            </div>
          </div>

          {/* Badges Collection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900">
                成就勳章館 ({stats.unlockedAchievements.length} / {ACHIEVEMENTS.length})
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACHIEVEMENTS.map((ach) => {
                const isUnlocked = stats.unlockedAchievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isUnlocked
                        ? 'bg-amber-50/50 border-amber-200 text-slate-900'
                        : 'bg-slate-50/70 border-slate-200 text-slate-400 opacity-60'
                    }`}
                  >
                    <div className="text-2xl p-2 bg-white rounded-lg border border-slate-200 shadow-2xs shrink-0">
                      {ach.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <strong className="text-xs font-bold">
                          {ach.name}
                        </strong>
                        {isUnlocked && (
                          <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> 已解鎖
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-xs text-rose-500 hover:text-rose-700 hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>重置所有進度</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};
