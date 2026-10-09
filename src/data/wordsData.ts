import { TypingWord } from '../types';

export const TYPING_WORDS: TypingWord[] = [
  // 台灣生活與美食
  { hanzi: '珍珠奶茶', zhuyin: 'ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ', pinyin: 'zhenzhunaicha', shortcut: 'zznc', category: '台灣美食' },
  { hanzi: '滷肉飯', zhuyin: 'ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ', pinyin: 'luroufan', shortcut: 'lrf', category: '台灣美食' },
  { hanzi: '小籠包', zhuyin: 'ㄒㄧㄠˇ ㄌㄨㄥˊ ㄅㄠ', pinyin: 'xiaolongbao', shortcut: 'xlb', category: '台灣美食' },
  { hanzi: '鹹酥雞', zhuyin: 'ㄒㄧㄢˊ ㄙㄨ ㄐㄧ', pinyin: 'xiansuji', shortcut: 'xsj', category: '台灣美食' },
  { hanzi: '芒果冰', zhuyin: 'ㄇㄤˊ ㄍㄨㄛˇ ㄅㄧㄥ', pinyin: 'mangguobing', shortcut: 'mgb', category: '台灣美食' },
  { hanzi: '臭豆腐', zhuyin: 'ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ', pinyin: 'choudoufu', shortcut: 'cdf', category: '台灣美食' },

  // 地名與交通
  { hanzi: '台灣', zhuyin: 'ㄊㄞˊ ㄨㄢ', pinyin: 'taiwan', shortcut: 'tw', category: '地名交通' },
  { hanzi: '台北', zhuyin: 'ㄊㄞˊ ㄅㄟˇ', pinyin: 'taibei', shortcut: 'tb', category: '地名交通' },
  { hanzi: '高雄', zhuyin: 'ㄍㄠ ㄒㄩㄥˊ', pinyin: 'gaoxiong', shortcut: 'gx', category: '地名交通' },
  { hanzi: '台中', zhuyin: 'ㄊㄞˊ ㄓㄨㄥ', pinyin: 'taizhong', shortcut: 'tz', category: '地名交通' },
  { hanzi: '高鐵', zhuyin: 'ㄍㄠ ㄊㄧㄝˇ', pinyin: 'gaotie', shortcut: 'gt', category: '地名交通' },
  { hanzi: '捷運', zhuyin: 'ㄐㄧㄝˊ ㄩㄣˋ', pinyin: 'jieyun', shortcut: 'jy', category: '地名交通' },
  { hanzi: '悠遊卡', zhuyin: 'ㄧㄡ ㄧㄡˊ ㄎㄚˇ', pinyin: 'youyouka', shortcut: 'yyk', category: '地名交通' },
  { hanzi: '夜市', zhuyin: 'ㄧㄝˋ ㄕˋ', pinyin: 'yeshi', shortcut: 'ys', category: '地名交通' },

  // 社交與常用禮貌語
  { hanzi: '你好', zhuyin: 'ㄋㄧˇ ㄏㄠˇ', pinyin: 'nihao', shortcut: 'nh', category: '日常用語' },
  { hanzi: '謝謝', zhuyin: 'ㄒㄧㄝˋ ㄒㄧㄝ˙', pinyin: 'xiexie', shortcut: 'xx', category: '日常用語' },
  { hanzi: '不客氣', zhuyin: 'ㄅㄨˊ ㄎㄜˋ ㄑㄧˋ', pinyin: 'bukaqi', shortcut: 'bkq', category: '日常用語' },
  { hanzi: '早安', zhuyin: 'ㄗㄠˇ ㄢ', pinyin: 'zaoan', shortcut: 'za', category: '日常用語' },
  { hanzi: '晚安', zhuyin: 'ㄨㄢˇ ㄢ', pinyin: 'wanan', shortcut: 'wa', category: '日常用語' },
  { hanzi: '沒關係', zhuyin: 'ㄇㄟˊ ㄍㄨㄢ ㄒㄧ˙', pinyin: 'meiguanxi', shortcut: 'mgx', category: '日常用語' },

  // 科技與學習
  { hanzi: '輸入法', zhuyin: 'ㄕㄨ ㄖㄨˋ ㄈㄚˇ', pinyin: 'shurufa', shortcut: 'srf', category: '科技學習' },
  { hanzi: '漢語拼音', zhuyin: 'ㄏㄢˋ ㄩˇ ㄆㄧㄣ ㄧㄣ', pinyin: 'hanyupinyin', shortcut: 'hypy', category: '科技學習' },
  { hanzi: '注音符號', zhuyin: 'ㄓㄨˋ ㄧㄣ ㄈㄨˊ ㄏㄠˋ', pinyin: 'zhuyinfuhao', shortcut: 'zyfh', category: '科技學習' },
  { hanzi: '智慧手機', zhuyin: 'ㄓˋ ㄏㄨㄟˋ ㄕㄡˇ ㄐㄧ', pinyin: 'zhihuishouji', shortcut: 'zhsj', category: '科技學習' },
  { hanzi: '電腦鍵盤', zhuyin: 'ㄉㄧㄢˋ ㄋㄠˇ ㄐㄧㄢˋ ㄆㄢˊ', pinyin: 'diannaojianpan', shortcut: 'dnjp', category: '科技學習' },
  { hanzi: '事半功倍', zhuyin: 'ㄕˋ ㄅㄢˋ ㄍㄨㄥ ㄅㄟˋ', pinyin: 'shibangongbei', shortcut: 'sbgb', category: '常用成語' },
  { hanzi: '循序漸進', zhuyin: 'ㄒㄩㄣˊ ㄒㄩˋ ㄐㄧㄢˋ ㄐㄧㄣˋ', pinyin: 'xunxujianjin', shortcut: 'xxjj', category: '常用成語' },
];
