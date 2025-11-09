
import React from 'react';
import { theme } from './theme';

const GlobalStyles = () => {
  const styles = `
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body, #root {
      height: 100%;
      width: 100%;
      overflow: hidden; 
    }

    body {
      background-color: ${theme.color.Base.Surface[1]};
      color: ${theme.color.Base.Content[1]};
      font-family: ${theme.type.Readable.Body.M.fontFamily};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  return React.createElement('style', null, styles);
};

export default GlobalStyles;
