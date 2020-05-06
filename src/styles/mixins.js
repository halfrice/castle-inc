import { css } from "styled-components"
import devices from "./devices"

const mixins = {
  flex: {
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    between: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    start: css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `,
    end: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
    `,
  },
  padding: {
    top: css`
      padding-top: 8rem;
      ${devices.phone`padding-top: 6rem;`};
    `,
    bottom: css`
      padding-bottom: 8rem;
      ${devices.phone`padding-bottom: 6rem;`};
    `,
    left: css`
      padding-left: 8rem;
      ${devices.desktop`padding-left: 6rem;`};
      ${devices.tablet`padding-left: 3rem;`};
      ${devices.phone`padding-left: 1.5rem;`};
    `,
    right: css`
      padding-right: 8rem;
      ${devices.desktop`padding-right: 6rem;`};
      ${devices.tablet`padding-right: 3rem;`};
      ${devices.phone`padding-right: 1.5rem;`};
    `,
  },
}

export default mixins