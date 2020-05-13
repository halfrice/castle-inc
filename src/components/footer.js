import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Clock } from "~components"
import { devices, Main, mixins, theme } from "~styles"
import { footerLinks } from "~config"

const { fonts, fontSizes, colors } = theme
const { flex } = mixins

const FooterContainer = styled(Main)`
  ${flex.center};
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 6rem;
  ${devices.tablet`min-height: 4rem`};
  background-color: ${colors.light};
  font-family: ${fonts.monospace};
  font-size: ${fontSizes.xxs};
  ${devices.tablet`font-size: ${fontSizes.xxs};`};
  color: ${colors.dark};
  transition: ${theme.transition};
`
const FooterWrapper = styled.div`
  ${flex.between};
  ${devices.tablet`${flex.center};`};
  flex-direction: row;
  ${devices.tablet`flex-direction: column;`};
  margin: 0;
  width: 100%;
  max-width: 64rem;
  ${devices.tablet`height: auto;`};
`
const LegaleseContainer = styled.div`
  ${flex.end};
  padding: 0.125rem 0;
  width: 100%;
`
const Legalese = styled.div``
const Links = styled.div`
  ${flex.center};
  ${devices.tablet`${flex.start};`};
  width: 34%;
  ${devices.tablet`width: 100%;`}
`
const Link = styled.a`
  ${flex.center};
  ${devices.tablet`:first-of-type { margin-left: -0.125rem; }`};
  padding: 0.125rem;
  margin: 0 0.25rem;
  color: ${colors.darkPink};
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    opacity: 0.5;
  }
`
const ClockContainer = styled.div`
  ${flex.end};
  ${devices.tablet`${flex.start}`};
  padding: 0.125rem 0;
  width: 33%;
  ${devices.tablet`width: 100%;`};
  text-align: right;
  ${devices.phone`text-align: left;`};
`

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <FooterContainer>
      <FooterWrapper>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <LegaleseContainer style={{ transitionDelay: "0ms" }}>
                <Legalese>© {new Date().getFullYear()} Castle Inc.</Legalese>
              </LegaleseContainer>
            </CSSTransition>
          )}
        </TransitionGroup>

        {/* <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <Links style={{ transitionDelay: "200ms" }}>
                {footerLinks &&
                  footerLinks.map(({ name, url }, i) => (
                    <Link
                      key={i}
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={name}
                    >
                      {name}
                    </Link>
                  ))}
              </Links>
            </CSSTransition>
          )}
        </TransitionGroup> */}

        {/* <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <ClockContainer style={{ transitionDelay: "400ms" }}>
                <Clock />
              </ClockContainer>
            </CSSTransition>
          )}
        </TransitionGroup> */}
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
