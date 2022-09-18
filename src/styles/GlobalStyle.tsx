import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${props => props.theme.colors.white};

  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
/* 부드러운 스크롤 */
html {
    scroll-behavior: smooth;
}
:root {
  --vh: 100%;

  // font family
  --font-primary: Inter, system-ui, sans-serif;

  // font size
  --text-base-size: 1rem; // body font-size
  --text-scale-ratio: 1.2; // multiplier used to generate the type scale values 👇
  
  // line-height
  --body-line-height: 1.4;
  --heading-line-height: 1.2;
  
  // capital letters - used in combo with the lhCrop mixin
  --font-primary-capital-letter: 1;

  // unit - don't modify unless you want to change the typography unit (e.g., from Rem to Em units)
  --text-unit: var(--text-base-size); // if Em units → --text-unit: 1em;

  --text-xs: calc((var(--text-unit) / var(--text-scale-ratio)) / var(--text-scale-ratio));
  --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
  --text-md: calc(var(--text-sm) * var(--text-scale-ratio) * var(--text-scale-ratio));
  --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
  --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
  --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
  --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));
  --text-xxxxl: calc(var(--text-xxxl) * var(--text-scale-ratio));
}
`;

export default GlobalStyle;
