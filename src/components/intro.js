import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { devices, mixins, Section, theme } from "~styles"
import { IconLion } from "~components/icons"

const { flex } = mixins
const { colors, fontSizes } = theme

const StyledIntro = styled(Section)`
  ${flex.center};
  max-width: 64rem;
  min-height: 24rem;
`
const StyledTransition = styled(TransitionGroup)`
  width: 100%;
`
const StyledLogo = styled.div`
  svg {
    margin-left: -2.5rem;
    margin-bottom: -1.5rem;
    ${devices.desktop`margin-left: -1.5rem`};
    ${devices.tablet`margin-left: -0.75rem`};
    ${devices.phone`margin-left: 0rem`};
    width: 8rem;
    height: 8rem;
    fill: ${colors.black};
    user-select: none;
    ${mixins.shadow};
  }
`
const StyledTitle = styled.div`
  font-size: ${fontSizes.h2};
  ${devices.desktop`font-size: 2.33rem`};
  ${devices.tablet`font-size: 2.17rem`};
  ${devices.phone`font-size: ${fontSizes.h3}`};
  color: ${colors.redmoon};
`
const StyledTitle2 = styled.div`
  font-size: ${fontSizes.h1};
  ${devices.desktop`font-size: 2.884rem`};
  ${devices.tablet`font-size: 2.667rem`};
  ${devices.phone`font-size: ${fontSizes.h2}`};
  color: ${colors.grey};
`

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const logo = () => (
    <StyledLogo style={{ transitionDelay: "0ms" }}>
      <IconLion />
    </StyledLogo>
  )

  const title = () => (
    <StyledTitle style={{ transitionDelay: "200ms" }}>leap with</StyledTitle>
  )

  const title2 = () => (
    <StyledTitle2 style={{ transitionDelay: "400ms" }}>CONFIDENCE</StyledTitle2>
  )

  const items = [logo, title, title2]
  const fxOrder = ["left", "up", "up"]

  return (
    <StyledIntro>
      <StyledTransition>
        {isMounted &&
          items.map((item, i) => {
            const fx = fxOrder[i] || ""
            return (
              <CSSTransition key={i} classNames={`fade${fx}`} timeout={3000}>
                {item}
              </CSSTransition>
            )
          })}
      </StyledTransition>
    </StyledIntro>
  )
}

export default Intro
