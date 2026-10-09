import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-step',
    name: '啟程第一步',
    description: '完成第一關挑戰，邁出認識漢語拼音的第一步！',
    icon: '🌱',
    condition: (stats) => !!stats.stageProgress[1]?.completed,
  },
  {
    id: 'streak-5',
    name: '漸入佳境',
    description: '達成連續答對 5 題連擊紀錄！',
    icon: '⚡',
    condition: (stats) => stats.bestStreak >= 5,
  },
  {
    id: 'streak-10',
    name: '心手相應',
    description: '達成連續答對 10 題連擊，對拼音規則了然於胸！',
    icon: '🔥',
    condition: (stats) => stats.bestStreak >= 10,
  },
  {
    id: 'retroflex-master',
    name: '平捲舌征服者',
    description: '成功攻克第二關「舌尖與捲舌對決」！',
    icon: '🎯',
    condition: (stats) => !!stats.stageProgress[2]?.completed,
  },
  {
    id: 'jqx-breaker',
    name: 'JQX 破壁者',
    description: '成功攻破第三關，熟練掌握 ㄐ=j、ㄑ=q、ㄒ=x！',
    icon: '🗝️',
    condition: (stats) => !!stats.stageProgress[3]?.completed,
  },
  {
    id: 'trap-defier',
    name: '大魔王除陷大師',
    description: '通關第六關，徹底攻克 ju/qu/xu、-ian、-ong、-iu 等台灣人常見陷阱！',
    icon: '🛡️',
    condition: (stats) => !!stats.stageProgress[6]?.completed,
  },
  {
    id: 'exp-300',
    name: '拼音熟手',
    description: '累積獲得超過 300 EXP！',
    icon: '⭐',
    condition: (stats) => stats.exp >= 300,
  },
  {
    id: 'grandmaster',
    name: '拼音宗師',
    description: '完成全部 8 個關卡，榮膺拼音宗師頭銜！',
    icon: '👑',
    condition: (stats) => {
      for (let i = 1; i <= 8; i++) {
        if (!stats.stageProgress[i]?.completed) return false;
      }
      return true;
    },
  },
];
