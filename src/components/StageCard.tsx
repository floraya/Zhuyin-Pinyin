import React from 'react';
import { Star, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Stage } from '../types';

interface StageCardProps {
  stage: Stage;
  userExp: number;
  progress?: { stars: number; highScore: number; completed: boolean };
  onStart: (stage: Stage) => void;
}

export const StageCard: React.FC<StageCardProps> = ({
  stage,
  userExp,
  progress,
  onStart,
}) => {
  const isUnlocked = userExp >= stage.unlockRequirementExp;
  const stars = progress?.stars || 0;
  const isCompleted = !!progress?.completed;

  return (
    <div
      className={`relative rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
        isUnlocked
          ? 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md'
          : 'bg-slate-100/70 border-slate-200/80 opacity-75'
      }`}
    >
      <div className="p-5 sm:p-6">
        {/* Top row: Stage number & Stars */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-600">
            <span>關卡 {stage.id}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal">{stage.targetCategory}</span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((starIndex) => (
              <Star
                key={starIndex}
                className={`w-4 h-4 ${
                  starIndex <= stars
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-200 fill-slate-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Title & subtitle */}
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
          {stage.title}
        </h3>
        <p className="text-xs font-medium text-slate-500 mb-3 tracking-wide">
          {stage.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {stage.description}
        </p>

        {/* Metadata info */}
        <div className="flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
          <span>共 {stage.questions.length} 題</span>
          <span aria-hidden="true">·</span>
          <span>最高得分: <strong className="text-slate-700 tabular-nums">{progress?.highScore || 0}</strong>/{stage.questions.length}</span>
          {isCompleted && (
            <>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> 已通關
              </span>
            </>
          )}
        </div>
      </div>

      {/* Action footer */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
        {isUnlocked ? (
          <>
            <span className="text-xs text-slate-500">
              {isCompleted ? '可重複挑戰刷新紀錄' : '完成可得 EXP 與徽章'}
            </span>
            <button
              onClick={() => onStart(stage)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              {isCompleted ? '重新挑戰' : '開始闖關'}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </>
        ) : (
          <div className="flex items-center justify-between w-full text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              尚未解鎖
            </span>
            <span className="text-slate-400">
              需要累積 <strong className="text-slate-600 tabular-nums">{stage.unlockRequirementExp}</strong> EXP
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
