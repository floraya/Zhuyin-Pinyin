import React, { useState } from 'react';
import { Volume2, Search, ArrowRight, HelpCircle } from 'lucide-react';
import {
  INITIALS,
  SIMPLE_FINALS,
  COMPOUND_FINALS,
  NASAL_FINALS,
  COMBINATION_FINALS,
  TONE_RULES,
} from '../data/pinyinData';
import { PinyinItem } from '../types';
import { speakChinese } from '../utils/audio';
import { parseZhuyinSyllable, COMMON_CONVERSION_PRESETS } from '../utils/converter';

export const PinyinChart: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'initial' | 'simple' | 'compound' | 'nasal' | 'comb' | 'tone'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Live Converter state
  const [inputZhuyin, setInputZhuyin] = useState('ㄓㄨㄥ');
  const breakdown = parseZhuyinSyllable(inputZhuyin);

  const filterItems = (items: PinyinItem[]) => {
    if (!searchTerm.trim()) return items;
    const term = searchTerm.toLowerCase().trim();
    return items.filter(
      (item) =>
        item.zhuyin.toLowerCase().includes(term) ||
        item.pinyin.toLowerCase().includes(term) ||
        item.example.includes(term) ||
        item.tip?.toLowerCase().includes(term)
    );
  };

  const categories = [
    { id: 'all', label: '全部對照' },
    { id: 'initial', label: '聲母 (21個)' },
    { id: 'simple', label: '單韻母與介母' },
    { id: 'compound', label: '複韻母' },
    { id: 'nasal', label: '鼻音韻母' },
    { id: 'comb', label: '結合韻母 (含縮寫)' },
    { id: 'tone', label: '聲調對照' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Interactive Live Converter Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="text-xs font-semibold text-indigo-600 mb-0.5">即時轉換字典</div>
            <h2 className="text-xl font-bold text-slate-900">
              注音 ⇄ 拼音 智能速查與拆解
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              輸入任意注音音節，系統自動分析聲母、韻母、縮寫規則與對應漢語拼音！
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">快速試算:</span>
            {COMMON_CONVERSION_PRESETS.slice(0, 4).map((preset) => (
              <button
                key={preset.text}
                onClick={() => setInputZhuyin(preset.zhuyin.split(' ')[0])}
                className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 rounded-lg transition-colors cursor-pointer"
              >
                {preset.text} ({preset.zhuyin.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Converter interactive box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          <div className="md:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <label htmlFor="zhuyin-input" className="block text-xs font-semibold text-slate-600 mb-1.5">
                請輸入注音音節 (如: ㄓㄨㄥ、ㄑㄩ、ㄋㄧㄡ、ㄊㄧㄢ)
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="zhuyin-input"
                  type="text"
                  value={inputZhuyin}
                  onChange={(e) => setInputZhuyin(e.target.value)}
                  placeholder="輸入注音..."
                  className="w-full px-4 py-2 text-base font-mono bg-white border border-slate-300 focus:border-indigo-500 rounded-lg outline-none"
                />
                <button
                  onClick={() => speakChinese(inputZhuyin)}
                  className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors cursor-pointer shrink-0"
                  title="朗讀"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap pt-3 mt-3 border-t border-slate-200 text-xs">
              <span className="text-slate-400">熱門考點:</span>
              {['ㄑㄩ', 'ㄒㄧㄝ', 'ㄓㄨㄥ', 'ㄋㄧㄡ', 'ㄉㄨㄟ', 'ㄔㄨㄣ'].map((ex) => (
                <button
                  key={ex}
                  onClick={() => setInputZhuyin(ex)}
                  className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded hover:border-indigo-400 transition-colors cursor-pointer font-mono"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          <div className="md:col-span-5 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 flex flex-col justify-center">
            <div className="text-xs text-indigo-600 font-semibold mb-1">
              轉換拼音結果
            </div>
            <div className="text-3xl font-extrabold text-indigo-950 font-mono tracking-wide mb-2 flex items-center gap-2">
              <span>{breakdown.pinyin}</span>
              <button
                onClick={() => speakChinese(breakdown.pinyin)}
                className="p-1 text-indigo-600 hover:bg-white rounded transition-colors cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-600 bg-white/80 p-2.5 rounded-lg border border-indigo-100">
              <div>
                <span className="text-slate-400 block">聲母</span>
                <strong className="text-slate-900">{breakdown.initial}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">韻母/介母</span>
                <strong className="text-slate-900">{breakdown.final}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">聲調</span>
                <strong className="text-slate-900">{breakdown.tone}</strong>
              </div>
            </div>

            {breakdown.specialNote && (
              <p className="text-xs text-amber-700 font-medium mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200">
                💡 {breakdown.specialNote}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="space-y-6">
        {/* Search bar & Category filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋注音、拼音或例字..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 focus:border-indigo-500 rounded-lg outline-none"
            />
          </div>
        </div>

        {/* 1. Initials (聲母表) */}
        {(activeCategory === 'all' || activeCategory === 'initial') && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  聲母表 (21 個)
                </h3>
                <p className="text-xs text-slate-500">
                  特別留意：ㄐ=j、ㄑ=q、ㄒ=x 以及 ㄓㄔㄕ (捲舌加h) 與 ㄗㄘㄙ (平舌單字母)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {filterItems(INITIALS).map((item) => (
                <PinyinCard key={item.zhuyin} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* 2. Simple Finals (單韻母與介母) */}
        {(activeCategory === 'all' || activeCategory === 'simple') && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  單韻母與介母 (7 個)
                </h3>
                <p className="text-xs text-slate-500">
                  包含 ㄧ=i/y, ㄨ=u/w, ㄩ=ü/yu (打字鍵盤按 v 代打 ü)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {filterItems(SIMPLE_FINALS).map((item) => (
                <PinyinCard key={item.zhuyin} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* 3. Compound Finals (複韻母) */}
        {(activeCategory === 'all' || activeCategory === 'compound') && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  複韻母 (4 個)
                </h3>
                <p className="text-xs text-slate-500">
                  ㄞ=ai, ㄟ=ei, ㄠ=ao, ㄡ=ou
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filterItems(COMPOUND_FINALS).map((item) => (
                <PinyinCard key={item.zhuyin} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* 4. Nasal Finals (鼻音韻母) */}
        {(activeCategory === 'all' || activeCategory === 'nasal') && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  鼻音韻母與捲舌 (5 個)
                </h3>
                <p className="text-xs text-slate-500">
                  前鼻音以 -n 結尾 (ㄢ, ㄣ)；後鼻音以 -ng 結尾 (ㄤ, ㄥ)；ㄦ=er
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {filterItems(NASAL_FINALS).map((item) => (
                <PinyinCard key={item.zhuyin} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* 5. Combination Finals (結合韻母與縮寫規則) */}
        {(activeCategory === 'all' || activeCategory === 'comb') && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  結合韻母與縮寫特殊規則 (18 個)
                </h3>
                <p className="text-xs text-slate-500">
                  重點關注：ㄧㄢ=ian、ㄨㄥ=ong/weng、ㄧㄡ=iu、ㄨㄟ=ui、ㄨㄣ=un
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filterItems(COMBINATION_FINALS).map((item) => (
                <PinyinCard key={item.zhuyin} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* 6. Tone Rules (聲調對照) */}
        {(activeCategory === 'all' || activeCategory === 'tone') && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                聲調對照表 (五度調值與輸入法規則)
              </h3>
              <p className="text-xs text-slate-500">
                註：在拼音輸入法中，常態打字完全不需敲聲調，直接打字母即可選字！
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {TONE_RULES.map((t) => (
                <div
                  key={t.name}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">
                      {t.name}
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <p>注音符號: <strong className="text-slate-800">{t.zhuyinMark}</strong></p>
                      <p>拼音符號: <strong className="text-indigo-600">{t.pinyinMark}</strong></p>
                      <p>調值風格: <span className="text-slate-500">{t.pitch}</span></p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800">{t.example.char}</span>
                      <span className="text-indigo-600 font-mono font-medium">{t.example.pinyin}</span>
                      <span className="text-slate-400 font-mono">{t.example.zhuyin}</span>
                      <button
                        onClick={() => speakChinese(t.example.char)}
                        className="p-1 text-slate-400 hover:text-indigo-600 rounded cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-amber-700 bg-amber-50 p-1.5 rounded">
                      {t.imeTip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-component for individual cards
const PinyinCard: React.FC<{ item: PinyinItem }> = ({ item }) => {
  return (
    <div className="p-3.5 bg-slate-50 hover:bg-indigo-50/40 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xl font-black text-slate-800 font-mono">
            {item.zhuyin}
          </span>
          <button
            onClick={() => speakChinese(item.example)}
            className="p-1 text-slate-400 group-hover:text-indigo-600 hover:bg-white rounded transition-colors cursor-pointer"
            title={`聽「${item.example}」發音`}
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="text-base font-bold text-indigo-600 font-mono mb-1.5">
          {item.pinyin}
        </div>

        <div className="text-xs text-slate-500 flex items-center gap-1.5">
          <span>例:</span>
          <strong className="text-slate-700">{item.example}</strong>
          <span className="text-slate-400 text-[11px]">({item.exampleZhuyin})</span>
        </div>
      </div>

      {item.tip && (
        <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 line-clamp-2 leading-tight">
          {item.tip}
        </div>
      )}
    </div>
  );
};
