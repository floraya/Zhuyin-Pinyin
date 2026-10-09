import React, { useState, useEffect } from 'react';
import { Volume2, CheckCircle, XCircle, ArrowRight, RotateCcw, X, Star, Zap, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Stage, QuizQuestion } from '../types';
import { speakChinese } from '../utils/audio';

interface QuizModalProps {
  stage: Stage;
  soundEnabled: boolean;
  onClose: () => void;
  onFinishQuiz: (stageId: number, correctCount: number, total: number, earnedExp: number, maxStreak: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  stage,
  soundEnabled,
  onClose,
  onFinishQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ: QuizQuestion = stage.questions[currentIndex];
  const totalQuestions = stage.questions.length;

  // Auto pronounce audio if sound enabled when question loads
  useEffect(() => {
    if (soundEnabled && currentQ?.audioText && !isCompleted) {
      speakChinese(currentQ.audioText);
    }
  }, [currentIndex, currentQ, soundEnabled, isCompleted]);

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;

    setSelectedAnswer(option);
    setIsAnswerSubmitted(true);

    const isCorrect = option === currentQ.correctAnswer;
    if (isCorrect) {
      const nextStreak = streak + 1;
      setScore((prev) => prev + 1);
      setStreak(nextStreak);
      setMaxStreak((prev) => Math.max(prev, nextStreak));
      if (soundEnabled && currentQ.audioText) {
        speakChinese(currentQ.audioText);
      }
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      // Finished
      setIsCompleted(true);
      const finalScore = score + (selectedAnswer === currentQ.correctAnswer ? 0 : 0);
      const baseExp = finalScore * 15;
      const streakBonus = maxStreak * 5;
      const totalEarnedExp = baseExp + streakBonus;

      if ((finalScore / totalQuestions) >= 0.75) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
      }

      onFinishQuiz(stage.id, finalScore, totalQuestions, totalEarnedExp, maxStreak);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setIsCompleted(false);
  };

  const calculateStars = () => {
    const pct = (score / totalQuestions) * 100;
    if (pct === 100) return 3;
    if (pct >= 75) return 2;
    if (pct >= 50) return 1;
    return 0;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
              <span>{stage.title}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">
                {isCompleted ? '挑戰結算' : `第 ${currentIndex + 1} / ${totalQuestions} 題`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!isCompleted && streak > 1 && (
              <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                <Zap className="w-3.5 h-3.5 fill-amber-500" />
                <span>{streak} 連擊！</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {!isCompleted && (
          <div className="w-full bg-slate-100 h-1.5">
            <div
              className="bg-indigo-600 h-1.5 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isCompleted ? (
            <div className="space-y-6">
              {/* Question prompt */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQ.prompt}
                </h4>
                {currentQ.subPrompt && (
                  <p className="text-xs text-slate-500 mt-1">{currentQ.subPrompt}</p>
                )}
              </div>

              {/* Central Target Display Card */}
              {currentQ.targetZhuyin && (
                <div className="p-5 bg-gradient-to-br from-indigo-50/70 to-slate-50 rounded-2xl border border-indigo-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-wider">
                      {currentQ.targetZhuyin}
                    </div>
                    {currentQ.audioText && (
                      <button
                        onClick={() => speakChinese(currentQ.audioText!)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-indigo-200 hover:bg-indigo-50 rounded-lg text-xs font-medium text-indigo-700 shadow-sm transition-colors cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4 text-indigo-600" />
                        <span>聆聽讀音</span>
                      </button>
                    )}
                  </div>
                  <span className="text-xs text-indigo-500 font-medium">注音符號提示</span>
                </div>
              )}

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentQ.options?.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentQ.correctAnswer;
                  let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:border-indigo-400 hover:bg-indigo-50/30';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 ring-1 ring-rose-400';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option)}
                      disabled={isAnswerSubmitted}
                      className={`p-4 rounded-xl border text-left flex items-center justify-between text-base transition-all duration-150 cursor-pointer ${btnStyle}`}
                    >
                      <span className="font-medium">{option}</span>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {isAnswerSubmitted && (
                <div
                  className={`p-4 rounded-xl border text-sm leading-relaxed ${
                    selectedAnswer === currentQ.correctAnswer
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                      : 'bg-amber-50/70 border-amber-200 text-amber-950'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5 mb-1 text-xs">
                    {selectedAnswer === currentQ.correctAnswer ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">回答正確！</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-amber-600" />
                        <span className="text-amber-800">
                          答錯了！正確答案是：<strong>{currentQ.correctAnswer}</strong>
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 whitespace-pre-line">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-6 space-y-6">
              <div className="inline-flex p-4 bg-indigo-50 rounded-full text-indigo-600 mb-2">
                <Award className="w-12 h-12 text-indigo-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  關卡完成！
                </h3>
                <p className="text-xs text-slate-500">
                  {stage.title} · {stage.subtitle}
                </p>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3].map((starIdx) => (
                  <Star
                    key={starIdx}
                    className={`w-8 h-8 ${
                      starIdx <= calculateStars()
                        ? 'fill-amber-400 text-amber-400 animate-bounce'
                        : 'text-slate-200 fill-slate-100'
                    }`}
                  />
                ))}
              </div>

              {/* Score board */}
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-[11px] text-slate-500 block mb-0.5">正確題數</span>
                  <span className="text-lg font-bold text-slate-900 tabular-nums">
                    {score} / {totalQuestions}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-0.5">最大連勝</span>
                  <span className="text-lg font-bold text-amber-600 tabular-nums">
                    {maxStreak}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-0.5">獲得 EXP</span>
                  <span className="text-lg font-bold text-indigo-600 tabular-nums">
                    +{score * 15 + maxStreak * 5}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          {!isCompleted ? (
            <>
              <span className="text-xs text-slate-500">
                {isAnswerSubmitted ? '請點擊下一步' : '請選擇一個答案'}
              </span>
              <button
                onClick={handleNext}
                disabled={!isAnswerSubmitted}
                className={`inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isAnswerSubmitted
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>{currentIndex + 1 === totalQuestions ? '查看結算' : '下一題'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="flex items-center justify-between w-full gap-3">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 hover:bg-slate-100 rounded-xl text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>重新挑戰</span>
              </button>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
              >
                <span>返回關卡地圖</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
