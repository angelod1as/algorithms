import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import reset from 'styled-reset'
import { ThemeProps } from './theme'

interface GlobalProps {
  theme: ThemeProps
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  /* reset and normalize */
  ${reset}
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto Condensed', serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 120%;
    overflow-x: hidden;
  }

  h1 {
    font-size: 2em;
    color: ${p => p.theme.colors.black};
    line-height: 120%;
    position: relative;
    margin: 0 0 30px 0;
  }

  h2 {
    font-size: 1.4em;
    font-weight: 700;
    color: ${p => p.theme.colors.black};
    line-height: 120%;
  }

  p {
    margin-bottom: 15px;
  }
`

export default GlobalStyle
