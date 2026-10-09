// Interactive Zhuyin <-> Pinyin converter and analyzer

interface PhoneticBreakdown {
  original: string;
  zhuyin: string;
  pinyin: string;
  initial: string;
  final: string;
  tone: string;
  specialNote?: string;
}

// Common syllable mappings
export const ZHUYIN_PINYIN_MAP: Record<string, string> = {
  // 聲母
  'ㄅ': 'b', 'ㄆ': 'p', 'ㄇ': 'm', 'ㄈ': 'f',
  'ㄉ': 'd', 'ㄊ': 't', 'ㄋ': 'n', 'ㄌ': 'l',
  'ㄍ': 'g', 'ㄎ': 'k', 'ㄏ': 'h',
  'ㄐ': 'j', 'ㄑ': 'q', 'ㄒ': 'x',
  'ㄓ': 'zh', 'ㄔ': 'ch', 'ㄕ': 'sh', 'ㄖ': 'r',
  'ㄗ': 'z', 'ㄘ': 'c', 'ㄙ': 's',

  // 韻母
  'ㄚ': 'a', 'ㄛ': 'o', 'ㄜ': 'e', 'ㄝ': 'ê',
  'ㄞ': 'ai', 'ㄟ': 'ei', 'ㄠ': 'ao', 'ㄡ': 'ou',
  'ㄢ': 'an', 'ㄣ': 'en', 'ㄤ': 'ang', 'ㄥ': 'eng', 'ㄦ': 'er',
  'ㄧ': 'i', 'ㄨ': 'u', 'ㄩ': 'ü',
};

// Syllable rules parser for Zhuyin text (e.g. "ㄓㄨㄥ" -> "zhong", "ㄑㄩ" -> "qu", "ㄋㄧㄡ" -> "niu")
export function parseZhuyinSyllable(rawZhuyin: string): PhoneticBreakdown {
  const clean = rawZhuyin.trim();
  let tone = '一聲';
  let body = clean;

  if (clean.includes('ˊ')) {
    tone = '二聲';
    body = clean.replace('ˊ', '');
  } else if (clean.includes('ˇ')) {
    tone = '三聲';
    body = clean.replace('ˇ', '');
  } else if (clean.includes('ˋ')) {
    tone = '四聲';
    body = clean.replace('ˋ', '');
  } else if (clean.includes('˙')) {
    tone = '輕聲';
    body = clean.replace('˙', '');
  }

  // Identify initial
  const initialsList = ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄗ','ㄘ','ㄙ'];
  let initial = '';
  let final = body;

  for (const init of initialsList) {
    if (body.startsWith(init)) {
      initial = init;
      final = body.slice(init.length);
      break;
    }
  }

  // Convert initial to pinyin
  const pinyinInit = initial ? ZHUYIN_PINYIN_MAP[initial] || '' : '';
  let pinyinFinal = '';
  let specialNote = '';

  // Special combination final rules
  if (final === 'ㄨㄥ') {
    if (initial) {
      pinyinFinal = 'ong';
      specialNote = '接在聲母後，「ㄨㄥ」縮寫為「ong」！';
    } else {
      pinyinFinal = 'weng';
      specialNote = '「ㄨㄥ」獨立成字寫作「weng」！';
    }
  } else if (final === 'ㄧㄡ') {
    if (initial) {
      pinyinFinal = 'iu';
      specialNote = '接在聲母後，「ㄧㄡ」中間的 o 省略，寫作「iu」！';
    } else {
      pinyinFinal = 'you';
    }
  } else if (final === 'ㄨㄟ') {
    if (initial) {
      pinyinFinal = 'ui';
      specialNote = '接在聲母後，「ㄨㄟ」中間的 e 省略，寫作「ui」！';
    } else {
      pinyinFinal = 'wei';
    }
  } else if (final === 'ㄨㄣ') {
    if (initial) {
      pinyinFinal = 'un';
      specialNote = '接在聲母後，「ㄨㄣ」中間的 e 省略，寫作「un」！';
    } else {
      pinyinFinal = 'wen';
    }
  } else if (final === 'ㄧㄢ') {
    pinyinFinal = initial ? 'ian' : 'yan';
    specialNote = '「ㄧㄢ」雖然讀音似 yen，但拼音書寫一律為 ian (無聲母寫 yan)！';
  } else if (final === 'ㄧ') {
    pinyinFinal = initial ? 'i' : 'yi';
  } else if (final === 'ㄨ') {
    pinyinFinal = initial ? 'u' : 'wu';
  } else if (final === 'ㄩ') {
    if (['ㄐ', 'ㄑ', 'ㄒ'].includes(initial)) {
      pinyinFinal = 'u';
      specialNote = '遇到 j, q, x，「ㄩ (ü)」上面的兩點省寫！輸入法直接打 u！';
    } else if (['ㄋ', 'ㄌ'].includes(initial)) {
      pinyinFinal = 'ü';
      specialNote = 'ㄋ、ㄌ 接 ㄩ 保留兩點！鍵盤打字按「v」代打 (如 lv, nv)！';
    } else {
      pinyinFinal = 'yu';
    }
  } else if (final === 'ㄩㄝ') {
    if (['ㄐ', 'ㄑ', 'ㄒ'].includes(initial)) {
      pinyinFinal = 'ue';
      specialNote = '遇到 j, q, x，「ㄩ」兩點省略，寫作 ue！';
    } else {
      pinyinFinal = initial ? 'üe' : 'yue';
    }
  } else if (final === 'ㄩㄢ') {
    if (['ㄐ', 'ㄑ', 'ㄒ'].includes(initial)) {
      pinyinFinal = 'uan';
      specialNote = '遇到 j, q, x，「ㄩㄢ」兩點省略寫作 uan！';
    } else {
      pinyinFinal = initial ? 'üan' : 'yuan';
    }
  } else if (final === 'ㄩㄣ') {
    if (['ㄐ', 'ㄑ', 'ㄒ'].includes(initial)) {
      pinyinFinal = 'un';
      specialNote = '遇到 j, q, x，「ㄩㄣ」兩點省略寫作 un！';
    } else {
      pinyinFinal = initial ? 'ün' : 'yun';
    }
  } else if (final === 'ㄩㄥ') {
    pinyinFinal = initial ? 'iong' : 'yong';
  } else {
    // Normal fallback
    const singleMatches: Record<string, string> = {
      'ㄚ': 'a', 'ㄛ': 'o', 'ㄜ': 'e', 'ㄝ': 'ie',
      'ㄞ': 'ai', 'ㄟ': 'ei', 'ㄠ': 'ao', 'ㄡ': 'ou',
      'ㄢ': 'an', 'ㄣ': 'en', 'ㄤ': 'ang', 'ㄥ': 'eng', 'ㄦ': 'er',
      'ㄧㄚ': 'ia', 'ㄧㄛ': 'io', 'ㄧㄝ': 'ie', 'ㄧㄞ': 'iai', 'ㄧㄠ': 'iao', 'ㄧㄣ': 'in', 'ㄧㄤ': 'iang', 'ㄧㄥ': 'ing',
      'ㄨㄚ': 'ua', 'ㄨㄛ': 'uo', 'ㄨㄞ': 'uai', 'ㄨㄢ': 'uan', 'ㄨㄤ': 'uang'
    };
    if (singleMatches[final]) {
      pinyinFinal = singleMatches[final];
      if (!initial && final.startsWith('ㄧ')) {
        pinyinFinal = pinyinFinal.replace(/^i/, 'y');
        if (pinyinFinal === 'y') pinyinFinal = 'yi';
      } else if (!initial && final.startsWith('ㄨ')) {
        pinyinFinal = pinyinFinal.replace(/^u/, 'w');
        if (pinyinFinal === 'w') pinyinFinal = 'wu';
      }
    } else {
      // Piece by piece
      pinyinFinal = Array.from(final).map(ch => ZHUYIN_PINYIN_MAP[ch] || ch).join('');
    }
  }

  const pinyinCombined = (pinyinInit + pinyinFinal) || clean;

  return {
    original: clean,
    zhuyin: clean,
    pinyin: pinyinCombined,
    initial: initial ? `${initial} (${pinyinInit})` : '零聲母',
    final: final ? `${final} (${pinyinFinal})` : '無',
    tone,
    specialNote: specialNote || undefined,
  };
}

