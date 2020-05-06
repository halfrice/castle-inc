import React from "react"
import styled from "styled-components"
import { Main, mixins, theme } from "~styles"

const { flex } = mixins
const { colors, fonts, fontSizes } = theme

const StyledMain = styled(Main)`
  ${flex.center};
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`
const StyledNav = styled.nav`
  ${flex.between};
  position: relative;
  width: 100%;
  max-width: 64rem;
`
const StyledLogo = styled.div`
  ${flex.center};
  color: ${colors.darkBlue};
  font-size: ${fontSizes.xxl};
  font-weight: 600;
  font-family: ${fonts.monospace};
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
