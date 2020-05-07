import React from "react"
import styled from "styled-components"
import { Main, mixins, theme } from "~styles"
import { IconLion } from "~components/icons"

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
const LogoContainer = styled.div`
  ${flex.between};
  margin-left: -0.5rem;
  padding: 0.5rem 0.5rem;
  color: ${colors.dark};
  font-family: ${fonts.monospace};
  font-size: ${fontSizes.xxl};
  font-weight: 600;
`
const StyledLogo = styled.div`
  ${flex.center};
  svg {
    margin-right: 1rem;
    width: ${fontSizes.h1};
    height: ${fontSizes.h1};
    fill: ${colors.dark};
    user-select: none;
    ${mixins.shadow};
  }
`

const Nav = () => {
  return (
    <StyledMain>
      <StyledNav>
        <LogoContainer>
          <StyledLogo>
            <IconLion />
            Castle
          </StyledLogo>
        </LogoContainer>
      </StyledNav>
    </StyledMain>
  )
}

export default Nav
