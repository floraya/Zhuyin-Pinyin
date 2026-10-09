// Web Speech API wrapper for standard Chinese pronunciation

export function speakChinese(text: string, rate: number = 0.9): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any pending speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-TW'; // fallback can also be zh-CN
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Try finding standard Chinese voice
      const voices = window.speechSynthesis.getVoices();
      const chineseVoice = voices.find(
        (v) => v.lang === 'zh-TW' || v.lang === 'zh-CN' || v.lang.startsWith('zh')
      );
      if (chineseVoice) {
        utterance.voice = chineseVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    } catch {
      resolve();
    }
  });
}
