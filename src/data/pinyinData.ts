import { PinyinItem } from '../types';

export const INITIALS: PinyinItem[] = [
  { zhuyin: 'ㄅ', pinyin: 'b', example: '包', exampleZhuyin: 'ㄅㄠ', tip: '雙唇不送氣清塞音，對應英文 b', category: 'initial' },
  { zhuyin: 'ㄆ', pinyin: 'p', example: '跑', exampleZhuyin: 'ㄆㄠˇ', tip: '雙唇送氣清塞音，對應英文 p', category: 'initial' },
  { zhuyin: 'ㄇ', pinyin: 'm', example: '貓', exampleZhuyin: 'ㄇㄠ', tip: '雙唇鼻音，與注音ㄇ完全對應 m', category: 'initial' },
  { zhuyin: 'ㄈ', pinyin: 'f', example: '飛', exampleZhuyin: 'ㄈㄟ', tip: '唇齒擦音，對應英文 f', category: 'initial' },

  { zhuyin: 'ㄉ', pinyin: 'd', example: '大', exampleZhuyin: 'ㄉㄚˋ', tip: '舌尖中不送氣，對應英文 d', category: 'initial' },
  { zhuyin: 'ㄊ', pinyin: 't', example: '天', exampleZhuyin: 'ㄊㄧㄢ', tip: '舌尖中送氣，對應英文 t', category: 'initial' },
  { zhuyin: 'ㄋ', pinyin: 'n', example: '你', exampleZhuyin: 'ㄋㄧˇ', tip: '舌尖中鼻音，對應英文 n', category: 'initial' },
  { zhuyin: 'ㄌ', pinyin: 'l', example: '來', exampleZhuyin: 'ㄌㄞˊ', tip: '舌尖中邊音，對應英文 l', category: 'initial' },

  { zhuyin: 'ㄍ', pinyin: 'g', example: '哥', exampleZhuyin: 'ㄍㄜ', tip: '舌根不送氣，對應英文 g (不是 k 喔！)', category: 'initial' },
  { zhuyin: 'ㄎ', pinyin: 'k', example: '開', exampleZhuyin: 'ㄎㄞ', tip: '舌根送氣，對應英文 k', category: 'initial' },
  { zhuyin: 'ㄏ', pinyin: 'h', example: '好', exampleZhuyin: 'ㄏㄠˇ', tip: '舌根擦音，對應英文 h', category: 'initial' },

  { zhuyin: 'ㄐ', pinyin: 'j', example: '家', exampleZhuyin: 'ㄐㄧㄚ', tip: '★重要：舌面前音，對應 j (注音習慣者常猶豫)', category: 'initial' },
  { zhuyin: 'ㄑ', pinyin: 'q', example: '去', exampleZhuyin: 'ㄑㄩˋ', tip: '★魔王：注音ㄑ在拼音是 q！(如 七=qi, 錢=qian)', category: 'initial' },
  { zhuyin: 'ㄒ', pinyin: 'x', example: '謝', exampleZhuyin: 'ㄒㄧㄝˋ', tip: '★魔王：注音ㄒ在拼音是 x！(如 謝謝=xiexie, 西=xi)', category: 'initial' },

  { zhuyin: 'ㄓ', pinyin: 'zh', example: '中', exampleZhuyin: 'ㄓㄨㄥ', tip: '★捲舌音：加 h 就是捲舌音！ㄓ=zh (中國=zhongguo)', category: 'initial' },
  { zhuyin: 'ㄔ', pinyin: 'ch', example: '茶', exampleZhuyin: 'ㄔㄚˊ', tip: '★捲舌音：ㄔ=ch (茶=cha, 吃=chi)', category: 'initial' },
  { zhuyin: 'ㄕ', pinyin: 'sh', example: '是', exampleZhuyin: 'ㄕˋ', tip: '★捲舌音：ㄕ=sh (是=shi, 水=shui)', category: 'initial' },
  { zhuyin: 'ㄖ', pinyin: 'r', example: '日', exampleZhuyin: 'ㄖˋ', tip: '★捲舌音：ㄖ=r (日=ri, 熱=re)', category: 'initial' },

  { zhuyin: 'ㄗ', pinyin: 'z', example: '早', exampleZhuyin: 'ㄗㄠˇ', tip: '★平舌音：不帶 h！ㄗ=z (早=zao, 字=zi)', category: 'initial' },
  { zhuyin: 'ㄘ', pinyin: 'c', example: '草', exampleZhuyin: 'ㄘㄠˇ', tip: '★平舌音：ㄘ在拼音是 c！(草=cao, 菜=cai)', category: 'initial' },
  { zhuyin: 'ㄙ', pinyin: 's', example: '三', exampleZhuyin: 'ㄙㄢ', tip: '★平舌音：ㄙ=s (三=san, 四=si)', category: 'initial' },
];

