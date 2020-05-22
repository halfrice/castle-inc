import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Social } from "~components"
import { devices, Main, mixins, theme } from "~styles"

const { flex } = mixins
const { colors, fonts, fontSizes } = theme

const StyledMain = styled(Main)`
  ${flex.center};
  width: 100%;
  min-height: 6rem;
  ${devices.phone`min-height: 7rem`};
  background-color: ${colors.white};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  overflow-y: hidden;
  z-index: 20;
`
const StyledNav = styled.nav`
  ${flex.between};
  ${devices.phone`${flex.start}`};
  ${devices.phone`flex-direction: column`};
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledMain>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <StyledLogo>Castle</StyledLogo>
            </CSSTransition>
          )}
        </TransitionGroup>
        <Social />
      </StyledNav>
    </StyledMain>
  )
}

export default Nav
