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
        options: ['p', 'b', 'd', 'm'],
        correctAnswer: 'b',
        explanation: '「ㄅ」在拼音中直接對應「b」，如爸爸 (baba)、包子 (baozi)。',
        audioText: 'ㄅ'
      },
      {
        id: 's1-q2',
        type: 'single-choice',
        prompt: '注音符號「ㄆ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄆ',
        options: ['b', 'p', 't', 'f'],
        correctAnswer: 'p',
        explanation: '「ㄆ」在拼音中對應「p」(送氣音)，如朋友 (pengyou)、蘋果 (pingguo)。',
        audioText: 'ㄆ'
      },
      {
        id: 's1-q3',
        type: 'single-choice',
        prompt: '注音符號「ㄉ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄉ',
        options: ['t', 'b', 'd', 'g'],
        correctAnswer: 'd',
        explanation: '「ㄉ」對應「d」，如大地 (dadi)、電話 (dianhua)。',
        audioText: 'ㄉ'
      },
      {
        id: 's1-q4',
        type: 'single-choice',
        prompt: '注音符號「ㄊ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄊ',
        options: ['d', 't', 'l', 'k'],
        correctAnswer: 't',
        explanation: '「ㄊ」對應「t」(送氣音)，如天氣 (tianqi)、太陽 (taiyang)。',
        audioText: 'ㄊ'
      },
      {
        id: 's1-q5',
        type: 'single-choice',
        prompt: '注意！注音「ㄍ」在漢語拼音中對應哪個字母？(初學者最容易手滑選錯)',
        targetZhuyin: 'ㄍ',
        options: ['k', 'g', 'h', 'j'],
        correctAnswer: 'g',
        explanation: '「ㄍ」對應「g」！例如哥哥是 gege，高鐵是 gaotie。注意「k」是注音的「ㄎ」！',
        audioText: 'ㄍ'
      },
      {
        id: 's1-q6',
        type: 'single-choice',
        prompt: '注音「ㄎ」對應的漢語拼音是什麼？',
        targetZhuyin: 'ㄎ',
        options: ['g', 'c', 'k', 'h'],
        correctAnswer: 'k',
        explanation: '「ㄎ」對應「k」，例如開心 (kaixin)、咖啡 (kafei)。',
        audioText: 'ㄎ'
      },
      {
        id: 's1-q7',
        type: 'single-choice',
        prompt: '注音「ㄈ」與「ㄏ」分別對應哪兩個拼音字母？',
        targetZhuyin: 'ㄈ ㄏ',
        options: ['h 與 f', 'f 與 h', 'f 與 k', 'v 與 h'],
        correctAnswer: 'f 與 h',
        explanation: 'ㄈ 對應 f (飛 fei)，ㄏ 對應 h (好 hao)。',
        audioText: 'ㄈ ㄏ'
      },
      {
        id: 's1-q8',
        type: 'single-choice',
        prompt: '注音「ㄋ」與「ㄌ」分別對應哪兩個拼音字母？',
        targetZhuyin: 'ㄋ ㄌ',
        options: ['l 與 n', 'm 與 r', 'n 與 l', 'n 與 r'],
        correctAnswer: 'n 與 l',
        explanation: 'ㄋ 對應 n (你 ni)，ㄌ 對應 l (來 lai)。',
        audioText: 'ㄋ ㄌ'
      },
    ]
  },
  {
    id: 2,
    title: '第二關：舌尖平舌三劍客',
    subtitle: 'ㄗ=z · ㄘ=c · ㄙ=s (攻破「ㄘ」大盲點)',
    badge: '平舌守衛',
    description: '平舌音不帶 h！特別注意台灣初學者最容易遺忘的注音「ㄘ」對應英文字母「c」！',
    targetCategory: '平舌音',
    iconName: 'Zap',
    unlockRequirementExp: 60,
    questions: [
      {
        id: 's2-q1',
        type: 'single-choice',
        prompt: '注音「ㄗ」在漢語拼音中怎麼拼寫？',
        targetZhuyin: 'ㄗ',
        options: ['zh', 'z', 'c', 's'],
        correctAnswer: 'z',
        explanation: 'ㄗ 是平舌音，不帶 h，單純寫作「z」，如早安 (zaoan)、自己 (ziji)。',
        audioText: 'ㄗ'
      },
      {
        id: 's2-q2',
        type: 'single-choice',
        prompt: '★超高頻痛點：注音「ㄘ」在漢語拼音中對應哪一個字母？',
        targetZhuyin: 'ㄘ',
        options: ['ch', 'ts', 'c', 's'],
        correctAnswer: 'c',
        explanation: '「ㄘ」在漢語拼音中對應「c」！例如：草 (cao)、菜 (cai)、詞 (ci)。切記不要打 ch 或 ts！',
        audioText: 'ㄘ'
      },
      {
        id: 's2-q3',
        type: 'single-choice',
        prompt: '注音「ㄙ」在漢語拼音中怎麼拼寫？',
        targetZhuyin: 'ㄙ',
        options: ['sh', 'x', 'c', 's'],
        correctAnswer: 's',
        explanation: '「ㄙ」對應字母「s」，例如三 (san)、司機 (siji)、四 (si)。',
        audioText: 'ㄙ'
      },
      {
        id: 's2-q4',
        type: 'single-choice',
        prompt: '想要打出「草莓」(ㄘㄠˇ ㄇㄟˊ)，第一個字「草」的聲母是什麼？',
        targetZhuyin: 'ㄘㄠˇ',
        options: ['ch', 'ts', 'c', 'k'],
        correctAnswer: 'c',
        explanation: '「草」注音是 ㄘㄠˇ，ㄘ對應 c，ㄠ對應 ao，所以拼音是 cao！',
        audioText: '草莓'
      },
      {
        id: 's2-q5',
        type: 'single-choice',
        prompt: '詞彙「彩色」(ㄘㄞˇ ㄙㄜˋ) 的兩個聲母分別是？',
        targetZhuyin: 'ㄘㄞˇ ㄙㄜˋ',
        options: ['ch 與 sh', 'c 與 s', 'ts 與 s', 'c 與 sh'],
        correctAnswer: 'c 與 s',
        explanation: '彩(ㄘ)=c，色(ㄙ)=s，所以聲母是 c 與 s！拼音為 caise。',
        audioText: '彩色'
      },
      {
        id: 's2-q6',
        type: 'single-choice',
        prompt: '「自私」(ㄗˋ ㄙ) 兩個字皆為平舌音，拼音是？',
        targetZhuyin: 'ㄗˋ ㄙ',
        options: ['zhishi', 'zisi', 'zishi', 'zhisi'],
        correctAnswer: 'zisi',
        explanation: '兩字都是平舌音，不帶 h，拼作 zisi。',
        audioText: '自私'
      },
    ]
  },
  {
    id: 3,
    title: '第三關：捲舌音四重奏',
    subtitle: 'ㄓ=zh · ㄔ=ch · ㄕ=sh · ㄖ=r',
    badge: '捲舌騎士',
    description: '掌握加「h」就是捲舌音的核心規律，建立 ㄓ、ㄔ、ㄕ、ㄖ 的肌肉反射！',
    targetCategory: '捲舌音',
    iconName: 'Flame',
    unlockRequirementExp: 130,
    questions: [
      {
        id: 's3-q1',
        type: 'single-choice',
        prompt: '注音「ㄓ」在漢語拼音中怎麼拼寫？',
        targetZhuyin: 'ㄓ',
        options: ['z', 'zh', 'ch', 'j'],
        correctAnswer: 'zh',
        explanation: 'ㄓ 是捲舌音，在 z 後面加上 h，寫作「zh」，如中國 (zhongguo)、知道 (zhidao)。',
        audioText: 'ㄓ'
      },
      {
        id: 's3-q2',
        type: 'single-choice',
        prompt: '注音「ㄔ」在漢語拼音中怎麼拼寫？',
        targetZhuyin: 'ㄔ',
        options: ['c', 'q', 'ch', 'sh'],
        correctAnswer: 'ch',
        explanation: 'ㄔ 是捲舌音，寫作「ch」，如吃飯 (chifan)、茶 (cha)。',
        audioText: 'ㄔ'
      },
      {
        id: 's3-q3',
        type: 'single-choice',
        prompt: '注音「ㄕ」在漢語拼音中怎麼拼寫？',
        targetZhuyin: 'ㄕ',
        options: ['s', 'x', 'sh', 'h'],
        correctAnswer: 'sh',
        explanation: 'ㄕ 捲舌音寫作「sh」，如水 (shui)、老師 (laoshi)。',
        audioText: 'ㄕ'
      },
      {
        id: 's3-q4',
        type: 'single-choice',
        prompt: '注音「ㄖ」在漢語拼音中對應哪一個字母？',
        targetZhuyin: 'ㄖ',
        options: ['j', 'l', 'z', 'r'],
        correctAnswer: 'r',
        explanation: 'ㄖ 在拼音中對應「r」，例如日子 (rizi)、熱情 (reqing)、日本 (riben)。',
        audioText: 'ㄖ'
      },
      {
        id: 's3-q5',
        type: 'single-choice',
        prompt: '詞彙「出差」(ㄔㄨ ㄔㄞ) 兩個字都是捲舌「ㄔ」，其拼音是？',
        targetZhuyin: 'ㄔㄨ ㄔㄞ',
        options: ['cucai', 'chuchai', 'zhuzhai', 'quqai'],
        correctAnswer: 'chuchai',
        explanation: '「出差」兩字皆為捲舌 ch，拼音為 chuchai。',
        audioText: '出差'
      },
      {
        id: 's3-q6',
        type: 'single-choice',
        prompt: '「燃燒」(ㄖㄢˊ ㄕㄠ) 的兩個聲母分別是？',
        targetZhuyin: 'ㄖㄢˊ ㄕㄠ',
        options: ['l 與 s', 'r 與 sh', 'r 與 s', 'j 與 sh'],
        correctAnswer: 'r 與 sh',
        explanation: '燃(ㄖ)=r，燒(ㄕ)=sh，所以拼音是 ranshao！',
        audioText: '燃燒'
      },
    ]
  },
  {
    id: 4,
    title: '第四關：平捲舌極限瞬發對抗',
    subtitle: 'ㄓ vs ㄗ · ㄔ vs ㄘ · ㄕ vs ㄙ 快速分辨',
    badge: '平捲辨析師',
    description: '考驗台灣學習者最常模糊的平舌與捲舌混合詞彙，精準命中每一個 h！',
    targetCategory: '平捲舌混合',
    iconName: 'Zap',
    unlockRequirementExp: 210,
    questions: [
      {
        id: 's4-q1',
        type: 'single-choice',
        prompt: '詞彙「自主」(ㄗˋ ㄓㄨˇ) 的平捲舌順序在拼音中是？',
        targetZhuyin: 'ㄗˋ ㄓㄨˇ',
        options: ['zhizhu (全捲)', 'zizhu (先平後捲)', 'zizu (全平)', 'zhizu (先捲後平)'],
        correctAnswer: 'zizhu (先平後捲)',
        explanation: '自(ㄗˋ)=zi (平舌)，主(ㄓㄨˇ)=zhu (捲舌)，因此拼音是 zizhu！',
        audioText: '自主'
      },
      {
        id: 's4-q2',
        type: 'single-choice',
        prompt: '詞彙「沉思」(ㄔㄣˊ ㄙ) 的平捲舌順序在拼音中是？',
        targetZhuyin: 'ㄔㄣˊ ㄙ',
        options: ['chenshi', 'censi', 'chensi', 'cenci'],
        correctAnswer: 'chensi',
        explanation: '沉(ㄔ)=ch (捲舌)，思(ㄙ)=s (平舌)，所以是 chensi。',
        audioText: '沉思'
      },
      {
        id: 's4-q3',
        type: 'single-choice',
        prompt: '「知己」(ㄓ) 與「自己」(ㄗ) 的聲母差別是？',
        targetZhuyin: 'ㄓ vs ㄗ',
        options: ['zhi vs zi', 'zi vs zhi', 'ji vs zi', 'chi vs ci'],
        correctAnswer: 'zhi vs zi',
        explanation: '知(ㄓ)是捲舌 zh；自(ㄗ)是平舌 z。',
        audioText: '知己 自己'
      },
      {
        id: 's4-q4',
        type: 'single-choice',
        prompt: '「詩詞」(ㄕ ㄘˊ) 的正確拼音是？(注意平捲舌與ㄘ的字母)',
        targetZhuyin: 'ㄕ ㄘˊ',
        options: ['shichi', 'shici', 'sici', 'shisi'],
        correctAnswer: 'shici',
        explanation: '詩(ㄕ)=shi (捲舌)，詞(ㄘ)=ci (平舌且是 c)，因此是 shici！',
        audioText: '詩詞'
      },
      {
        id: 's4-q5',
        type: 'single-choice',
        prompt: '「政治」(ㄓㄥˋ ㄓˋ) 兩個字都是捲舌「ㄓ」，拼音是？',
        targetZhuyin: 'ㄓㄥˋ ㄓˋ',
        options: ['zhengzhi', 'zengzi', 'zhengzi', 'zengzhi'],
        correctAnswer: 'zhengzhi',
        explanation: '兩字皆為捲舌 ㄓ，拼音為 zhengzhi！',
        audioText: '政治'
      },
      {
        id: 's4-q6',
        type: 'single-choice',
        prompt: '「造就」(ㄗㄠˋ) 與「照亮」(ㄓㄠˋ) 的聲母分別是？',
        targetZhuyin: 'ㄗㄠˋ vs ㄓㄠˋ',
        options: ['zao 與 zhao', 'zhao 與 zao', 'cao 與 zhao', 'zao 與 chao'],
        correctAnswer: 'zao 與 zhao',
        explanation: '造(ㄗ)=z，照(ㄓ)=zh。',
        audioText: '造就 照亮'
      },
    ]
  },
  {
    id: 5,
    title: '第五關：舌面新字母大解密',
    subtitle: 'ㄐ=j · ㄑ=q · ㄒ=x (台灣人最陌生的鍵)',
    badge: '破壁探索者',
    description: '注音使用者切換拼音時最容易卡住的三大字母：ㄑ在 q、ㄒ在 x！徹底建立按鍵條件反射！',
    targetCategory: '舌面音',
    iconName: 'Compass',
    unlockRequirementExp: 300,
    questions: [
      {
        id: 's5-q1',
        type: 'single-choice',
        prompt: '注音「ㄐ」在漢語拼音中對應哪個字母？',
        targetZhuyin: 'ㄐ',
        options: ['g', 'j', 'z', 'q'],
        correctAnswer: 'j',
        explanation: 'ㄐ 對應字母「j」，例如家 (jia)、今天 (jintian)。',
        audioText: 'ㄐ'
      },
      {
        id: 's5-q2',
        type: 'single-choice',
        prompt: '★魔王核心：注音「ㄑ」在漢語拼音中對應哪個字母？',
        targetZhuyin: 'ㄑ',
        options: ['ch', 'c', 'q', 'k'],
        correctAnswer: 'q',
        explanation: '「ㄑ」對應「q」！注音族切換最大痛點：例如去 (qu)、七 (qi)、請 (qing)、錢 (qian)。',
        audioText: 'ㄑ'
      },
      {
        id: 's5-q3',
        type: 'single-choice',
        prompt: '★魔王核心：注音「ㄒ」在漢語拼音中對應哪個字母？',
        targetZhuyin: 'ㄒ',
        options: ['sh', 'x', 's', 'h'],
        correctAnswer: 'x',
        explanation: '「ㄒ」對應「x」！例如謝謝 (xiexie)、西瓜 (xigua)、學校 (xuexiao)。',
        audioText: 'ㄒ'
      },
      {
        id: 's5-q4',
        type: 'single-choice',
        prompt: '日常高頻詞「謝謝」(ㄒㄧㄝˋ ㄒㄧㄝ˙) 漢語拼音怎麼打？',
        targetZhuyin: 'ㄒㄧㄝˋ ㄒㄧㄝ˙',
        options: ['sheshie', 'siesie', 'xiexie', 'hiehie'],
        correctAnswer: 'xiexie',
        explanation: 'ㄒ 對應 x，ㄧㄝ 對應 ie，所以「謝謝」打 xiexie！',
        audioText: '謝謝'
      },
      {
        id: 's5-q5',
        type: 'single-choice',
        prompt: '想要打出「機器」(ㄐㄧ ㄑㄧˋ)，拼音應該輸入？',
        targetZhuyin: 'ㄐㄧ ㄑㄧˋ',
        options: ['jiqi', 'chichi', 'qiji', 'jiji'],
        correctAnswer: 'jiqi',
        explanation: '機(ㄐㄧ)=ji，器(ㄑㄧˋ)=qi，合起來是 jiqi！',
        audioText: '機器'
      },
      {
        id: 's5-q6',
        type: 'single-choice',
        prompt: '「七星潭」的「七星」(ㄑㄧ ㄒㄧㄥ)，拼音是？',
        targetZhuyin: 'ㄑㄧ ㄒㄧㄥ',
        options: ['chising', 'cixing', 'qisin', 'qixing'],
        correctAnswer: 'qixing',
        explanation: '七=qi，星=xing，所以是 qixing！牢記 ㄑ=q, ㄒ=x。',
        audioText: '七星'
      },
    ]
  },
  {
    id: 6,
    title: '第六關：基礎單韻母與介母',
    subtitle: 'ㄚㄛㄜㄝ · ㄧㄨㄩ (含鍵盤 v 鍵密技)',
    badge: '清音行者',
    description: '掌握單韻母轉換，了解「ㄧ、ㄨ、ㄩ」獨立時與接聲母時的變化，以及「v 代打 ü」的鍵盤秘技！',
    targetCategory: '單韻母與介母',
    iconName: 'BookOpen',
    unlockRequirementExp: 400,
    questions: [
      {
        id: 's6-q1',
        type: 'single-choice',
        prompt: '注音「ㄜ」在漢語拼音中對應哪一個字母？',
        targetZhuyin: 'ㄜ',
        options: ['o', 'e', 'a', 'er'],
        correctAnswer: 'e',
        explanation: '「ㄜ」在拼音中寫作「e」，例如鵝 (e)、德 (de)、特 (te)。',
        audioText: 'ㄜ'
      },
      {
        id: 's6-q2',
        type: 'single-choice',
        prompt: '注音「ㄧ」在獨立成字（無聲母）時，拼音如何寫？例如「衣服」的「衣」。',
        targetZhuyin: 'ㄧ',
        options: ['i', 'yi', 'y', 'ee'],
        correctAnswer: 'yi',
        explanation: '「ㄧ」單獨成字無聲母時，開頭要補 y，寫作「yi」(如 一、衣、移)；在聲母後才單純寫 i (如 你 ni)。',
        audioText: '衣'
      },
      {
        id: 's6-q3',
        type: 'single-choice',
        prompt: '注音「ㄨ」在獨立成字（無聲母）時，拼音如何寫？例如「我們」的「我」(ㄨㄛˇ)。',
        targetZhuyin: 'ㄨㄛˇ',
        options: ['uo', 'wo', 'wu', 'oo'],
        correctAnswer: 'wo',
        explanation: '「ㄨ」獨立成字時，後面有韻母則將 u 換成 w (如 我 wo，外 wai)；只有單獨一個 ㄨ 則寫作 wu (如 五 wu)。',
        audioText: '我'
      },
      {
        id: 's6-q4',
        type: 'single-choice',
        prompt: '★打字神器：在 QWERTY 英文鍵盤上打「綠(ㄌㄩˋ)」或「女(ㄋㄩˇ)」，要按哪一個鍵來代表「ü」？',
        targetZhuyin: 'ㄩ (ü)',
        options: ['u 鍵', 'v 鍵', 'y 鍵', 'w 鍵'],
        correctAnswer: 'v 鍵',
        explanation: '因為英文字母中沒有 ü，所有拼音輸入法統一用鍵盤底部的「v」鍵代替 ü！所以打「綠」輸入 lv，「女」輸入 nv！',
        audioText: '綠'
      },
      {
        id: 's6-q5',
        type: 'single-choice',
        prompt: '注音「ㄩ」獨立成字時怎麼寫？例如「月亮」的「月」(ㄩㄝˋ)。',
        targetZhuyin: 'ㄩㄝˋ',
        options: ['üe', 'ue', 'yue', 've'],
        correctAnswer: 'yue',
        explanation: '「ㄩ」無聲母獨立成字時寫作「yu」，所以 ㄩㄝ 寫作 yue，ㄩㄢ 寫作 yuan！',
        audioText: '月'
      },
      {
        id: 's6-q6',
        type: 'single-choice',
        prompt: '「阿里山」的「阿」(ㄚ) 拼音是？',
        targetZhuyin: 'ㄚ',
        options: ['ah', 'a', 'o', 'e'],
        correctAnswer: 'a',
        explanation: 'ㄚ 直接對應 a！',
        audioText: '阿'
      },
    ]
  },
  {
    id: 7,
    title: '第七關：複合韻母快速反應',
    subtitle: 'ㄞ=ai · ㄟ=ei · ㄠ=ao · ㄡ=ou',
    badge: '雙韻快手',
    description: '熟悉雙元音的組合規律，快速辨析 ai 與 ei、ao 與 ou！',
    targetCategory: '複合韻母',
    iconName: 'Layers',
    unlockRequirementExp: 510,
    questions: [
      {
        id: 's7-q1',
        type: 'single-choice',
        prompt: '注音「ㄞ」與「ㄟ」的拼音分別是？',
        targetZhuyin: 'ㄞ ㄟ',
        options: ['ay 與 ey', 'ai 與 ei', 'ei 與 ai', 'ae 與 ee'],
        correctAnswer: 'ai 與 ei',
        explanation: 'ㄞ 是 ai (愛 ai, 開 kai)；ㄟ 是 ei (黑 hei, 美 mei)。',
        audioText: 'ㄞ ㄟ'
      },
      {
        id: 's7-q2',
        type: 'single-choice',
        prompt: '注音「ㄠ」與「ㄡ」的拼音分別是？',
        targetZhuyin: 'ㄠ ㄡ',
        options: ['ao 與 ou', 'ou 與 ao', 'au 與 eu', 'aw 與 ow'],
        correctAnswer: 'ao 與 ou',
        explanation: 'ㄠ 是 ao (高 gao, 貓 mao)；ㄡ 是 ou (狗 gou, 頭 tou)。',
        audioText: 'ㄠ ㄡ'
      },
      {
        id: 's7-q3',
        type: 'single-choice',
        prompt: '「可愛」(ㄎㄜˇ ㄞˋ) 的拼音是？',
        targetZhuyin: 'ㄎㄜˇ ㄞˋ',
        options: ['keai', 'geai', 'keei', 'geei'],
        correctAnswer: 'keai',
        explanation: '可(ㄎㄜ)=ke，愛(ㄞˋ)=ai，合起來是 keai。',
        audioText: '可愛'
      },
      {
        id: 's7-q4',
        type: 'single-choice',
        prompt: '「美麗」(ㄇㄟˇ ㄌㄧˋ) 的拼音是？',
        targetZhuyin: 'ㄇㄟˇ ㄌㄧˋ',
        options: ['maili', 'meili', 'mili', 'mayli'],
        correctAnswer: 'meili',
        explanation: '美(ㄇㄟˇ)=mei，麗(ㄌㄧˋ)=li，拼音是 meili。',
        audioText: '美麗'
      },
      {
        id: 's7-q5',
        type: 'single-choice',
        prompt: '「高頭大馬」中的「高」(ㄍㄠ) 與「頭」(ㄊㄡˊ) 韻母分別是？',
        targetZhuyin: 'ㄍㄠ ㄊㄡˊ',
        options: ['ou 與 ao', 'ao 與 ou', 'ao 與 uo', 'au 與 ou'],
        correctAnswer: 'ao 與 ou',
        explanation: '高(ㄍㄠ)=gao，頭(ㄊㄡˊ)=tou，韻母為 ao 與 ou。',
        audioText: '高 頭'
      },
      {
        id: 's7-q6',
        type: 'single-choice',
        prompt: '「兒歌」中的「兒」(ㄦˊ) 拼音寫作？',
        targetZhuyin: 'ㄦˊ',
        options: ['r', 'er', 'el', 'ur'],
        correctAnswer: 'er',
        explanation: 'ㄦ 對應「er」，如二 (er)、兒子 (erzi)。',
        audioText: '兒'
      },
    ]
  },
  {
    id: 8,
    title: '第八關：前後鼻音分水嶺',
    subtitle: 'ㄢㄣ前鼻 (-n) vs ㄤㄥ後鼻 (-ng)',
    badge: '鼻音天秤',
    description: '解決台灣人容易混淆的「ㄣ (en)」與「ㄥ (eng)」、「ㄧㄣ (in)」與「ㄧㄥ (ing)」！',
    targetCategory: '前後鼻音',
    iconName: 'Zap',
    unlockRequirementExp: 630,
    questions: [
      {
        id: 's8-q1',
        type: 'single-choice',
        prompt: '注音「ㄣ」是前鼻音，它的拼音結尾字母是什麼？例如：門 (ㄇㄣˊ)。',
        targetZhuyin: 'ㄣ',
        options: ['eng (以 ng 結尾)', 'en (以 n 結尾)', 'in', 'em'],
        correctAnswer: 'en (以 n 結尾)',
        explanation: '「ㄣ」是前鼻音，拼寫收在單個「n」(如 門 men, 本 ben, 真 zhen)。',
        audioText: '門'
      },
      {
        id: 's8-q2',
        type: 'single-choice',
        prompt: '注音「ㄥ」是後鼻音，它的拼音結尾字母是什麼？例如：風 (ㄈㄥ)。',
        targetZhuyin: 'ㄥ',
        options: ['en (以 n 結尾)', 'on', 'eng (以 ng 結尾)', 'ong'],
        correctAnswer: 'eng (以 ng 結尾)',
        explanation: '「ㄥ」是後鼻音，在拼音中帶有「g」，寫作「eng」(如 風 feng, 能 neng, 朋 peng)。',
        audioText: '風'
      },
      {
        id: 's8-q3',
        type: 'single-choice',
        prompt: '「心(ㄒㄧㄣ)」與「星(ㄒㄧㄥ)」在拼音上的區別是？',
        targetZhuyin: 'ㄒㄧㄣ vs ㄒㄧㄥ',
        options: ['xing vs xin', 'xin vs xing', 'sin vs sing', 'xien vs xieng'],
        correctAnswer: 'xin vs xing',
        explanation: '心(ㄒㄧㄣ)=xin (前鼻音收n)；星(ㄒㄧㄥ)=xing (後鼻音收ng)。',
        audioText: '心 星'
      },
      {
        id: 's8-q4',
        type: 'single-choice',
        prompt: '「真(ㄓㄣ)」與「爭(ㄓㄥ)」在拼音上的差別是？',
        targetZhuyin: 'ㄓㄣ vs ㄓㄥ',
        options: ['zen vs zeng', 'zhen vs zheng', 'zheng vs zhen', 'jin vs jing'],
        correctAnswer: 'zhen vs zheng',
        explanation: 'ㄓㄣ(前鼻音)=zhen；ㄓㄥ(後鼻音帶g)=zheng！',
        audioText: '真 爭'
      },
      {
        id: 's8-q5',
        type: 'single-choice',
        prompt: '「陳(ㄔㄣˊ)」與「程(ㄔㄥˊ)」姓氏拼音分別是？',
        targetZhuyin: 'ㄔㄣˊ vs ㄔㄥˊ',
        options: ['cheng 與 chen', 'chen 與 cheng', 'cen 與 ceng', 'chan 與 chang'],
        correctAnswer: 'chen 與 cheng',
        explanation: '陳(ㄔㄣˊ)=chen (前鼻)；程(ㄔㄥˊ)=cheng (後鼻)。',
        audioText: '陳 程'
      },
      {
        id: 's8-q6',
        type: 'single-choice',
        prompt: '「太陽(ㄧㄤˊ)」的「陽」是後鼻音，拼音是？',
        targetZhuyin: 'ㄧㄤˊ',
        options: ['yan', 'iang', 'yang', 'yeng'],
        correctAnswer: 'yang',
        explanation: 'ㄧㄤ 獨立無聲母時寫作 yang！接聲母時寫 -iang (如 想 xiang)。',
        audioText: '太陽'
      },
    ]
  },
  {
    id: 9,
    title: '第九關：結合韻母ㄧ系與縮寫陷阱',
    subtitle: 'ㄧㄚ · ㄧㄝ · ㄧㄠ · ㄧㄡ=iu · ㄧㄢ=ian',
    badge: 'ㄧ系獵手',
    description: '攻克「ㄧㄢ」唸 yen 卻拼 ian，以及「ㄧㄡ」接聲母縮寫成 iu 的重要規則！',
    targetCategory: 'ㄧ系結合韻',
    iconName: 'Compass',
    unlockRequirementExp: 760,
    questions: [
      {
        id: 's9-q1',
        type: 'single-choice',
        prompt: '【陷阱】「天空」的「天」(ㄊㄧㄢ)，拼音是？(聽起來像 yen 但寫法是？)',
        targetZhuyin: 'ㄊㄧㄢ',
        options: ['tyen', 'tian', 'ten', 'tain'],
        correctAnswer: 'tian',
        explanation: '雖然「ㄧㄢ」聽起來口形接近 yen，但拼音一律固定寫為「-ian」！所以「天」打 tian。',
        audioText: '天'
      },
      {
        id: 's9-q2',
        type: 'single-choice',
        prompt: '「牛」(ㄋㄧㄡˊ) 在接聲母縮寫規則下要打什麼？',
        targetZhuyin: 'ㄋㄧㄡˊ',
        options: ['niou', 'nyou', 'niu', 'neo'],
        correctAnswer: 'niu',
        explanation: '「ㄧㄡ」接在聲母後面時，中間的 o 被省寫，直接拼作「iu」！所以牛=niu, 六=liu。',
        audioText: '牛'
      },
      {
        id: 's9-q3',
        type: 'single-choice',
        prompt: '單獨「朋友」的「友」(ㄧㄡˇ) 沒有聲母，拼音是？',
        targetZhuyin: 'ㄧㄡˇ',
        options: ['iu', 'you', 'yiu', 'io'],
        correctAnswer: 'you',
        explanation: '「ㄧㄡ」無聲母獨立時寫作「you」！只有接聲母時才縮寫為「iu」(如 六 liu, 留 liu)。',
        audioText: '友'
      },
      {
        id: 's9-q4',
        type: 'single-choice',
        prompt: '「電話」(ㄉㄧㄢˋ ㄏㄨㄚˋ) 中的「電」拼音是？',
        targetZhuyin: 'ㄉㄧㄢˋ',
        options: ['dyen', 'den', 'dian', 'dan'],
        correctAnswer: 'dian',
        explanation: 'ㄉ+ㄧㄢ = dian！牢記 ㄧㄢ 拼 ian。',
        audioText: '電'
      },
      {
        id: 's9-q5',
        type: 'single-choice',
        prompt: '「謝謝」(ㄒㄧㄝˋ ㄒㄧㄝ˙) 中使用的結合韻母是？',
        targetZhuyin: 'ㄒㄧㄝˋ',
        options: ['ie', 'ye', 'e', 'ee'],
        correctAnswer: 'ie',
        explanation: 'ㄒ+ㄧㄝ = xie，結合韻母是 ie。',
        audioText: '謝謝'
      },
      {
        id: 's9-q6',
        type: 'single-choice',
        prompt: '「需要」(ㄒㄩ ㄧㄠˋ) 中的「要」拼音是？',
        targetZhuyin: 'ㄧㄠˋ',
        options: ['iao', 'yao', 'yo', 'iau'],
        correctAnswer: 'yao',
        explanation: 'ㄧㄠ 無聲母時寫作 yao (接聲母如 條 tiao, 叫 jiao)。',
        audioText: '要'
      },
    ]
  },
  {
    id: 10,
    title: '第十關：結合韻母ㄨ系與縮寫魔王',
    subtitle: 'ㄨㄥ=ong · ㄨㄟ=ui · ㄨㄣ=un · ㄨㄚ · ㄨㄛ',
    badge: 'ㄨ系封印者',
    description: '解決「ㄓㄨㄥ」為何是 zhong 而不是 zhweng，以及 ui、un 的縮寫規則！',
    targetCategory: 'ㄨ系結合韻',
    iconName: 'Flame',
    unlockRequirementExp: 900,
    questions: [
      {
        id: 's10-q1',
        type: 'single-choice',
        prompt: '「中」的注音是 ㄓㄨㄥ，它的拼音不是 zhweng，而是什麼？',
        targetZhuyin: 'ㄓㄨㄥ',
        options: ['zhweng', 'zhong', 'zong', 'jung'],
        correctAnswer: 'zhong',
        explanation: '「ㄨㄥ」在前面有聲母時，一律變裝為「-ong」！所以 ㄓ+ㄨㄥ = zhong，ㄉ+ㄨㄥ = dong！',
        audioText: '中'
      },
      {
        id: 's10-q2',
        type: 'single-choice',
        prompt: '「老翁」的「翁」(ㄨㄥ) 沒有聲母，它的拼音是？',
        targetZhuyin: 'ㄨㄥ',
        options: ['ong', 'wong', 'weng', 'ung'],
        correctAnswer: 'weng',
        explanation: '「ㄨㄥ」獨立成字沒有聲母時拼作「weng」(如 翁、嗡、甕)；接聲母才變 -ong。',
        audioText: '翁'
      },
      {
        id: 's10-q3',
        type: 'single-choice',
        prompt: '「對不起」的「對」(ㄉㄨㄟˋ)，在拼音縮寫規則下要打什麼？',
        targetZhuyin: 'ㄉㄨㄟˋ',
        options: ['duei', 'dui', 'dway', 'dve'],
        correctAnswer: 'dui',
        explanation: '「ㄨㄟ」接在聲母後面時，中間的 e 被省寫，直接拼作「ui」！所以對=dui, 會=hui。',
        audioText: '對'
      },
      {
        id: 's10-q4',
        type: 'single-choice',
        prompt: '「春天」的「春」(ㄔㄨㄣ)，在拼音縮寫規則下要打什麼？',
        targetZhuyin: 'ㄔㄨㄣ',
        options: ['chuen', 'chun', 'chwen', 'cun'],
        correctAnswer: 'chun',
        explanation: '「ㄨㄣ」接在聲母後面時省寫為「un」！所以春=chun, 輪=lun, 準=zhun。',
        audioText: '春'
      },
      {
        id: 's10-q5',
        type: 'single-choice',
        prompt: '「台灣」的「灣」(ㄨㄢ) 沒有聲母，拼音寫作？',
        targetZhuyin: 'ㄨㄢ',
        options: ['uan', 'wan', 'wang', 'van'],
        correctAnswer: 'wan',
        explanation: 'ㄨ開頭無聲母時，換成 w，寫作 wan (如 灣 wan, 萬 wan)。',
        audioText: '灣'
      },
      {
        id: 's10-q6',
        type: 'single-choice',
        prompt: '「回歸」(ㄏㄨㄟˊ ㄍㄨㄟ) 的兩個字拼音是？',
        targetZhuyin: 'ㄏㄨㄟˊ ㄍㄨㄟ',
        options: ['hueiguei', 'huigui', 'heigei', 'hugui'],
        correctAnswer: 'huigui',
        explanation: 'ㄏ+ㄨㄟ=hui，ㄍ+ㄨㄟ=gui，合起來是 huigui。',
        audioText: '回歸'
      },
    ]
  },
  {
    id: 11,
    title: '第十一關：結合韻母ㄩ系與 ü 兩點消失術',
    subtitle: 'ju · qu · xu (脫帽) vs lv · nv (鍵盤打 v)',
    badge: '除點幻術師',
    description: '小 ü 見到 j q x，脫帽敬禮把點去；ㄋ ㄌ 面前兩點留，輸入法上打 v 就搞定！',
    targetCategory: 'ㄩ系特殊規則',
    iconName: 'ShieldCheck',
    unlockRequirementExp: 1050,
    questions: [
      {
        id: 's11-q1',
        type: 'single-choice',
        prompt: '【經典陷阱】「去」的注音是 ㄑㄩˋ，在拼音輸入法裡要打什麼？',
        targetZhuyin: 'ㄑㄩˋ',
        options: ['qv', 'qü', 'qu', 'chu'],
        correctAnswer: 'qu',
        explanation: 'j, q, x 與 ü 結合時兩點省略，打字時直接按字母 u！所以「去」打 qu！',
        audioText: '去'
      },
      {
        id: 's11-q2',
        type: 'single-choice',
        prompt: '「學校」的「學」(ㄒㄩㄝˊ)，在拼音輸入法裡要打什麼？',
        targetZhuyin: 'ㄒㄩㄝˊ',
        options: ['xve', 'xue', 'xüe', 'shue'],
        correctAnswer: 'xue',
        explanation: 'ㄒ(x) 遇到 ㄩㄝ(üe)，兩點省寫，打 xue！',
        audioText: '學'
      },
      {
        id: 's11-q3',
        type: 'single-choice',
        prompt: '「綠色」的「綠」(ㄌㄩˋ)，在鍵盤輸入法上應該輸入？',
        targetZhuyin: 'ㄌㄩˋ',
        options: ['lu', 'lv', 'lyu', 'leu'],
        correctAnswer: 'lv',
        explanation: '因為有「路 (lu)」，所以「綠 (lǜ)」必須保留兩點區分，打字鍵盤上一律按「lv」！',
        audioText: '綠'
      },
      {
        id: 's11-q4',
        type: 'single-choice',
        prompt: '「女生」的「女」(ㄋㄩˇ)，在鍵盤輸入法上應該輸入？',
        targetZhuyin: 'ㄋㄩˇ',
        options: ['nu', 'nyu', 'nv', 'niu'],
        correctAnswer: 'nv',
        explanation: '因為有「怒 (nu)」，所以「女 (nǚ)」必須按「nv」！',
        audioText: '女'
      },
      {
        id: 's11-q5',
        type: 'single-choice',
        prompt: '「公園」的「園」(ㄩㄢˊ) 獨立無聲母，拼音寫作？',
        targetZhuyin: 'ㄩㄢˊ',
        options: ['yuan', 'üan', 'van', 'yüan'],
        correctAnswer: 'yuan',
        explanation: 'ㄩ開頭無聲母時寫作 yu，所以 ㄩㄢ 寫作 yuan！',
        audioText: '園'
      },
      {
        id: 's11-q6',
        type: 'single-choice',
        prompt: '「安全」的「全」(ㄑㄩㄢˊ)，拼音寫作？',
        targetZhuyin: 'ㄑㄩㄢˊ',
        options: ['quan', 'qvan', 'chuan', 'qüan'],
        correctAnswer: 'quan',
        explanation: 'ㄑ+ㄩㄢ 拼作 quan (兩點省略)！',
        audioText: '全'
      },
    ]
  },
  {
    id: 12,
    title: '第十二關：台灣人高頻易錯盲區大合集',
    subtitle: 'ju/qu/xu · -ian · -ong · iu · ui · un 混搭炸彈',
    badge: '除陷大師',
    description: '綜合所有台灣人切換拼音時 90% 人都會踩到的 6 大規則陷阱，考驗真正的功力！',
    targetCategory: '綜合陷阱題',
    iconName: 'Flame',
    unlockRequirementExp: 1210,
    questions: [
      {
        id: 's12-q1',
        type: 'single-choice',
        prompt: '「群眾」(ㄑㄩㄣˊ ㄓㄨㄥˋ) 兩個字的完整拼音是？',
        targetZhuyin: 'ㄑㄩㄣˊ ㄓㄨㄥˋ',
        options: ['qunzweng', 'chunzhong', 'qunzhong', 'qunzong'],
        correctAnswer: 'qunzhong',
        explanation: '群=qun (ㄑ+ㄩㄣ，兩點省略), 眾=zhong (ㄓ+ㄨㄥ，接聲母變-ong) -> qunzhong！',
        audioText: '群眾'
      },
      {
        id: 's12-q2',
        type: 'single-choice',
        prompt: '「秋天」(ㄑㄧㄡ ㄊㄧㄢ) 包含兩大陷阱(縮寫iu與-ian)，拼音是？',
        targetZhuyin: 'ㄑㄧㄡ ㄊㄧㄢ',
        options: ['qiou tian', 'qiu tyen', 'qiu tian', 'chiu tian'],
        correctAnswer: 'qiu tian',
        explanation: '秋=qiu (ㄧㄡ縮寫為iu), 天=tian (ㄧㄢ拼寫為ian) -> qiu tian！',
        audioText: '秋天'
      },
      {
        id: 's12-q3',
        type: 'single-choice',
        prompt: '「軍隊」(ㄐㄩㄣ ㄉㄨㄟˋ) 包含 ü省略與 ui 縮寫，拼音是？',
        targetZhuyin: 'ㄐㄩㄣ ㄉㄨㄟˋ',
        options: ['jundui', 'junduei', 'jvndui', 'jundway'],
        correctAnswer: 'jundui',
        explanation: '軍=jun (ㄐ+ㄩㄣ兩點省寫), 隊=dui (ㄉ+ㄨㄟ縮寫為ui) -> jundui！',
        audioText: '軍隊'
      },
      {
        id: 's12-q4',
        type: 'single-choice',
        prompt: '「輪船」(ㄌㄨㄣˊ ㄔㄨㄢˊ) 中「輪」與「船」的拼音是？',
        targetZhuyin: 'ㄌㄨㄣˊ ㄔㄨㄢˊ',
        options: ['luenchuan', 'lunchuan', 'luanchan', 'lunquan'],
        correctAnswer: 'lunchuan',
        explanation: '輪=lun (ㄨㄣ縮寫為un)，船=chuan (捲舌ch+uan) -> lunchuan。',
        audioText: '輪船'
      },
      {
        id: 's12-q5',
        type: 'single-choice',
        prompt: '「選秀」(ㄒㄩㄢˇ ㄒㄧㄡˋ) 兩個字的拼音是？',
        targetZhuyin: 'ㄒㄩㄢˇ ㄒㄧㄡˋ',
        options: ['xuanxiou', 'xuanxiu', 'shuanxiu', 'xvanxiu'],
        correctAnswer: 'xuanxiu',
        explanation: '選=xuan (ㄒ+ㄩㄢ兩點省寫), 秀=xiu (ㄒ+ㄧㄡ縮寫為iu) -> xuanxiu！',
        audioText: '選秀'
      },
      {
        id: 's12-q6',
        type: 'single-choice',
        prompt: '「紅豆」(ㄏㄨㄥˊ ㄉㄡˋ) 中「紅」的韻母是？',
        targetZhuyin: 'ㄏㄨㄥˊ',
        options: ['weng', 'ong', 'eng', 'on'],
        correctAnswer: 'ong',
        explanation: 'ㄏ+ㄨㄥ 接聲母變 ong -> hong！',
        audioText: '紅'
      },
    ]
  },
  {
    id: 13,
    title: '第十三關：台灣生活美食與地名極速拼寫',
    subtitle: '在地日常詞 · 交通 · 美食實戰',
    badge: '在地拼字達人',
    description: '在真實生活常用語境中進行拼音與注音雙向反應練習，體驗快速打字的美妙！',
    targetCategory: '在地生活實戰',
    iconName: 'ShieldCheck',
    unlockRequirementExp: 1380,
    questions: [
      {
        id: 's13-q1',
        type: 'single-choice',
        prompt: '「台灣」(ㄊㄞˊ ㄨㄢ) 的完整拼音是？',
        targetZhuyin: 'ㄊㄞˊ ㄨㄢ',
        options: ['daywan', 'taiwang', 'thaiwan', 'taiwan'],
        correctAnswer: 'taiwan',
        explanation: '台 (tai) + 灣 (wan) = taiwan！在拼音輸入法只要打 tw 也能秒出！',
        audioText: '台灣'
      },
      {
        id: 's13-q2',
        type: 'single-choice',
        prompt: '「台北」(ㄊㄞˊ ㄅㄟˇ) 的完整拼音是？',
        targetZhuyin: 'ㄊㄞˊ ㄅㄟˇ',
        options: ['taipei', 'daibei', 'taibei', 'taibi'],
        correctAnswer: 'taibei',
        explanation: '台 (tai) + 北 (ㄅ=b, ㄟ=ei -> bei) = taibei！(注意：威妥瑪拼音常寫 Taipei，但標準漢語拼音北是 b 開頭的 bei)。',
        audioText: '台北'
      },
      {
        id: 's13-q3',
        type: 'single-choice',
        prompt: '「捷運」(ㄐㄧㄝˊ ㄩㄣˋ) 的完整拼音是？',
        targetZhuyin: 'ㄐㄧㄝˊ ㄩㄣˋ',
        options: ['jievun', 'jieyun', 'jieün', 'qieyun'],
        correctAnswer: 'jieyun',
        explanation: '捷 (jie) + 運 (yun) = jieyun！',
        audioText: '捷運'
      },
      {
        id: 's13-q4',
        type: 'single-choice',
        prompt: '「小籠包」(ㄒㄧㄠˇ ㄌㄨㄥˊ ㄅㄠ) 的完整拼音是？',
        targetZhuyin: 'ㄒㄧㄠˇ ㄌㄨㄥˊ ㄅㄠ',
        options: ['xiaolongbao', 'siaolongbao', 'xiaolwengbao', 'shaolongbao'],
        correctAnswer: 'xiaolongbao',
        explanation: '小 (xiao) + 籠 (long) + 包 (bao) = xiaolongbao！',
        audioText: '小籠包'
      },
      {
        id: 's13-q5',
        type: 'single-choice',
        prompt: '「悠遊卡」(ㄧㄡ ㄧㄡˊ ㄎㄚˇ) 的完整拼音是？',
        targetZhuyin: 'ㄧㄡ ㄧㄡˊ ㄎㄚˇ',
        options: ['iuiuka', 'youyouka', 'youyouga', 'yuyuoka'],
        correctAnswer: 'youyouka',
        explanation: '悠遊卡 = youyouka！簡拼打 yyk！',
        audioText: '悠遊卡'
      },
      {
        id: 's13-q6',
        type: 'single-choice',
        prompt: '「高雄」(ㄍㄠ ㄒㄩㄥˊ) 的完整拼音是？',
        targetZhuyin: 'ㄍㄠ ㄒㄩㄥˊ',
        options: ['kaohsiung', 'gaoxiong', 'gaosiong', 'kaoxiong'],
        correctAnswer: 'gaoxiong',
        explanation: '高 (gao) + 雄 (xiong) = gaoxiong！(雄的注音是 ㄒㄩㄥ，ㄒ=x, ㄩㄥ=iong -> xiong)。',
        audioText: '高雄'
      },
    ]
  },
  {
    id: 14,
    title: '第十四關：成語簡拼與長句極限拼寫',
    subtitle: '簡拼思維 · 四字成語秒出',
    badge: '簡拼宗師',
    description: '深入體會拼音輸入法最核心的優勢：敲擊聲母縮寫（簡拼）即可連續打出四字成語與長詞！',
    targetCategory: '簡拼成語',
    iconName: 'Trophy',
    unlockRequirementExp: 1560,
    questions: [
      {
        id: 's14-q1',
        type: 'single-choice',
        prompt: '「事半功倍」(ㄕˋ ㄅㄢˋ ㄍㄨㄥ ㄅㄟˋ) 在輸入法中最快打法的四字母簡拼是？',
        targetZhuyin: 'ㄕˋ ㄅㄢˋ ㄍㄨㄥ ㄅㄟˋ',
        options: ['spgb', 'sbgb', 'sbkb', 'zpzb'],
        correctAnswer: 'sbgb',
        explanation: 'ㄕ=sh(s), ㄅ=b, ㄍ=g, ㄅ=b -> 簡拼敲打 sbgb 即可在輸入法瞬間出字！',
        audioText: '事半功倍'
      },
      {
        id: 's14-q2',
        type: 'single-choice',
        prompt: '「循序漸進」(ㄒㄩㄣˊ ㄒㄩˋ ㄐㄧㄢˋ ㄐㄧㄣˋ) 的簡拼代碼是？',
        targetZhuyin: 'ㄒㄩㄣˊ ㄒㄩˋ ㄐㄧㄢˋ ㄐㄧㄣˋ',
        options: ['ssjj', 'xxjj', 'xxgg', 'qqjj'],
        correctAnswer: 'xxjj',
        explanation: 'ㄒ=x, ㄒ=x, ㄐ=j, ㄐ=j，簡拼就是 xxjj！',
        audioText: '循序漸進'
      },
      {
        id: 's14-q3',
        type: 'single-choice',
        prompt: '「馬到成功」(ㄇㄚˇ ㄉㄠˋ ㄔㄥˊ ㄍㄨㄥ) 的簡拼代碼是？',
        targetZhuyin: 'ㄇㄚˇ ㄉㄠˋ ㄔㄥˊ ㄍㄨㄥ',
        options: ['mdcg', 'mdtg', 'mscg', 'bdcg'],
        correctAnswer: 'mdcg',
        explanation: 'ㄇ=m, ㄉ=d, ㄔ=ch(c), ㄍ=g -> mdcg！',
        audioText: '馬到成功'
      },
      {
        id: 's14-q4',
        type: 'single-choice',
        prompt: '「同舟共濟」(ㄊㄨㄥˊ ㄓㄡ ㄍㄨㄥˋ ㄐㄧˋ) 的簡拼代碼是？',
        targetZhuyin: 'ㄊㄨㄥˊ ㄓㄡ ㄍㄨㄥˋ ㄐㄧˋ',
        options: ['tzgj', 'dzgj', 'tcgj', 'tzqj'],
        correctAnswer: 'tzgj',
        explanation: 'ㄊ=t, ㄓ=zh(z), ㄍ=g, ㄐ=j -> tzgj！',
        audioText: '同舟共濟'
      },
      {
        id: 's14-q5',
        type: 'single-choice',
        prompt: '「實事求是」(ㄕˊ ㄕˋ ㄑㄧㄡˊ ㄕˋ) 的簡拼代碼是？',
        targetZhuyin: 'ㄕˊ ㄕˋ ㄑㄧㄡˊ ㄕˋ',
        options: ['ssqs', 'sscs', 'zzqs', 'ssxs'],
        correctAnswer: 'ssqs',
        explanation: 'ㄕ=s, ㄕ=s, ㄑ=q, ㄕ=s -> ssqs！',
        audioText: '實事求是'
      },
      {
        id: 's14-q6',
        type: 'single-choice',
        prompt: '「一舉兩得」(ㄧ ㄐㄩˇ ㄌㄧㄤˇ ㄉㄜˊ) 的完整拼音是？',
        targetZhuyin: 'ㄧ ㄐㄩˇ ㄌㄧㄤˇ ㄉㄜˊ',
        options: ['yijvliangde', 'yijvliangde', 'yijuliangde', 'yijuliangte'],
        correctAnswer: 'yijuliangde',
        explanation: '一=yi, 舉=ju (兩點省略), 兩=liang, 得=de -> yijuliangde！',
        audioText: '一舉兩得'
      },
    ]
  },
  {
    id: 15,
    title: '第十五關：拼音至尊殿堂 · 極限考核',
    subtitle: '終極混合大考驗 · 聲母韻母縮寫盲區全檢驗',
    badge: '拼音至尊',
    description: '最高難度！前後鼻音、平捲舌、縮寫陷阱、j/q/x 綜合考驗，全對即可登上拼音至尊王座！',
    targetCategory: '至尊考核',
    iconName: 'Award',
    unlockRequirementExp: 1750,
    questions: [
      {
        id: 's15-q1',
        type: 'single-choice',
        prompt: '「春風吹又生」中「春風」(ㄔㄨㄣ ㄈㄥ) 的拼音分別是？(注意 un 縮寫與後鼻音 eng)',
        targetZhuyin: 'ㄔㄨㄣ ㄈㄥ',
        options: ['chunfen', 'chunfeng', 'chuenfeng', 'cunfeng'],
        correctAnswer: 'chunfeng',
        explanation: '春=chun (ㄨㄣ縮寫為un)，風=feng (後鼻音-eng) -> chunfeng！',
        audioText: '春風'
      },
      {
        id: 's15-q2',
        type: 'single-choice',
        prompt: '想要在鍵盤上打出「旅途」(ㄌㄩˇ ㄊㄨˊ)，在輸入法中應該輸入？',
        targetZhuyin: 'ㄌㄩˇ ㄊㄨˊ',
        options: ['lutu', 'lyutu', 'lvtu', 'letu'],
        correctAnswer: 'lvtu',
        explanation: 'ㄌ接ㄩ必須用 v 代表 ü (避免與 lu「路」混淆)，所以是 lvtu！',
        audioText: '旅途'
      },
      {
        id: 's15-q3',
        type: 'single-choice',
        prompt: '「英雄聯盟」的「英雄」(ㄧㄥ ㄒㄩㄥˊ) 兩個字拼音是？',
        targetZhuyin: 'ㄧㄥ ㄒㄩㄥˊ',
        options: ['ying xiong', 'yin xiong', 'ying shiong', 'ing xiong'],
        correctAnswer: 'ying xiong',
        explanation: '英=ying (無聲母寫ying), 雄=xiong (ㄒ=x, ㄩㄥ=iong) -> ying xiong！',
        audioText: '英雄'
      },
      {
        id: 's15-q4',
        type: 'single-choice',
        prompt: '「珍珠奶茶」的「珍」(ㄓㄣ) 與「針織」的「織」(ㄓ) 拼音分別是？',
        targetZhuyin: 'ㄓㄣ vs ㄓ',
        options: ['zhen 與 zhi', 'zen 與 zi', 'zheng 與 zhi', 'zhen 與 ji'],
        correctAnswer: 'zhen 與 zhi',
        explanation: '珍=zhen (捲舌+前鼻), 織=zhi (捲舌+i)！',
        audioText: '珍 織'
      },
      {
        id: 's15-q5',
        type: 'single-choice',
        prompt: '「詢問」(ㄒㄩㄣˊ ㄨㄣˋ) 兩個字的拼音是？',
        targetZhuyin: 'ㄒㄩㄣˊ ㄨㄣˋ',
        options: ['xun wen', 'xvun wen', 'shun wen', 'xun un'],
        correctAnswer: 'xun wen',
        explanation: '詢=xun (ㄒ+ㄩㄣ省寫兩點), 問=wen (ㄨㄣ獨立寫wen) -> xun wen！',
        audioText: '詢問'
      },
      {
        id: 's15-q6',
        type: 'single-choice',
        prompt: '終極總結：切換到拼音輸入法後，打字速度大幅提升的最關鍵三個秘訣是？',
        targetZhuyin: '總結核心認知',
        options: [
          '必須嚴格打出每字的聲調 1234 才能出字',
          '免打聲調、善用聲母簡拼、鍵位集中在 3 排主鍵區',
          '鍵位比注音多了 20 個按鍵',
          '必須按 shift 鍵切換大小寫才能打中文'
        ],
        correctAnswer: '免打聲調、善用聲母簡拼、鍵位集中在 3 排主鍵區',
        explanation: '太棒了！免打聲調、利用簡拼首字母聯想、手指始終在 26 鍵主區域，這就是拼音輸入法讓人欲罷不能的超高速體驗！',
        audioText: '太棒了'
      },
    ]
  }
];