export const SIMPLE_FINALS: PinyinItem[] = [
  { zhuyin: 'ㄚ', pinyin: 'a', example: '阿', exampleZhuyin: 'ㄚ', tip: '開口呼，發音與 a 相同', category: 'simple-final' },
  { zhuyin: 'ㄛ', pinyin: 'o', example: '窩', exampleZhuyin: 'ㄨㄛ', tip: '合口呼，如波(bo)、破(po)', category: 'simple-final' },
  { zhuyin: 'ㄜ', pinyin: 'e', example: '鵝', exampleZhuyin: 'ㄜˊ', tip: '開口呼，如德(de)、特(te)，拼音為 e', category: 'simple-final' },
  { zhuyin: 'ㄝ', pinyin: 'ê / ie', example: '夜', exampleZhuyin: 'ㄧㄝˋ', tip: '單獨為 ê，多半搭配ㄧ/ㄩ寫作 ie / üe', category: 'simple-final' },
  { zhuyin: 'ㄧ', pinyin: 'i / y', example: '衣', exampleZhuyin: 'ㄧ', tip: '當韻母為 i；無聲母開頭時寫作 y (如 一=yi, 要=yao)', category: 'simple-final' },
  { zhuyin: 'ㄨ', pinyin: 'u / w', example: '五', exampleZhuyin: 'ㄨˇ', tip: '當韻母為 u；無聲母開頭時寫作 w (如 我=wo, 萬=wan)', category: 'simple-final' },
  { zhuyin: 'ㄩ', pinyin: 'ü / yu', example: '魚', exampleZhuyin: 'ㄩˊ', tip: '★打字技巧：一般鍵盤打 v！在 j/q/x 後兩點省寫成 u (ju/qu/xu)', category: 'simple-final' },
];

export const COMPOUND_FINALS: PinyinItem[] = [
  { zhuyin: 'ㄞ', pinyin: 'ai', example: '愛', exampleZhuyin: 'ㄞˋ', tip: 'ㄞ 對應 ai (如 開=kai, 愛=ai)', category: 'compound-final' },
  { zhuyin: 'ㄟ', pinyin: 'ei', example: '黑', exampleZhuyin: 'ㄏㄟ', tip: 'ㄟ 對應 ei (如 黑=hei, 美=mei)', category: 'compound-final' },
  { zhuyin: 'ㄠ', pinyin: 'ao', example: '高', exampleZhuyin: 'ㄍㄠ', tip: 'ㄠ 對應 ao (如 高=gao, 好=hao)', category: 'compound-final' },
  { zhuyin: 'ㄡ', pinyin: 'ou', example: '狗', exampleZhuyin: 'ㄍㄡˇ', tip: 'ㄡ 對應 ou (如 狗=gou, 頭=tou)', category: 'compound-final' },
];

