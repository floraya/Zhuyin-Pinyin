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
    name: '平捲舌辨析師',
    description: '成功攻克第四關「平捲舌極限瞬發對抗」！',
    icon: '🎯',
    condition: (stats) => !!stats.stageProgress[4]?.completed,
  },
  {
    id: 'jqx-breaker',
    name: 'JQX 破壁者',
    description: '成功攻破第五關，熟練掌握 ㄐ=j、ㄑ=q、ㄒ=x！',
    icon: '🗝️',
    condition: (stats) => !!stats.stageProgress[5]?.completed,
  },
  {
    id: 'nasal-expert',
    name: '前後鼻音天秤',
    description: '成功攻克第八關，精準區分 -n 與 -ng！',
    icon: '⚖️',
    condition: (stats) => !!stats.stageProgress[8]?.completed,
  },
  {
    id: 'dots-master',
    name: '除點幻術師',
    description: '通關第十一關，徹底搞懂 ü 在 jqx 脫帽與 nv/lv 打 v 的規則！',
    icon: '🎩',
    condition: (stats) => !!stats.stageProgress[11]?.completed,
  },
  {
    id: 'trap-defier',
    name: '大魔王除陷大師',
    description: '通關第十二關，擊破 -ian、-ong、-iu、-ui、-un 所有陷阱！',
    icon: '🛡️',
    condition: (stats) => !!stats.stageProgress[12]?.completed,
  },
  {
    id: 'idiom-master',
    name: '簡拼成語大師',
    description: '通關第十四關，熟練掌握四字成語首字母簡拼思維！',
    icon: '⚡',
    condition: (stats) => !!stats.stageProgress[14]?.completed,
  },
  {
    id: 'grandmaster',
    name: '拼音至尊王者',
    description: '全數攻克 15 個進階關卡，榮登拼音至尊殿堂！',
    icon: '👑',
    condition: (stats) => {
      for (let i = 1; i <= 15; i++) {
        if (!stats.stageProgress[i]?.completed) return false;
      }
      return true;
    },
  },
];
