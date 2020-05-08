import { css } from "styled-components"
import theme from "./theme.yml"

const Transitions = css`
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(4rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-3rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeleft-enter {
    opacity: 0.01;
    transform: translateX(-6rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeleft-enter-active {
    opacity: 1;
    transform: translateX(0rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .faderight-enter {
    opacity: 0.01;
    transform: translateX(2rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .faderight-enter-active {
    opacity: 1;
    transform: translateX(0rem);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fade-enter {
    opacity: 0;
    transition: opacity 1000ms ${theme.easing};
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }
`

export default Transitions