export const NASAL_FINALS: PinyinItem[] = [
  { zhuyin: 'ㄢ', pinyin: 'an', example: '安', exampleZhuyin: 'ㄢ', tip: '前鼻音，以 n 結尾 (安=an, 山=shan)', category: 'nasal-final' },
  { zhuyin: 'ㄣ', pinyin: 'en', example: '門', exampleZhuyin: 'ㄇㄣˊ', tip: '前鼻音，以 n 結尾 (門=men, 本=ben)', category: 'nasal-final' },
  { zhuyin: 'ㄤ', pinyin: 'ang', example: '昂', exampleZhuyin: 'ㄤˊ', tip: '後鼻音，以 ng 結尾 (長=zhang, 幫=bang)', category: 'nasal-final' },
  { zhuyin: 'ㄥ', pinyin: 'eng', example: '風', exampleZhuyin: 'ㄈㄥ', tip: '後鼻音，以 ng 結尾 (風=feng, 彭=peng)', category: 'nasal-final' },
  { zhuyin: 'ㄦ', pinyin: 'er', example: '兒', exampleZhuyin: 'ㄦˊ', tip: '捲舌韻母，對應 er (二=er, 耳=er)', category: 'nasal-final' },
];

export const COMBINATION_FINALS: PinyinItem[] = [
  // ㄧ 系
  { zhuyin: 'ㄧㄚ', pinyin: 'ia / ya', example: '鴨', exampleZhuyin: 'ㄧㄚ', tip: '鴨=ya, 家=jia', category: 'combination-final' },
  { zhuyin: 'ㄧㄝ', pinyin: 'ie / ye', example: '夜', exampleZhuyin: 'ㄧㄝˋ', tip: '夜=ye, 謝=xie, 別=bie', category: 'combination-final' },
  { zhuyin: 'ㄧㄠ', pinyin: 'iao / yao', example: '要', exampleZhuyin: 'ㄧㄠˋ', tip: '要=yao, 叫=jiao, 跳=tiao', category: 'combination-final' },
  { zhuyin: 'ㄧㄡ', pinyin: 'iu / you', example: '有', exampleZhuyin: 'ㄧㄡˇ', tip: '★縮寫陷阱：接聲母寫成 iu！(牛=niu, 六=liu, 有=you)', category: 'combination-final' },
  { zhuyin: 'ㄧㄢ', pinyin: 'ian / yan', example: '煙', exampleZhuyin: 'ㄧㄢ', tip: '★重要：發音像「yen」但拼寫一律為 ian！(天=tian, 點=dian, 煙=yan)', category: 'combination-final' },
  { zhuyin: 'ㄧㄣ', pinyin: 'in / yin', example: '音', exampleZhuyin: 'ㄧㄣ', tip: '音=yin, 金=jin, 心=xin', category: 'combination-final' },
  { zhuyin: 'ㄧㄤ', pinyin: 'iang / yang', example: '陽', exampleZhuyin: 'ㄧㄤˊ', tip: '陽=yang, 想=xiang, 兩=liang', category: 'combination-final' },
  { zhuyin: 'ㄧㄥ', pinyin: 'ing / ying', example: '英', exampleZhuyin: 'ㄧㄥ', tip: '英=ying, 星=xing, 聽=ting', category: 'combination-final' },

  // ㄨ 系
  { zhuyin: 'ㄨㄚ', pinyin: 'ua / wa', example: '蛙', exampleZhuyin: 'ㄨㄚ', tip: '蛙=wa, 抓=zhua, 花=hua', category: 'combination-final' },
  { zhuyin: 'ㄨㄛ', pinyin: 'uo / wo', example: '我', exampleZhuyin: 'ㄨㄛˇ', tip: '我=wo, 多=duo, 說=shuo', category: 'combination-final' },
  { zhuyin: 'ㄨㄞ', pinyin: 'uai / wai', example: '快', exampleZhuyin: 'ㄎㄨㄞˋ', tip: '外=wai, 快=kuai, 怪=guai', category: 'combination-final' },
  { zhuyin: 'ㄨㄟ', pinyin: 'ui / wei', example: '為', exampleZhuyin: 'ㄨㄟˋ', tip: '★縮寫陷阱：接聲母寫成 ui！(對=dui, 會=hui, 為=wei)', category: 'combination-final' },
  { zhuyin: 'ㄨㄢ', pinyin: 'uan / wan', example: '晚', exampleZhuyin: 'ㄨㄢˇ', tip: '晚=wan, 關=guan, 換=huan', category: 'combination-final' },
  { zhuyin: 'ㄨㄣ', pinyin: 'un / wen', example: '文', exampleZhuyin: 'ㄨㄣˊ', tip: '★縮寫陷阱：接聲母寫成 un！(春=chun, 輪=lun, 文=wen)', category: 'combination-final' },
  { zhuyin: 'ㄨㄤ', pinyin: 'uang / wang', example: '王', exampleZhuyin: 'ㄨㄤˊ', tip: '王=wang, 光=guang, 黃=huang', category: 'combination-final' },
  { zhuyin: 'ㄨㄥ', pinyin: 'ong / weng', example: '中', exampleZhuyin: 'ㄓㄨㄥ', tip: '★重要陷阱：單獨寫 weng (翁)，接聲母寫 ong (中=zhong, 東=dong)', category: 'combination-final' },

  // ㄩ 系
  { zhuyin: 'ㄩㄝ', pinyin: 'üe / yue', example: '月', exampleZhuyin: 'ㄩㄝˋ', tip: '月=yue, 學=xue, 雀=que', category: 'combination-final' },
  { zhuyin: 'ㄩㄢ', pinyin: 'üan / yuan', example: '圓', exampleZhuyin: 'ㄩㄢˊ', tip: '圓=yuan, 全=quan, 選=xuan', category: 'combination-final' },
  { zhuyin: 'ㄩㄣ', pinyin: 'ün / yun', example: '雲', exampleZhuyin: 'ㄩㄣˊ', tip: '雲=yun, 軍=jun, 群=qun', category: 'combination-final' },
  { zhuyin: 'ㄩㄥ', pinyin: 'iong / yong', example: '勇', exampleZhuyin: 'ㄩㄥˇ', tip: '勇=yong, 兄=xiong, 窮=qiong', category: 'combination-final' },
];

