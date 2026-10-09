import React from 'react';
import { Volume2, AlertTriangle, ShieldCheck, Sparkles, Keyboard } from 'lucide-react';
import { TRAP_RULES } from '../data/trapsData';
import { speakChinese } from '../utils/audio';

export const TrapsGuide: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-transparent p-6 sm:p-8 rounded-3xl border border-amber-200/60 bg-white">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-1">
          <AlertTriangle className="w-4 h-4" />
          <span>台灣注音族專屬避坑指引</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">
          破解 8 大魔王陷阱，徹底無痛切換
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          台灣人自幼熟悉注音符號（ㄅㄆㄇㄈ），在轉用拼音輸入法時，容易被拉丁字母的縮寫規則與視覺形狀混淆。
          只要掌握以下 8 大關鍵規律與口訣，你的打字轉換率將提升 300%！
        </p>
      </div>

      {/* Keyboard Layout Insight Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
        <div className="flex items-center gap-2">
          <Keyboard className="w-5 h-5 text-indigo-600" />
          <h3 className="text-base font-bold text-slate-900">
            鍵盤配置大解密：為什麼拼音輸入法速度更快？
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <span>台灣標準大千注音鍵盤</span>
              <span className="text-slate-400 font-normal">(4 排按鍵)</span>
            </h4>
            <p className="leading-relaxed">
              • 涵蓋 4 排鍵盤（包含數字鍵 1~0 以及 -= 鍵），共有 41 個符號鍵。
            </p>
            <p className="leading-relaxed">
              • 必須敲擊第四排的聲調鍵（空格/3/4/6/7）才能完成選字，手部移動幅度大。
            </p>
          </div>

          <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-2">
            <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
              <span>漢語拼音 QWERTY 鍵盤</span>
              <span className="text-indigo-600 font-normal">(3 排按鍵，全球統一)</span>
            </h4>
            <p className="leading-relaxed text-indigo-900">
              • 僅使用標準 26 個英文字母鍵，雙手始終保持在打字主鍵區。
            </p>
            <p className="leading-relaxed text-indigo-900">
              • <strong>完全免打聲調</strong>，且具備<strong>簡拼首字母聯想</strong>，大幅減少按鍵次數與手指疲勞！
            </p>
          </div>
        </div>
      </div>

      {/* 8 Trap Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h3 className="text-lg font-bold text-slate-900">
            8 大魔王陷阱詳細解析與通關口訣
          </h3>
          <span className="text-xs text-slate-500">點擊例字可聽真人讀音</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {TRAP_RULES.map((trap, index) => (
            <div
              key={trap.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {trap.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-semibold">
                  <span className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded border border-rose-200">
                    注音: {trap.zhuyinPattern}
                  </span>
                  <span className="text-slate-300">➔</span>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-200">
                    拼音: {trap.pinyinPattern}
                  </span>
                </div>
              </div>

              {/* Pitfall vs Rule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-100">
                  <span className="font-bold text-rose-800 block mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> 台灣人常見直覺痛點:
                  </span>
                  <p className="text-rose-900 leading-relaxed">
                    {trap.pitfall}
                  </p>
                </div>

                <div className="p-3.5 bg-indigo-50/50 rounded-xl border border-indigo-100">
                  <span className="font-bold text-indigo-800 block mb-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 正確規則與打法:
                  </span>
                  <p className="text-indigo-950 leading-relaxed whitespace-pre-line">
                    {trap.ruleExplanation}
                  </p>
                </div>
              </div>

              {/* Mnemonic Rhyme */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2 text-xs text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-800">記憶口訣：</strong>
                  <span className="font-medium ml-1">{trap.mnemonic}</span>
                </div>
              </div>

              {/* Examples with speech */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-500 block mb-2">
                  常見代表字打法示範:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {trap.examples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="p-2.5 bg-slate-50 hover:bg-indigo-50/60 rounded-xl border border-slate-200 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900 text-sm">{ex.word}</span>
                        <button
                          onClick={() => speakChinese(ex.word)}
                          className="p-0.5 text-slate-400 hover:text-indigo-600 cursor-pointer"
                          title="聽讀音"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-mono text-indigo-600 font-semibold">
                        {ex.pinyin}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {ex.zhuyin}
                      </div>
                      {ex.meaning && (
                        <div className="text-[10px] text-slate-500 mt-1 pt-1 border-t border-slate-200/50 line-clamp-1">
                          {ex.meaning}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