// Convert common phrases or words into Zhuyin & Pinyin
export const COMMON_CONVERSION_PRESETS = [
  { text: '台灣', zhuyin: 'ㄊㄞˊ ㄨㄢ', pinyin: 'taiwan', note: '常用簡拼：tw' },
  { text: '台北', zhuyin: 'ㄊㄞˊ ㄅㄟˇ', pinyin: 'taibei', note: '常用簡拼：tb' },
  { text: '珍珠奶茶', zhuyin: 'ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ', pinyin: 'zhenzhunaicha', note: '常用簡拼：zznc' },
  { text: '謝謝', zhuyin: 'ㄒㄧㄝˋ ㄒㄧㄝ˙', pinyin: 'xiexie', note: 'ㄒ=x，ㄧㄝ=ie' },
  { text: '喜歡', zhuyin: 'ㄒㄧˇ ㄏㄨㄢ', pinyin: 'xihuan', note: '常用簡拼：xh' },
  { text: '學校', zhuyin: 'ㄒㄩㄝˊ ㄒㄧㄠˋ', pinyin: 'xuexiao', note: 'ㄒㄩㄝ 省略兩點寫 xue' },
  { text: '中國', zhuyin: 'ㄓㄨㄥ ㄍㄨㄛˊ', pinyin: 'zhongguo', note: 'ㄓㄨㄥ 縮合為 zhong' },
  { text: '出發', zhuyin: 'ㄔㄨ ㄈㄚ', pinyin: 'chufa', note: 'ㄔ 捲舌是 ch' },
  { text: '草莓', zhuyin: 'ㄘㄠˇ ㄇㄟˊ', pinyin: 'caomei', note: 'ㄘ 平舌是 c' },
  { text: '綠色', zhuyin: 'ㄌㄩˋ ㄙㄜˋ', pinyin: 'lvse', note: 'ㄌ接ü鍵盤打 lv！' },
  { text: '女人', zhuyin: 'ㄋㄩˇ ㄖㄣˊ', pinyin: 'nvren', note: 'ㄋ接ü鍵盤打 nv！' },
];
