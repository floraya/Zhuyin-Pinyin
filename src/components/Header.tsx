import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { getLevelFromExp } from '../utils/storage';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  exp: number;
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  onOpenAchievements: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  exp,
  soundEnabled,
  setSoundEnabled,
  onOpenAchievements,
}) => {
  const levelInfo = getLevelFromExp(exp);

  const navLinks = [
    { id: 'stages', label: '闖關挑戰' },
    { id: 'typing', label: '實戰打字機' },
    { id: 'chart', label: '對照表與字典' },
    { id: 'traps', label: '避坑指引' },
    { id: 'stats', label: '個人成就' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('stages')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-black text-lg shadow-sm">
              拼
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors whitespace-nowrap block">
                注音轉拼音大作戰
              </span>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:block whitespace-nowrap">
                注音族無痛切換拼音輸入法
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4–5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action & level quick status */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? '點擊關閉音效' : '點擊開啟發音音效'}
            aria-label={soundEnabled ? '關閉發音' : '開啟發音'}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-indigo-600" /> : <VolumeX className="w-5 h-5" />}
          </button>

          <button
            onClick={onOpenAchievements}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-lg text-xs font-medium text-slate-700 hover:text-indigo-700 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="tabular-nums font-semibold text-slate-900">Lv.{levelInfo.level}</span>
            <span className="text-slate-500 hidden sm:inline">{levelInfo.title}</span>
            <span className="text-indigo-600 font-bold tabular-nums">· {exp} EXP</span>
          </button>
        </div>
      </div>

      {/* Mobile sub navigation bar */}
      <div className="md:hidden flex items-center overflow-x-auto py-2 px-4 gap-2 border-t border-slate-100 bg-slate-50/80 no-scrollbar">
        {navLinks.map((link) => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
