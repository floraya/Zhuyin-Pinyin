import { TrapRule } from '../types';

export const TRAP_RULES: TrapRule[] = [
  {
    id: 'jqx-u-dots',
    title: '魔王 1：ㄐ ㄑ ㄒ 遇到 ㄩ (ü 兩點消失術)',
    zhuyinPattern: 'ㄐ/ㄑ/ㄒ + ㄩ',
    pinyinPattern: 'ju / qu / xu (省去兩點寫作 u)',
    pitfall: '注音直覺以為是「u」的發音，或者在拼音輸入法裡到處找 ü / v 鍵。',
    ruleExplanation:
      '漢語拼音規定：聲母 j、q、x 絕不與真正圓唇的「u (ㄨ)」結合。因此當遇到「ㄩ (ü)」時，為了書寫便利，上面的兩點直接省寫！念法依然是「ㄩ」，打字時直接按字母 u！\n注意例外：ㄋ(n) 和 ㄌ(l) 既可以接 u 也可以接 ü，所以女(nǚ) 和 綠(lǜ) 必須區分，打字鍵盤上一律用「v」代打！',
    mnemonic: '「小 ü 見到 j q x，脫帽敬禮把點去；ㄋ ㄌ 面前兩點留，輸入法上打 v 就搞定！」',
    examples: [
      { word: '去', zhuyin: 'ㄑㄩˋ', pinyin: 'qu', meaning: '打 qu，不是 qv 或 qü' },
      { word: '局', zhuyin: 'ㄐㄩˊ', pinyin: 'ju', meaning: '打 ju，不是 jv' },
      { word: '許', zhuyin: 'ㄒㄩˇ', pinyin: 'xu', meaning: '打 xu，不是 xv' },
      { word: '全', zhuyin: 'ㄑㄩㄢˊ', pinyin: 'quan', meaning: 'ㄑ+ㄩㄢ 拼寫為 quan' },
      { word: '綠', zhuyin: 'ㄌㄩˋ', pinyin: 'lǜ (鍵盤打 lv)', meaning: '因為有 lu (路)，所以必須打 lv' },
      { word: '女', zhuyin: 'ㄋㄩˇ', pinyin: 'nǚ (鍵盤打 nv)', meaning: '因為有 nu (怒)，所以必須打 nv' },
    ],
  },
  {
    id: 'ian-spelling',
    title: '魔王 2：「ㄧㄢ」到底是 ian 還是 en？',
    zhuyinPattern: '聲母 + ㄧㄢ (發音似 yen)',
    pinyinPattern: '-ian (獨立成字寫作 yan)',
    pitfall: '台灣人唸「煙、天、電、簡」時，口形音感接近「ㄝ+ㄣ」，常誤打成 en 或 yen。',
    ruleExplanation:
      '雖然「ㄧㄢ」發音聽起來像 i+en (耶-恩)，但拼音的字形結構固定寫為 -ian。只要在注音看到「ㄧㄢ」，直接輸入「ian」即可！若是單獨沒有聲母的字（如：煙、言、眼、宴），前面加上 y 寫作「yan」。',
    mnemonic: '「天眼邊緣都是 ian，單字加 y (yan)，連字打 ian (tian, dian, jian)！」',
    examples: [
      { word: '天', zhuyin: 'ㄊㄧㄢ', pinyin: 'tian', meaning: 'ㄊ+ㄧㄢ = tian' },
      { word: '店', zhuyin: 'ㄉㄧㄢˋ', pinyin: 'dian', meaning: 'ㄉ+ㄧㄢ = dian' },
      { word: '臉', zhuyin: 'ㄌㄧㄢˇ', pinyin: 'lian', meaning: 'ㄌ+ㄧㄢ = lian' },
      { word: '鹽', zhuyin: 'ㄧㄢˊ', pinyin: 'yan', meaning: '無聲母，寫作 yan' },
    ],
  },
  {
    id: 'weng-vs-ong',
    title: '魔王 3：「ㄨㄥ」何時是 weng，何時是 ong？',
    zhuyinPattern: 'ㄨㄥ',
    pinyinPattern: '單字 weng / 接聲母變 -ong',
    pitfall: '台灣人習慣注音打「ㄓㄨㄥ」(中)、「ㄉㄨㄥ」(東)，直覺拼成 zweng 或 dweng。',
    ruleExplanation:
      '「ㄨㄥ」在單獨成字沒有聲母時拼作「weng」(如：翁、嗡、甕)。但只要前面有聲母（例如 ㄅㄆㄇㄉㄊㄋㄌㄍㄎㄏㄓㄔㄕㄖㄗㄘㄙ），「ㄨㄥ」一律縮合成「ong」！所以「中」是 zhong，「紅」是 hong。',
    mnemonic: '「獨生子是 weng，有前輩(聲母)帶就換裝變 ong！」',
    examples: [
      { word: '翁', zhuyin: 'ㄨㄥ', pinyin: 'weng', meaning: '獨立單音 = weng' },
      { word: '中', zhuyin: 'ㄓㄨㄥ', pinyin: 'zhong', meaning: 'ㄓ+ㄨㄥ = zhong (不是 zhweng)' },
      { word: '東', zhuyin: 'ㄉㄨㄥ', pinyin: 'dong', meaning: 'ㄉ+ㄨㄥ = dong' },
      { word: '同', zhuyin: 'ㄊㄨㄥˊ', pinyin: 'tong', meaning: 'ㄊ+ㄨㄥ = tong' },
      { word: '紅', zhuyin: 'ㄏㄨㄥˊ', pinyin: 'hong', meaning: 'ㄏ+ㄨㄥ = hong' },
    ],
  },
  {
    id: 'iu-ui-un-abbreviations',
    title: '魔王 4：省寫三人組 (ㄧㄡ=iu, ㄨㄟ=ui, ㄨㄣ=un)',
    zhuyinPattern: 'ㄧㄡ / ㄨㄟ / ㄨㄣ',
    pinyinPattern: '-iu / -ui / -un (省去中間元音)',
    pitfall: '想打「六(ㄌㄧㄡ)」卻打 liou；想打「會(ㄏㄨㄟ)」卻打 huei；想打「春(ㄔㄨㄣ)」卻打 chuen。',
    ruleExplanation:
      '漢語拼音為了打字與書寫精簡，將三組韻母接在聲母後進行了縮寫：\n1. ㄧㄡ 縮寫成「iu」(獨立時拼 you)\n2. ㄨㄟ 縮寫成「ui」(獨立時拼 wei)\n3. ㄨㄣ 縮寫成「un」(獨立時拼 wen)',
    mnemonic: '「中間肚子藏起來：iou 變 iu，uei 變 ui，uen 變 un！」',
    examples: [
      { word: '牛', zhuyin: 'ㄋㄧㄡˊ', pinyin: 'niu', meaning: 'ㄋ+ㄧㄡ = niu (不是 niou)' },
      { word: '六', zhuyin: 'ㄌㄧㄡˋ', pinyin: 'liu', meaning: 'ㄌ+ㄧㄡ = liu' },
      { word: '對', zhuyin: 'ㄉㄨㄟˋ', pinyin: 'dui', meaning: 'ㄉ+ㄨㄟ = dui (不是 duei)' },
      { word: '貴', zhuyin: 'ㄍㄨㄟˋ', pinyin: 'gui', meaning: 'ㄍ+ㄨㄟ = gui' },
      { word: '春', zhuyin: 'ㄔㄨㄣ', pinyin: 'chun', meaning: 'ㄔ+ㄨㄣ = chun (不是 chuen)' },
      { word: '論', zhuyin: 'ㄌㄨㄣˋ', pinyin: 'lun', meaning: 'ㄌ+ㄨㄣ = lun' },
    ],
  },
  {
    id: 'retroflex-vs-flat',
    title: '魔王 5：捲舌 (zh ch sh r) vs 平舌 (z c s)',
    zhuyinPattern: 'ㄓ ㄔ ㄕ ㄖ vs ㄗ ㄘ ㄙ',
    pinyinPattern: '加 h 是捲舌，無 h 是平舌',
    pitfall: '台灣人口語常把「ㄓㄗ、ㄔㄘ、ㄕㄙ」發音模糊化，在注音鍵盤上位置不同，在拼音時常搞混是否要加 h。',
    ruleExplanation:
      '在拼音中規則非常工整：\n• 捲舌音（ㄓ ㄔ ㄕ）= 在 z、c、s 後面加一個「h」，即 zh、ch、sh（ㄖ 對應 r）\n• 平舌音（ㄗ ㄘ ㄙ）= 乾淨俐落的單字母 z、c、s！\n特別提醒：注音的「ㄘ」在拼音是對應「c」！',
    mnemonic: '「翹舌捲起要有 h (zh ch sh)，舌頭平平單獨站 (z c s)；注音ㄘ是英文字母 c！」',
    examples: [
      { word: '知', zhuyin: 'ㄓ', pinyin: 'zhi', meaning: '捲舌：zh' },
      { word: '資', zhuyin: 'ㄗ', pinyin: 'zi', meaning: '平舌：z' },
      { word: '吃', zhuyin: 'ㄔ', pinyin: 'chi', meaning: '捲舌：ch' },
      { word: '詞', zhuyin: 'ㄘˊ', pinyin: 'ci', meaning: '平舌：c (非常容易忘記ㄘ是c)' },
      { word: '詩', zhuyin: 'ㄕ', pinyin: 'shi', meaning: '捲舌：sh' },
      { word: '司', zhuyin: 'ㄙ', pinyin: 'si', meaning: '平舌：s' },
    ],
  },
  {
    id: 'front-back-nasal',
    title: '魔王 6：前鼻音 (an, en, in) vs 後鼻音 (ang, eng, ing)',
    zhuyinPattern: 'ㄢ ㄣ vs ㄤ ㄥ',
    pinyinPattern: '-n (前鼻) vs -ng (後鼻)',
    pitfall: '台灣腔調對前後鼻音區分較弱（如：陳 chén 與 程 chéng、心 xīn 與 星 xīng），打字時容易選不到字。',
    ruleExplanation:
      '拼音規則以是否帶「g」結尾來區分：\n• ㄢ (an), ㄣ (en), ㄧㄣ (in), ㄨㄣ (un) 都是前鼻音，收在 -n\n• ㄤ (ang), ㄥ (eng), ㄧㄤ (iang), ㄧㄥ (ing), ㄨㄤ (uang), ㄨㄥ (ong) 都是後鼻音，收在 -ng！',
    mnemonic: '「舌尖頂牙是前鼻 (-n)，舌根隆起後鼻加 g (-ng)！」',
    examples: [
      { word: '分', zhuyin: 'ㄈㄣ', pinyin: 'fen', meaning: '前鼻音：-n' },
      { word: '風', zhuyin: 'ㄈㄥ', pinyin: 'feng', meaning: '後鼻音：-ng' },
      { word: '心', zhuyin: 'ㄒㄧㄣ', pinyin: 'xin', meaning: '前鼻音：-n' },
      { word: '星', zhuyin: 'ㄒㄧㄥ', pinyin: 'xing', meaning: '後鼻音：-ng' },
      { word: '陳', zhuyin: 'ㄔㄣˊ', pinyin: 'chen', meaning: '前鼻音：-n' },
      { word: '程', zhuyin: 'ㄔㄥˊ', pinyin: 'cheng', meaning: '後鼻音：-ng' },
    ],
  },
  {
    id: 'strange-letters-jqx',
    title: '魔王 7：注音族最陌生的三大字母「j, q, x」',
    zhuyinPattern: 'ㄐ ㄑ ㄒ',
    pinyinPattern: 'j, q, x (發音與英文不同！)',
    pitfall: 'ㄑ對應 q、ㄒ對應 x 是許多台灣初學者最大的違和感，因為英文中 q 常伴隨 qu，x 常唸 ks。',
    ruleExplanation:
      '漢語拼音借用了拉丁字母：\n• ㄐ 對應 j (例如「機」ji、「家」jia)\n• ㄑ 對應 q (例如「七」qi、「錢」qian、「橋」qiao)\n• ㄒ 對應 x (例如「西」xi、「小」xiao、「想」xiang)\n記住：看到注音「ㄑ」找「q」鍵；看到「ㄒ」找「x」鍵！',
    mnemonic: '「ㄐ 是 j，ㄑ 像圓圈拖條尾巴是 q，ㄒ 兩筆交叉是 x！」',
    examples: [
      { word: '謝謝', zhuyin: 'ㄒㄧㄝˋ ㄒㄧㄝ˙', pinyin: 'xiexie', meaning: '打 xiexie' },
      { word: '巧克', zhuyin: 'ㄑㄧㄠˇ ㄎㄜˋ', pinyin: 'qiaoke', meaning: '打 qiaoke' },
      { word: '機器', zhuyin: 'ㄐㄧ ㄑㄧˋ', pinyin: 'jiqi', meaning: '打 jiqi' },
      { word: '喜歡', zhuyin: 'ㄒㄧˇ ㄏㄨㄢ', pinyin: 'xihuan', meaning: '打 xihuan' },
    ],
  },
  {
    id: 'ime-superpowers',
    title: '魔王 8：拼音輸入法三大作弊神器 (免聲調、簡拼、模糊音)',
    zhuyinPattern: '注音打字習慣',
    pinyinPattern: '拼音輸入法獨特優勢',
    pitfall: '許多人以為拼音要像注音一樣按一聲二聲三聲四聲，覺得按很多鍵很麻煩。',
    ruleExplanation:
      '這就是為什麼拼音打字能這麼快！\n1. 【免打聲調】：幾乎所有拼音輸入法（微軟、蘋果、Google Gboard）都直接打純英文字母即可，不用打調號！\n2. 【簡拼黑科技】：只打每個字的聲母！例如「珍珠奶茶」只需按 z z n c！「台北」打 t b！「台灣」打 t w！\n3. 【ü 的代用鍵】：在鍵盤上打「v」就代表 ü！例如女打 nv，綠打 lv！',
    mnemonic: '「打字不用挑聲調，長詞只敲開頭字 (簡拼)，打 ü 就按 v！」',
    examples: [
      { word: '台北', zhuyin: 'ㄊㄞˊ ㄅㄟˇ', pinyin: 'taibei (簡拼: tb)', meaning: '只要敲 tb 就能直接出詞' },
      { word: '台灣', zhuyin: 'ㄊㄞˊ ㄨㄢ', pinyin: 'taiwan (簡拼: tw)', meaning: '只需敲 tw' },
      { word: '珍珠奶茶', zhuyin: 'ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ', pinyin: 'zhenzhunaicha (簡拼: zznc)', meaning: '敲 zznc 秒出詞' },
      { word: '綠色', zhuyin: 'ㄌㄩˋ ㄙㄜˋ', pinyin: 'lvse', meaning: '打 lvse' },
    ],
  },
];
