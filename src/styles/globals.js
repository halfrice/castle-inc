import { createGlobalStyle } from "styled-components"
import theme from "./theme.yml"
import Transitions from "./Transitions"

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
    background-color: ${colors.white};
    font-family: ${fonts.serif};
    font-size: ${fontSizes.default};
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.darkBlue};
    font-weight: 600;
  }

  p {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    pointer-events: none;
  }

  ${Transitions};
`

export default Globals
