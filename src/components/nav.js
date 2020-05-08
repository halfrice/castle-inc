import React from "react"
import styled from "styled-components"
import { Main, mixins, theme } from "~styles"

const { flex } = mixins
const { colors, fonts, fontSizes } = theme

const StyledMain = styled(Main)`
  ${flex.center};
  width: 100%;
  height: 6rem;
  background-color: ${colors.light};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  z-index: 20;
`
const StyledNav = styled.nav`
  ${flex.between};
  position: relative;
  width: 100%;
  max-width: 64rem;
`
const StyledLogo = styled.div`
  ${flex.between};
  margin-left: -0.5rem;
  padding: 0.5rem 0.5rem;
  color: ${colors.darkBlue};
  font-family: ${fonts.monospace};
  font-size: ${fontSizes.xxl};
  font-weight: 600;
`

const Nav = () => {
  return (
    <StyledMain>
      <StyledNav>
        <StyledLogo>Castle</StyledLogo>
      </StyledNav>
    </StyledMain>
  )
}

export default Nav
