import { DefaultTheme } from 'styled-components';

// (https://gist.github.com/chrislopresto/490ef5692621177ac71c424543702bbb)
const colors = {
  blue: '#2179ee',
  green: '#00cc9a',
  coral: '#ff6759',
  gold: '#f0b95b',
  purple: '#7537ef',
  white: '#ffffff',
  black: '#000000',

  grey10: '#f3f4f8',
  grey20: '#e1e5eb',
  grey30: '#c2c6cc',
  grey40: '#9ea2a8',
  grey50: '#686c73',
  grey60: '#30363d',
};

const secondaryColors = {
  blue10: '#ade7ff',
  blue20: '#61bcff',
  blue30: '#2179ee',
  blue40: '#1f4ab4',
  blue50: '#1d2064',
  green10: '#b5ffcb',
  green20: '#5dffa3',
  green30: '#00cc9a',
  green40: '#219a8a',
  green50: '#183f51',
  purple10: '#dec7ff',
  purple20: '#a673ff',
  purple30: '#7537ef',
  purple40: '#4e23b6',
  purple50: '#2d1b64',
  coral10: '#ffc6b3',
  coral20: '#ff8e75',
  coral30: '#ff6759',
  coral40: '#eb312a',
  coral50: '#7b1e30',
  gold10: '#ffedc2',
  gold20: '#ffda8b',
  gold30: '#f0b95b',
  gold40: '#e5a229',
  gold50: '#6a4a24',
};

const breakpoints = ['31.25em', '43.75em', '46.875em'];
const fontSizes = [
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '1.8rem',
  '2.4rem',
  '2.8rem',
  '3.2rem',
  '4.0rem',
  '4.8rem',
  '6.4rem',
];
const space = [
  '0',
  '.4rem',
  '.8rem',
  '1.2rem',
  '1.6rem',
  '2.0rem',
  '3.2rem',
  '4.8rem',
  '6.4rem',
  '9.6rem',
];

const lightTheme: DefaultTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
  secondaryColors,
  // // main색상
  // ownColor: '#FFD779',
  // // 마우스올렸을 때
  // ownColorHover: '#FFBC20',
  // // 메인 바탕화면
  // bgColor: '#ffffff',
  // // 주문하기 배경색상
  // subBgColor: '#eeeeee',
  // // 옵션 아이템 배경색상
  // lightBgColor: '#F9F9F9',
  // // 옵션 아이템 배경색상
  // orderBgColor: '#e9e9e9',
  // // 일반 글씨
  // textColor: '#333333',
  // // 가격할인이나 기타 회색으로 처리해야되는 부분
  // subTextColor: '#666666',
  // // 주문하기 박스 색상
  // boxColor: '#ffffff',
  // // 매진 박스 색상
  // soldoutBoxColor: '#666666',
  // // 세일 박스, 가격 등 색상
  // highlightColor: '#fe5356',
  // // footer
  // subBoxColor: '#eeeeee',
  // // 일반 박스(best, md)
  // borderColor: '#ccc',
  // // 정보 텍스트 색상
  // lightTextColor: '#B8B8B8',
};

export { lightTheme };
