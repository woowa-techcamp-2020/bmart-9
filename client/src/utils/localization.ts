
// 문자열마다 언어만들어두기
const strings = new Map([
  // 버튼
  [
    '삭제',
    {
      KOR: '삭제',
      ENG: 'Delete',
      CN: '',
      JP: '',
    },
  ],
  [
    '뒤로가기',
    {
      KOR: '뒤로가기',
      ENG: 'Back',
      CN: '',
      JP: '',
    },
  ],
  [
    '장바구니',
    {
      KOR: '장바구니',
      ENG: 'Cart',
      CN: '',
      JP: '',
    },
  ],
]);

export const Lang = {
  ENG: 'ENG',
  KOR: 'KOR',
  JP: 'JP',
  CN: 'CN',
};

let currentLang = Lang.ENG;

// 현재 언어 가져오기
export function getLanguage() {
  return currentLang;
}

// 언어 설정 
export function setLanguage(lang:string) {
  currentLang = lang;
}

// 문자 들어오면 해당 언어로 리턴
export function $str(key:string) {
  const string = strings.get(key);
  if (string !== undefined && string !== null) {
    switch (currentLang) {
      case Lang.KOR:
        return string.KOR;

      case Lang.CN:
        if (string.CN === '') return string.KOR;
        return string.CN;

      case Lang.JP:
        if (string.JP === '') return string.KOR;
        return string.JP;

      case Lang.ENG:
        if (string.ENG === '') return string.KOR;
        return string.ENG;

      default:
        return string.KOR;
    }
  } else {
    return '' + key;
  }
}
