import React from "react"
import styled from "styled-components"
import { devices, mixins, Section, theme } from "~styles"
import { IconLion } from "~components/icons"

const { flex } = mixins
const { colors, fontSizes } = theme

const StyledIntro = styled(Section)`
  ${flex.center};
  max-width: 64rem;
  min-height: 24rem;
`
const StyledInner = styled.div`
  width: 100%;
`
const StyledLogo = styled.div`
  svg {
    margin-left: -2.5rem;
    margin-bottom: -1rem;
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
  return (
    <StyledIntro>
      <StyledInner>
        <StyledLogo>
          <IconLion />
        </StyledLogo>
        <StyledTitle>leap with</StyledTitle>
        <StyledTitle2>CONFIDENCE</StyledTitle2>
      </StyledInner>
    </StyledIntro>
  )
}

export default Intro
