import { Stage } from '../types';

export const STAGES: Stage[] = [
  {
    id: 1,
    title: '第一關：基礎聲母啟蒙',
    subtitle: 'ㄅㄆㄇㄈ · ㄉㄊㄋㄌ · ㄍㄎㄏ',
    badge: '聲母幼苗',
    description: '認識拼音中最平易近人的基礎聲母，建立注音到拉丁字母的第一步直覺對應！',
    targetCategory: '基礎聲母',
    iconName: 'Sparkles',
    unlockRequirementExp: 0,
    questions: [
      {
        id: 's1-q1',
        type: 'single-choice',
        prompt: '注音符號「ㄅ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄅ',
        options: ['b', 'p', 'd', 'm'],
        correctAnswer: 'b',
        explanation: '「ㄅ」在拼音中直接對應「b」，如爸爸 (baba)、包子 (baozi)。',
        audioText: 'ㄅ'
      },
      {
        id: 's1-q2',
        type: 'single-choice',
        prompt: '注音符號「ㄆ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄆ',
        options: ['p', 'b', 't', 'f'],
        correctAnswer: 'p',
        explanation: '「ㄆ」在拼音中對應「p」(送氣音)，如朋友 (pengyou)、蘋果 (pingguo)。',
        audioText: 'ㄆ'
      },
      {
        id: 's1-q3',
        type: 'single-choice',
        prompt: '注音符號「ㄉ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄉ',
        options: ['d', 't', 'b', 'g'],
        correctAnswer: 'd',
        explanation: '「ㄉ」對應「d」，如大地 (dadi)、電話 (dianhua)。',
        audioText: 'ㄉ'
      },
      {
        id: 's1-q4',
        type: 'single-choice',
        prompt: '注音符號「ㄊ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄊ',
        options: ['t', 'd', 'l', 'k'],
        correctAnswer: 't',
        explanation: '「ㄊ」對應「t」(送氣音)，如天氣 (tianqi)、太陽 (taiyang)。',
        audioText: 'ㄊ'
      },
      {
        id: 's1-q5',
        type: 'single-choice',
        prompt: '注意！注音「ㄍ」在漢語拼音中對應哪個字母？(初學者最容易手滑選錯)',
        targetZhuyin: 'ㄍ',
        options: ['g', 'k', 'h', 'j'],
        correctAnswer: 'g',
        explanation: '「ㄍ」對應「g」！例如哥哥是 gege，高鐵是 gaotie。注意「k」是注音的「ㄎ」！',
        audioText: 'ㄍ'
      },
      {
        id: 's1-q6',
        type: 'single-choice',
        prompt: '注音「ㄎ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄎ',
        options: ['k', 'g', 'c', 'h'],
        correctAnswer: 'k',
        explanation: '「ㄎ」對應「k」，例如開心 (kaixin)、咖啡 (kafei)。',
        audioText: 'ㄎ'
      },
      {
        id: 's1-q7',
        type: 'single-choice',
        prompt: '注音「ㄈ」與「ㄏ」分別對應哪兩個拼音字母？',
        targetZhuyin: 'ㄈ ㄏ',
        options: ['f 與 h', 'h 與 f', 'f 與 k', 'v 與 h'],
        correctAnswer: 'f 與 h',
        explanation: 'ㄈ 對應 f (飛 fei)，ㄏ 對應 h (好 hao)。',
        audioText: 'ㄈ ㄏ'
      },
      {
        id: 's1-q8',
        type: 'single-choice',
        prompt: '注音「ㄋ」與「ㄌ」分別對應哪兩個拼音字母？',
        targetZhuyin: 'ㄋ ㄌ',
        options: ['n 與 l', 'l 與 n', 'm 與 r', 'n 與 r'],
        correctAnswer: 'n 與 l',
        explanation: 'ㄋ 對應 n (你 ni)，ㄌ 對應 l (來 lai)。',
        audioText: 'ㄋ ㄌ'
      },
    ]
  },
  {
    id: 2,
    title: '第二關：舌尖與捲舌對決',
    subtitle: 'ㄓㄔㄕㄖ (捲舌) vs ㄗㄘㄙ (平舌)',
    badge: '舌尖御風者',
    description: '掌握加「h」就是捲舌音的核心規律，克服注音輸入法按鍵分佈的肌肉記憶轉移！',
    targetCategory: '平捲舌音',
    iconName: 'Zap',
    unlockRequirementExp: 70,
    questions: [
      {
        id: 's2-q1',
        type: 'single-choice',
        prompt: '注音「ㄓ」在漢語拼音中怎麼拼寫？',
        targetZhuyin: 'ㄓ',
        options: ['zh', 'z', 'ch', 'j'],
        correctAnswer: 'zh',
        explanation: 'ㄓ 是捲舌音，在 z 後面加上 h，寫作「zh」，如中國 (zhongguo)、知道 (zhidao)。',
        audioText: 'ㄓ'
      },
      {
        id: 's2-q2',
        type: 'single-choice',
        prompt: '注音「ㄗ」在漢語拼音中怎麼拼寫？',
        targetZhuyin: 'ㄗ',
        options: ['z', 'zh', 'c', 's'],
        correctAnswer: 'z',
        explanation: 'ㄗ 是平舌音，不帶 h，單純寫作「z」，如早安 (zaoan)、自私 (zisi)。',
        audioText: 'ㄗ'
      },
      {
        id: 's2-q3',
        type: 'single-choice',
        prompt: '★超高頻陷阱：注音「ㄘ」在拼音中對應哪一個字母？',
        targetZhuyin: 'ㄘ',
        options: ['c', 'ch', 'ts', 's'],
        correctAnswer: 'c',
        explanation: '「ㄘ」在漢語拼音中對應「c」！例如：草 (cao)、菜 (cai)、詞 (ci)。',
        audioText: 'ㄘ'
      },
      {
        id: 's2-q4',
        type: 'single-choice',
        prompt: '注音「ㄔ」對應哪一個拼音？',
        targetZhuyin: 'ㄔ',
        options: ['ch', 'c', 'q', 'sh'],
        correctAnswer: 'ch',
        explanation: 'ㄔ 是捲舌音，寫作「ch」，如吃飯 (chifan)、茶 (cha)。',
        audioText: 'ㄔ'
      },
      {
        id: 's2-q5',
        type: 'single-choice',
        prompt: '注音「ㄕ」與「ㄙ」的拼音分別是？',
        targetZhuyin: 'ㄕ vs ㄙ',
        options: ['sh 與 s', 's 與 sh', 'x 與 s', 'sh 與 c'],
        correctAnswer: 'sh 與 s',
        explanation: 'ㄕ 捲舌是 sh (老師 laoshi)；ㄙ 平舌是 s (司機 siji)。',
        audioText: 'ㄕ ㄙ'
      },
      {
        id: 's2-q6',
        type: 'single-choice',
        prompt: '注音「ㄖ」在拼音中對應哪個字母？',
        targetZhuyin: 'ㄖ',
        options: ['r', 'j', 'l', 'z'],
        correctAnswer: 'r',
        explanation: 'ㄖ 在拼音中對應「r」，例如日子 (rizi)、熱情 (reqing)、日本 (riben)。',
        audioText: 'ㄖ'
      },
      {
        id: 's2-q7',
        type: 'single-choice',
        prompt: '詞彙「出差」的注音是 ㄔㄨ ㄔㄞ，對應的拼音聲母是什麼？',
        targetZhuyin: 'ㄔㄨ ㄔㄞ',
        options: ['chuchai', 'cucai', 'zhuzhai', 'quqai'],
        correctAnswer: 'chuchai',
        explanation: '兩字皆為捲舌「ㄔ」，拼音為 ch-u ch-ai = chuchai！',
        audioText: '出差'
      },
      {
        id: 's2-q8',
        type: 'single-choice',
        prompt: '詞彙「自主」的注音是 ㄗˋ ㄓㄨˇ，平捲舌順序在拼音中是？',
        targetZhuyin: 'ㄗˋ ㄓㄨˇ',
        options: ['zizhu (先平後捲)', 'zhizhu (全捲)', 'zizu (全平)', 'zhizu (先捲後平)'],
        correctAnswer: 'zizhu (先平後捲)',
        explanation: '自(ㄗˋ)=zi (平舌)，主(ㄓㄨˇ)=zhu (捲舌)，因此拼音是 zizhu！',
        audioText: '自主'
      },
    ]
  },
  {
    id: 3,
    title: '第三關：舌面新字母大解密',
    subtitle: 'ㄐ=j · ㄑ=q · ㄒ=x (台灣人最陌生的鍵)',
    badge: '破壁探索者',
    description: '注音使用者切換拼音時最容易卡住的三大字母：ㄑ在 q、ㄒ在 x！徹底建立按鍵條件反射！',
    targetCategory: '舌面音',
    iconName: 'Compass',
    unlockRequirementExp: 150,
    questions: [
      {
        id: 's3-q1',
        type: 'single-choice',
        prompt: '注音「ㄐ」在漢語拼音中對應哪個字母？',
        targetZhuyin: 'ㄐ',
        options: ['j', 'g', 'z', 'q'],
        correctAnswer: 'j',
        explanation: 'ㄐ 對應字母「j」，例如家 (jia)、今天 (jintian)。',
        audioText: 'ㄐ'
      },
      {
        id: 's3-q2',
        type: 'single-choice',
        prompt: '★魔王核心：注音「ㄑ」在漢語拼音中對應哪個字母？',
        targetZhuyin: 'ㄑ',
        options: ['q', 'ch', 'c', 'k'],
        correctAnswer: 'q',
        explanation: '「ㄑ」對應「q」！注音族切換最大痛點：例如去 (qu)、七 (qi)、請 (qing)、錢 (qian)。',
        audioText: 'ㄑ'
      },
      {
        id: 's3-q3',
        type: 'single-choice',
        prompt: '★魔王核心：注音「ㄒ」在漢語拼音中對應哪個字母？',
        targetZhuyin: 'ㄒ',
        options: ['x', 'sh', 's', 'h'],
        correctAnswer: 'x',
        explanation: '「ㄒ」對應「x」！例如謝謝 (xiexie)、西瓜 (xigua)、學校 (xuexiao)。',
        audioText: 'ㄒ'
      },
      {
        id: 's3-q4',
        type: 'single-choice',
        prompt: '日常高頻詞「謝謝」的注音是 ㄒㄧㄝˋ ㄒㄧㄝ˙，漢語拼音怎麼打？',
        targetZhuyin: 'ㄒㄧㄝˋ ㄒㄧㄝ˙',
        options: ['xiexie', 'sheshie', 'siesie', 'hiehie'],
        correctAnswer: 'xiexie',
        explanation: 'ㄒ 對應 x，ㄧㄝ 對應 ie，所以「謝謝」打 xiexie！',
        audioText: '謝謝'
      },
      {
        id: 's3-q5',
        type: 'single-choice',
        prompt: '想要打出「機器人」的「機器」(ㄐㄧ ㄑㄧˋ)，拼音應該輸入？',
        targetZhuyin: 'ㄐㄧ ㄑㄧˋ',
        options: ['jiqi', 'jiqi (ㄐ=j, ㄑ=q)', 'chichi', 'jiji'],
        correctAnswer: 'jiqi',
        explanation: '機(ㄐㄧ)=ji，器(ㄑㄧˋ)=qi，合起來是 jiqi！',
        audioText: '機器'
      },
      {
        id: 's3-q6',
        type: 'single-choice',
        prompt: '「七星潭」的「七星」(ㄑㄧ ㄒㄧㄥ)，拼音是？',
        targetZhuyin: 'ㄑㄧ ㄒㄧㄥ',
        options: ['qixing', 'chising', 'cixing', 'qisin'],
        correctAnswer: 'qixing',
        explanation: '七=qi，星=xing，所以是 qixing！牢記 ㄑ=q, ㄒ=x。',
        audioText: '七星'
      },
    ]
  },
  {
    id: 4,
    title: '第四關：基礎單韻母與介母',
    subtitle: 'ㄚㄛㄜㄝ · ㄧㄨㄩ (含打字機 v 鍵密技)',
    badge: '清音行者',
    description: '掌握單韻母轉換，了解「ㄧ、ㄨ、ㄩ」獨立時與接聲母時的變化，以及「v 代打 ü」的鍵盤秘技！',
    targetCategory: '單韻母與介母',
    iconName: 'BookOpen',
    unlockRequirementExp: 220,
    questions: [
      {
        id: 's4-q1',
        type: 'single-choice',
        prompt: '注音「ㄜ」在漢語拼音中對應哪一個字母？',
        targetZhuyin: 'ㄜ',
        options: ['e', 'o', 'a', 'er'],
        correctAnswer: 'e',
        explanation: '「ㄜ」在拼音中寫作「e」，例如鵝 (e)、德 (de)、特 (te)。',
        audioText: 'ㄜ'
      },
      {
        id: 's4-q2',
        type: 'single-choice',
        prompt: '注音「ㄧ」在獨立成字（無聲母）時，拼音如何寫？例如「衣服」的「衣」。',
        targetZhuyin: 'ㄧ',
        options: ['yi', 'i', 'y', 'ee'],
        correctAnswer: 'yi',
        explanation: '「ㄧ」單獨成字無聲母時，開頭要補 y，寫作「yi」(如 一、衣、移)；在聲母後才單純寫 i (如 你 ni)。',
        audioText: '衣'
      },
      {
        id: 's4-q3',
        type: 'single-choice',
        prompt: '注音「ㄨ」在獨立成字（無聲母）時，拼音如何寫？例如「我們」的「我」(ㄨㄛˇ)。',
        targetZhuyin: 'ㄨㄛˇ',
        options: ['wo (ㄨ變為w)', 'uo', 'wu', 'oo'],
        correctAnswer: 'wo (ㄨ變為w)',
        explanation: '「ㄨ」獨立成字時，如果後面有韻母就將 u 換成 w (如 我 wo，外 wai)；只有單獨一個 ㄨ 則寫作 wu (如 五 wu)。',
        audioText: '我'
      },
      {
        id: 's4-q4',
        type: 'single-choice',
        prompt: '★打字神器：在 QWERTY 英文鍵盤上打「綠(ㄌㄩˋ)」或「女(ㄋㄩˇ)」，要按哪一個鍵來代表「ü」？',
        targetZhuyin: 'ㄩ (ü)',
        options: ['v 鍵', 'u 鍵', 'y 鍵', 'w 鍵'],
        correctAnswer: 'v 鍵',
        explanation: '因為英文字母中沒有 ü，所有拼音輸入法統一用鍵盤底部的「v」鍵代替 ü！所以打「綠」輸入 lv，「女」輸入 nv！',
        audioText: '綠'
      },
      {
        id: 's4-q5',
        type: 'single-choice',
        prompt: '注音「ㄩ」獨立成字時怎麼寫？例如「月亮」的「月」(ㄩㄝˋ)。',
        targetZhuyin: 'ㄩㄝˋ',
        options: ['yue', 'üe', 'ue', 've'],
        correctAnswer: 'yue',
        explanation: '「ㄩ」無聲母獨立成字時寫作「yu」，所以 ㄩㄝ 寫作 yue，ㄩㄢ 寫作 yuan！',
        audioText: '月'
      },
      {
        id: 's4-q6',
        type: 'single-choice',
        prompt: '「阿里山」的「阿」(ㄚ) 拼音是？',
        targetZhuyin: 'ㄚ',
        options: ['a', 'ah', 'o', 'e'],
        correctAnswer: 'a',
        explanation: 'ㄚ 直接對應 a！',
        audioText: '阿'
      },
    ]
  },
  {
    id: 5,
    title: '第五關：複合韻母與鼻音辨析',
    subtitle: 'ㄞㄟㄠㄡ · ㄢㄣ (前鼻) vs ㄤㄥ (後鼻)',
    badge: '雙韻操偶師',
    description: '解決台灣人容易混淆的「ㄣ (en)」與「ㄥ (eng)」！弄懂有 g 是後鼻音、無 g 是前鼻音！',
    targetCategory: '複合與鼻音韻母',
    iconName: 'Layers',
    unlockRequirementExp: 300,
    questions: [
      {
        id: 's5-q1',
        type: 'single-choice',
        prompt: '注音「ㄞ」與「ㄟ」的拼音分別是？',
        targetZhuyin: 'ㄞ ㄟ',
        options: ['ai 與 ei', 'ay 與 ey', 'ei 與 ai', 'ae 與 ee'],
        correctAnswer: 'ai 與 ei',
        explanation: 'ㄞ 是 ai (愛 ai, 開 kai)；ㄟ 是 ei (黑 hei, 美 mei)。',
        audioText: 'ㄞ ㄟ'
      },
      {
        id: 's5-q2',
        type: 'single-choice',
        prompt: '注音「ㄠ」與「ㄡ」的拼音分別是？',
        targetZhuyin: 'ㄠ ㄡ',
        options: ['ao 與 ou', 'ou 與 ao', 'au 與 eu', 'aw 與 ow'],
        correctAnswer: 'ao 與 ou',
        explanation: 'ㄠ 是 ao (高 gao, 貓 mao)；ㄡ 是 ou (狗 gou, 頭 tou)。',
        audioText: 'ㄠ ㄡ'
      },
      {
        id: 's5-q3',
        type: 'single-choice',
        prompt: '注音「ㄣ」是前鼻音，它的拼音結尾字母是什麼？例如：門 (ㄇㄣˊ)。',
        targetZhuyin: 'ㄣ',
        options: ['en (以 n 結尾)', 'eng (以 ng 結尾)', 'in', 'em'],
        correctAnswer: 'en (以 n 結尾)',
        explanation: '「ㄣ」是前鼻音，拼寫收在單個「n」(如 門 men, 本 ben, 真 zhen)。',
        audioText: '門'
      },
      {
        id: 's5-q4',
        type: 'single-choice',
        prompt: '注音「ㄥ」是後鼻音，它的拼音結尾字母是什麼？例如：風 (ㄈㄥ)。',
        targetZhuyin: 'ㄥ',
        options: ['eng (以 ng 結尾)', 'en (以 n 結尾)', 'on', 'ong'],
        correctAnswer: 'eng (以 ng 結尾)',
        explanation: '「ㄥ」是後鼻音，在拼音中帶有「g」，寫作「eng」(如 風 feng, 能 neng, 朋 peng)。',
        audioText: '風'
      },
      {
        id: 's5-q5',
        type: 'single-choice',
        prompt: '注音「ㄦ」在拼音中對應什麼？例如「二、耳、兒童」。',
        targetZhuyin: 'ㄦ',
        options: ['er', 'r', 'el', 'ur'],
        correctAnswer: 'er',
        explanation: 'ㄦ 對應「er」，如 二 (er), 兒子 (erzi)。',
        audioText: '二'
      },
      {
        id: 's5-q6',
        type: 'single-choice',
        prompt: '「真(ㄓㄣ)」與「爭(ㄓㄥ)」在拼音上的差別是？',
        targetZhuyin: 'ㄓㄣ vs ㄓㄥ',
        options: ['zhen vs zheng', 'zen vs zeng', 'zheng vs zhen', 'jin vs jing'],
        correctAnswer: 'zhen vs zheng',
        explanation: 'ㄓㄣ(前鼻音)=zhen；ㄓㄥ(後鼻音帶g)=zheng！',
        audioText: '真 爭'
      },
    ]
  },
  {
    id: 6,
    title: '第六關：台灣人常見大魔王陷阱挑戰',
    subtitle: 'ju/qu/xu · -ian · -ong · iu · ui · un',
    badge: '除陷大師',
    description: '最關鍵的一關！攻克注音族在切換輸入法時 90% 人都會踩到的 6 大規則陷阱！',
    targetCategory: '大魔王規則',
    iconName: 'Flame',
    unlockRequirementExp: 380,
    questions: [
      {
        id: 's6-q1',
        type: 'single-choice',
        prompt: '【陷阱1】「去」的注音是 ㄑㄩˋ，在拼音輸入法裡要打什麼？',
        targetZhuyin: 'ㄑㄩˋ',
        options: ['qu (省去兩點)', 'qv', 'qü', 'chu'],
        correctAnswer: 'qu (省去兩點)',
        explanation: 'j, q, x 與 ü 結合時兩點省略，打字時直接按字母 u！所以「去」打 qu！',
        audioText: '去'
      },
      {
        id: 's6-q2',
        type: 'single-choice',
        prompt: '【陷阱2】「天空」的「天」(ㄊㄧㄢ)，拼音是？(聽起來像 yen 但寫法是？)',
        targetZhuyin: 'ㄊㄧㄢ',
        options: ['tian', 'tyen', 'ten', 'tain'],
        correctAnswer: 'tian',
        explanation: '雖然「ㄧㄢ」聽起來口形接近 yen，但拼音一律固定寫為「-ian」！所以「天」打 tian。',
        audioText: '天'
      },
      {
        id: 's6-q3',
        type: 'single-choice',
        prompt: '【陷阱3】「中」的注音是 ㄓㄨㄥ，它的拼音不是 zhweng，而是什麼？',
        targetZhuyin: 'ㄓㄨㄥ',
        options: ['zhong', 'zhweng', 'zong', 'jung'],
        correctAnswer: 'zhong',
        explanation: '「ㄨㄥ」在前面有聲母時，一律變裝為「-ong」！所以 ㄓ+ㄨㄥ = zhong，ㄉ+ㄨㄥ = dong！',
        audioText: '中'
      },
      {
        id: 's6-q4',
        type: 'single-choice',
        prompt: '【陷阱4】「牛」的注音是 ㄋㄧㄡˊ，在拼音縮寫規則下要打什麼？',
        targetZhuyin: 'ㄋㄧㄡˊ',
        options: ['niu (省去 o)', 'niou', 'nyou', 'neo'],
        correctAnswer: 'niu (省去 o)',
        explanation: '「ㄧㄡ」接在聲母後面時，中間的 o 被省寫，直接拼作「iu」！所以牛=niu, 六=liu。',
        audioText: '牛'
      },
      {
        id: 's6-q5',
        type: 'single-choice',
        prompt: '【陷阱5】「對不起」的「對」(ㄉㄨㄟˋ)，在拼音縮寫規則下要打什麼？',
        targetZhuyin: 'ㄉㄨㄟˋ',
        options: ['dui (省去 e)', 'duei', 'dway', 'dve'],
        correctAnswer: 'dui (省去 e)',
        explanation: '「ㄨㄟ」接在聲母後面時，中間的 e 被省寫，直接拼作「ui」！所以對=dui, 會=hui。',
        audioText: '對'
      },
      {
        id: 's6-q6',
        type: 'single-choice',
        prompt: '【陷阱6】「春天」的「春」(ㄔㄨㄣ)，在拼音縮寫規則下要打什麼？',
        targetZhuyin: 'ㄔㄨㄣ',
        options: ['chun (省去 e)', 'chuen', 'chwen', 'cun'],
        correctAnswer: 'chun (省去 e)',
        explanation: '「ㄨㄣ」接在聲母後面時省寫為「un」！所以春=chun, 輪=lun, 準=zhun。',
        audioText: '春'
      },
      {
        id: 's6-q7',
        type: 'single-choice',
        prompt: '【綜合陷阱】台灣人最愛的「珍珠奶茶」(ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ)，四個字拼音是？',
        targetZhuyin: 'ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ',
        options: ['zhen zhu nai cha', 'zen zu nai ca', 'zhen zhu nai ca', 'zhen ju nai cha'],
        correctAnswer: 'zhen zhu nai cha',
        explanation: '珍=zhen, 珠=zhu, 奶=nai, 茶=cha！(輸入法簡拼打 zznc 即可！)',
        audioText: '珍珠奶茶'
      },
    ]
  },
  {
    id: 7,
    title: '第七關：生活詞彙與拼打實戰',
    subtitle: '在地生活詞 · 交通 · 美食 · 免聲調直出',
    badge: '實戰先鋒',
    description: '在真實生活常用語境中進行拼音與注音雙向反應練習，體驗快速打字的美妙！',
    targetCategory: '詞彙實戰',
    iconName: 'ShieldCheck',
    unlockRequirementExp: 460,
    questions: [
      {
        id: 's7-q1',
        type: 'single-choice',
        prompt: '「台灣」(ㄊㄞˊ ㄨㄢ) 的完整拼音是？',
        targetZhuyin: 'ㄊㄞˊ ㄨㄢ',
        options: ['taiwan', 'daywan', 'taiwang', 'thaiwan'],
        correctAnswer: 'taiwan',
        explanation: '台 (tai) + 灣 (wan) = taiwan！在拼音輸入法只要打 tw 也能秒出！',
        audioText: '台灣'
      },
      {
        id: 's7-q2',
        type: 'single-choice',
        prompt: '「台北」(ㄊㄞˊ ㄅㄟˇ) 的完整拼音是？',
        targetZhuyin: 'ㄊㄞˊ ㄅㄟˇ',
        options: ['taibei', 'taipei', 'daibei', 'taibi'],
        correctAnswer: 'taibei',
        explanation: '台 (tai) + 北 (ㄅ=b, ㄟ=ei -> bei) = taibei！(注意：威妥瑪拼音常寫 Taipei，但標準漢語拼音北是 b 開頭的 bei)。',
        audioText: '台北'
      },
      {
        id: 's7-q3',
        type: 'single-choice',
        prompt: '「捷運」(ㄐㄧㄝˊ ㄩㄣˋ) 的完整拼音是？',
        targetZhuyin: 'ㄐㄧㄝˊ ㄩㄣˋ',
        options: ['jieyun', 'jievun', 'jieün', 'qieyun'],
        correctAnswer: 'jieyun',
        explanation: '捷 (jie) + 運 (yun) = jieyun！',
        audioText: '捷運'
      },
      {
        id: 's7-q4',
        type: 'single-choice',
        prompt: '「小籠包」(ㄒㄧㄠˇ ㄌㄨㄥˊ ㄅㄠ) 的完整拼音是？',
        targetZhuyin: 'ㄒㄧㄠˇ ㄌㄨㄥˊ ㄅㄠ',
        options: ['xiaolongbao', 'siaolongbao', 'xiaolwengbao', 'shaolongbao'],
        correctAnswer: 'xiaolongbao',
        explanation: '小 (xiao) + 籠 (long) + 包 (bao) = xiaolongbao！',
        audioText: '小籠包'
      },
      {
        id: 's7-q5',
        type: 'single-choice',
        prompt: '「悠遊卡」(ㄧㄡ ㄧㄡˊ ㄎㄚˇ) 的完整拼音是？',
        targetZhuyin: 'ㄧㄡ ㄧㄡˊ ㄎㄚˇ',
        options: ['youyouka', 'iuiuka', 'youyouga', 'yuyuoka'],
        correctAnswer: 'youyouka',
        explanation: '悠遊卡 = youyouka！簡拼打 yyk！',
        audioText: '悠遊卡'
      },
      {
        id: 's7-q6',
        type: 'single-choice',
        prompt: '「高雄」(ㄍㄠ ㄒㄩㄥˊ) 的完整拼音是？',
        targetZhuyin: 'ㄍㄠ ㄒㄩㄥˊ',
        options: ['gaoxiong', 'kaohsiung', 'gaosiong', 'kaoxiong'],
        correctAnswer: 'gaoxiong',
        explanation: '高 (gao) + 雄 (xiong) = gaoxiong！(雄的注音是 ㄒㄩㄥ，ㄒ=x, ㄩㄥ=iong -> xiong)。',
        audioText: '高雄'
      },
    ]
  },
  {
    id: 8,
    title: '第八關：拼音宗師終極挑戰',
    subtitle: '極限綜合測驗 · 聲母韻母全盤檢驗',
    badge: '拼音宗師',
    description: '恭喜來到終極考核！綜合所有聲母、韻母、縮寫與陷阱，答對所有考題奪取宗師金色獎章！',
    targetCategory: '宗師考核',
    iconName: 'Trophy',
    unlockRequirementExp: 550,
    questions: [
      {
        id: 's8-q1',
        type: 'single-choice',
        prompt: '「事半功倍」的注音是 ㄕˋ ㄅㄢˋ ㄍㄨㄥ ㄅㄟˋ，對應拼音簡拼是？',
        targetZhuyin: 'ㄕˋ ㄅㄢˋ ㄍㄨㄥ ㄅㄟˋ',
        options: ['sbgb', 'spgb', 'sbkb', 'zpzb'],
        correctAnswer: 'sbgb',
        explanation: 'ㄕ=sh(s), ㄅ=b, ㄍ=g, ㄅ=b -> 簡拼敲打 sbgb 即可在輸入法瞬間出字！',
        audioText: '事半功倍'
      },
      {
        id: 's8-q2',
        type: 'single-choice',
        prompt: '「群眾」(ㄑㄩㄣˊ ㄓㄨㄥˋ) 兩個字的完整拼音是？',
        targetZhuyin: 'ㄑㄩㄣˊ ㄓㄨㄥˋ',
        options: ['qunzhong', 'qunzweng', 'chunzhong', 'qunzong'],
        correctAnswer: 'qunzhong',
        explanation: '群=qun (ㄑ+ㄩㄣ，兩點省略), 眾=zhong (ㄓ+ㄨㄥ，接聲母變-ong) -> qunzhong！',
        audioText: '群眾'
      },
      {
        id: 's8-q3',
        type: 'single-choice',
        prompt: '想要在鍵盤上打出「旅途」(ㄌㄩˇ ㄊㄨˊ)，在輸入法中應該輸入？',
        targetZhuyin: 'ㄌㄩˇ ㄊㄨˊ',
        options: ['lvtu', 'lutu', 'lyutu', 'letu'],
        correctAnswer: 'lvtu',
        explanation: 'ㄌ接ㄩ必須用 v 代表 ü (避免與 lu「路」混淆)，所以是 lvtu！',
        audioText: '旅途'
      },
      {
        id: 's8-q4',
        type: 'single-choice',
        prompt: '「循序漸進」(ㄒㄩㄣˊ ㄒㄩˋ ㄐㄧㄢˋ ㄐㄧㄣˋ) 的簡拼代碼是？',
        targetZhuyin: 'ㄒㄩㄣˊ ㄒㄩˋ ㄐㄧㄢˋ ㄐㄧㄣˋ',
        options: ['xxjj', 'ssjj', 'xxgg', 'qqjj'],
        correctAnswer: 'xxjj',
        explanation: 'ㄒ=x, ㄒ=x, ㄐ=j, ㄐ=j，簡拼就是 xxjj！',
        audioText: '循序漸進'
      },
      {
        id: 's8-q5',
        type: 'single-choice',
        prompt: '最後一題：漢語拼音打字最爽快的三個特點是什麼？',
        targetZhuyin: '總結核心認知',
        options: [
          '免打聲調、支援簡拼縮寫、鍵盤字母全球通用',
          '必須按聲調 1234 才能出字',
          '鍵位比注音多了 20 個按鍵',
          '不能打中文字'
        ],
        correctAnswer: '免打聲調、支援簡拼縮寫、鍵盤字母全球通用',
        explanation: '沒錯！免打聲調、只敲首字母簡拼、通用 26 個英文鍵位，這就是無痛上手拼音輸入法的最高價值！',
        audioText: '太棒了'
      },
    ]
  }
];