export interface ToneInfo {
  name: string;
  zhuyinMark: string;
  pinyinMark: string;
  pitch: string;
  example: { char: string; pinyin: string; zhuyin: string };
  imeTip: string;
}

export const TONE_RULES: ToneInfo[] = [
  {
    name: '第一聲 (陰平)',
    zhuyinMark: '無符號 (空格)',
    pinyinMark: 'ā, ō, ē, ī, ū, ǖ',
    pitch: '高平調 (55)',
    example: { char: '媽', pinyin: 'mā', zhuyin: 'ㄇㄚ' },
    imeTip: '輸入法免打！直接敲打 ma 即可'
  },
  {
    name: '第二聲 (陽平)',
    zhuyinMark: 'ˊ (右上二聲號)',
    pinyinMark: 'á, ó, é, í, ú, ǘ',
    pitch: '中升調 (35)',
    example: { char: '麻', pinyin: 'má', zhuyin: 'ㄇㄚˊ' },
    imeTip: '打字時通常不需打聲調，如需要時部分工具標 2'
  },
  {
    name: '第三聲 (上聲)',
    zhuyinMark: 'ˇ (上聲號)',
    pinyinMark: 'ǎ, ǒ, ě, ǐ, ǔ, ǚ',
    pitch: '降升調 (214)',
    example: { char: '馬', pinyin: 'mǎ', zhuyin: 'ㄇㄚˇ' },
    imeTip: '打字免調，直接打 ma 選字'
  },
  {
    name: '第四聲 (去聲)',
    zhuyinMark: 'ˋ (去聲號)',
    pinyinMark: 'à, ò, è, ì, ù, ǜ',
    pitch: '全降調 (51)',
    example: { char: '罵', pinyin: 'mà', zhuyin: 'ㄇㄚˋ' },
    imeTip: '直接打 ma 即能在候選詞中快速找到'
  },
  {
    name: '輕聲',
    zhuyinMark: '˙ (上方/前圓點)',
    pinyinMark: '無調號 (ma)',
    pitch: '短促輕音',
    example: { char: '嗎', pinyin: 'ma', zhuyin: '˙ㄇㄚ' },
    imeTip: '打字時完全不用敲特殊鍵'
  }
];
