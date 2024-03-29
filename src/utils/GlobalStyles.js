import { createGlobalStyle } from 'styled-components';

import maexchenJPG from '../assets/images/maexchen.jpg';
import maexchenWEBP from '../assets/images/maexchen.webp';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,900&display=swap');
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  html {
    -webkit-text-size-adjust: 100%; 
    font-size: 1rem;
  }

  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    line-height: ${({ theme }) => theme.lineHeights.normal};
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url('${maexchenJPG}');
    background-image: url('${maexchenWEBP}');
    background-size: cover;
    background-repeat: no-repeat;
  }

  hr {
    height: 0;
  }

  abbr[title] {
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: 900;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace; 
    font-size: 1rem; 
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }

  summary {
    display: list-item;
  }
`;

export default GlobalStyles;
