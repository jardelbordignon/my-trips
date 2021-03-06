import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eee;

    --container: min(1000rem, 100vw);
    --small: 15rem;
    --medium: 30rem;
    --large: 50rem;
  }

  [data-theme='dark'] {
    --highlight: #030518;
    --background: #e20e8d;
  }

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
    background: var(--background);
    color: var(--white);
  }

  body, input, textarea, select, button {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16rem;
  }

  p {
    font-size: 20rem;
    line-height: var(--medium);
  }

  a {
    color: var(--white);
    text-decoration: none;
    &:hover {
      transition: opacity 0.2s;
      opacity: 0.8;
      color: var(--highlight);
    }
  }

  h1, h2, h3 {
    font-size: var(--large);
    margin-bottom: var(--large);
  }
  h4, h5, h6 {
    font-size: var(--medium);
    margin-bottom: var(--medium);
  }
`
