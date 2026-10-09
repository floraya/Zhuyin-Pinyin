import React, { useState, useEffect, useRef } from 'react';
import { Volume2, RotateCcw, Check, Zap, Sparkles, Keyboard } from 'lucide-react';
import { TYPING_WORDS } from '../data/wordsData';
import { TypingWord } from '../types';
import { speakChinese } from '../utils/audio';

interface TypingTrainerProps {
  soundEnabled: boolean;
  onAddExp: (amount: number) => void;
}

export const TypingTrainer: React.FC<TypingTrainerProps> = ({
  soundEnabled,
  onAddExp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [wordIndex, setWordIndex] = useState(0);
  const [inputBuffer, setInputBuffer] = useState('');
  const [completedWordsCount, setCompletedWordsCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [justCompleted, setJustCompleted] = useState(false);
  const [useShortcutTip, setUseShortcutTip] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Filter words
  const filteredWords = selectedCategory === 'all'
    ? TYPING_WORDS
    : TYPING_WORDS.filter((w) => w.category === selectedCategory);

  const currentWord: TypingWord = filteredWords[wordIndex % filteredWords.length] || TYPING_WORDS[0];

  useEffect(() => {
    // Focus input on load
    inputRef.current?.focus();
  }, [wordIndex, selectedCategory]);

  useEffect(() => {
    if (soundEnabled && currentWord) {
      speakChinese(currentWord.hanzi);
    }
  }, [wordIndex, currentWord, soundEnabled]);

  // Clean input
  const cleanInput = inputBuffer.toLowerCase().trim();
  const isPinyinMatch = currentWord.pinyin.startsWith(cleanInput);
  const isShortcutMatch = currentWord.shortcut.startsWith(cleanInput);
  const isFullyMatched = cleanInput === currentWord.pinyin || cleanInput === currentWord.shortcut;

  // Candidate items simulate real IME
  const candidates = [
    { num: 1, text: currentWord.hanzi, pinyin: currentWord.pinyin },
    { num: 2, text: currentWord.shortcut.toUpperCase(), pinyin: '簡拼代碼' },
  ];

  const handleCommitWord = () => {
    if (isFullyMatched) {
      setJustCompleted(true);
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setBestStreak((prev) => Math.max(prev, nextStreak));
      setCompletedWordsCount((prev) => prev + 1);
      onAddExp(10 + nextStreak * 2);

      if (soundEnabled) {
        speakChinese(currentWord.hanzi);
      }

      setTimeout(() => {
        setInputBuffer('');
        setJustCompleted(false);
        setWordIndex((prev) => (prev + 1) % filteredWords.length);
      }, 400);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' || e.key === 'Enter' || e.key === '1') {
      if (isFullyMatched) {
        e.preventDefault();
        handleCommitWord();
      }
    }
  };

  const handleReset = () => {
    setWordIndex(0);
    setInputBuffer('');
    setStreak(0);
    setCompletedWordsCount(0);
  };

  const categories = [
    { id: 'all', label: '全部詞彙' },
    { id: '台灣美食', label: '台灣美食' },
    { id: '地名交通', label: '地名交通' },
    { id: '日常用語', label: '日常用語' },
    { id: '科技學習', label: '科技學習' },
    { id: '常用成語', label: '常用成語' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Introduction banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <Keyboard className="w-4 h-4" />
              <span>真實拼音輸入法 (IME) 模擬打字</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              免打聲調、簡拼秒出的肌肉記憶訓練
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              在輸入框直接敲入拼音字母（全拼或首字母簡拼），敲按<strong>空格鍵 (Space)</strong> 或 <strong>1</strong> 立即上屏！
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 shrink-0">
            <div>
              <span className="text-slate-400 block text-[10px]">累計完成</span>
              <strong className="text-slate-900 text-sm tabular-nums">{completedWordsCount} 詞</strong>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <span className="text-slate-400 block text-[10px]">當前連擊</span>
              <strong className="text-amber-600 text-sm tabular-nums flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-amber-500" /> {streak}
              </strong>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <span className="text-slate-400 block text-[10px]">最高連擊</span>
              <strong className="text-slate-700 text-sm tabular-nums">{bestStreak}</strong>
            </div>
          </div>
        </div>

        {/* Category filter segmented tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-5 mt-5 border-t border-slate-100 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setWordIndex(0);
                setInputBuffer('');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Typing Stage */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden">
        {justCompleted && (
          <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none z-10 transition-all">
            <span className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-xl shadow-lg">
              <Check className="w-4 h-4" /> 完美上屏！+EXP
            </span>
          </div>
        )}

        {/* Target Word Display */}
        <div className="text-center space-y-3 mb-8">
          {/* Zhuyin phonetic guide */}
          <div className="text-xs sm:text-sm font-medium tracking-widest text-slate-400 font-mono">
            {currentWord.zhuyin}
          </div>

          {/* Large Hanzi */}
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-wide">
              {currentWord.hanzi}
            </h1>
            <button
              onClick={() => speakChinese(currentWord.hanzi)}
              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors cursor-pointer"
              title="聆聽發音"
            >
              <Volume2 className="w-6 h-6" />
            </button>
          </div>

          {/* Pinyin target badges & cheat hints */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
            <span className="text-slate-600">
              全拼輸入: <code className="bg-slate-100 px-2 py-0.5 rounded font-mono font-bold text-indigo-600">{currentWord.pinyin}</code>
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600">
              簡拼輸入: <code className="bg-slate-100 px-2 py-0.5 rounded font-mono font-bold text-amber-600">{currentWord.shortcut}</code>
            </span>
          </div>
        </div>

        {/* Simulated IME Input Area */}
        <div className="max-w-xl mx-auto space-y-3">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={inputBuffer}
              onChange={(e) => setInputBuffer(e.target.value.toLowerCase())}
              onKeyDown={handleKeyDown}
              placeholder="請在鍵盤輸入拼音字母，按 空格鍵 上屏..."
              className={`w-full px-5 py-4 text-lg font-mono rounded-xl border-2 transition-all outline-none ${
                isFullyMatched
                  ? 'border-emerald-500 bg-emerald-50/20 text-emerald-900 ring-2 ring-emerald-200'
                  : isPinyinMatch || isShortcutMatch || cleanInput === ''
                  ? 'border-indigo-400 focus:border-indigo-600 bg-white text-slate-900'
                  : 'border-rose-400 bg-rose-50/20 text-rose-900'
              }`}
            />

            {/* Quick action button inside input if matched */}
            {isFullyMatched && (
              <button
                onClick={handleCommitWord}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-1"
              >
                <span>按空格上屏</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Floating Candidate Bar (Simulating real IME candidate box) */}
          <div className="bg-slate-900 text-white rounded-xl p-3 shadow-lg flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-4 overflow-x-auto">
              <span className="text-slate-400 shrink-0">候選詞:</span>
              {candidates.map((cand) => (
                <button
                  key={cand.num}
                  onClick={handleCommitWord}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer shrink-0 ${
                    isFullyMatched && cand.num === 1
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="text-amber-400">{cand.num}.</span>
                  <span>{cand.text}</span>
                </button>
              ))}
            </div>

            <span className="text-slate-400 text-[11px] hidden sm:inline shrink-0">
              Space / 1 上屏
            </span>
          </div>

          {/* Error warning hint */}
          {cleanInput !== '' && !isPinyinMatch && !isShortcutMatch && (
            <p className="text-xs text-rose-500 font-medium text-center">
              拼音輸入有誤，請參考上方提示：全拼打 <strong>{currentWord.pinyin}</strong> 或簡拼打 <strong>{currentWord.shortcut}</strong>
            </p>
          )}

          {/* Typing helper controls */}
          <div className="flex items-center justify-between pt-4 text-xs text-slate-500">
            <button
              onClick={() => setUseShortcutTip(!useShortcutTip)}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              {useShortcutTip ? '收起打字技巧' : '💡 為什麼拼音打字比注音更快？'}
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重新開始計數</span>
            </button>
          </div>

          {/* Shortcut Tip Accordion */}
          {useShortcutTip && (
            <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl text-xs text-slate-700 space-y-1.5 leading-relaxed">
              <p className="font-bold text-indigo-900">
                ⭐ 拼音輸入法的兩大秘密武器：
              </p>
              <p>
                <strong>1. 免打聲調</strong>：注音一定要敲二聲、三聲、四聲或空格一聲，而拼音完全不需要按聲調！
              </p>
              <p>
                <strong>2. 簡拼 (Initial Shortcut)</strong>：敲每個字的第一個聲母字母，例如「台北」只需按 <code>tb</code>，「珍珠奶茶」只需按 <code>zznc</code>，電腦詞庫自動聯想！
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
