import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 6.25%; // 1rem = 1px
  }

  @media (max-width: 768px) {
    html {
      font-size: 5.625%; // 1rem = 0.9px
    }
  }

  html, body, #__next {
    height: 100%;
  }

  body, input, textarea, select, button {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16rem;
  }
`
