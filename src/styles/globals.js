import { createGlobalStyle } from "styled-components"
import theme from "./theme.yml"

const { colors, fonts, fontSizes } = theme

const Globals = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    min-height: 100%;
    background-color: ${colors.light};
    font-family: ${fonts.serif};
    font-size: ${fontSizes.default};
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.darkBlue};
    font-weight: 600;
  }
`

export default Globals
