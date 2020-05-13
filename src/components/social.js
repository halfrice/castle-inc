import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { devices, mixins, theme } from "~styles"
import { socialMedia } from "~config"
import { Icon } from "~components/icons"

const { colors, fontSizes } = theme
const { flex } = mixins

const SocialContainer = styled.div`
  ${flex.center};
`
const SocialWrapper = styled.div`
  ${flex.center};
  margin: 0 auto;
  width: 100%;
`
const Link = styled.a`
  margin: 0.25rem;
  transition: ${theme.transition};
  &:first-of-type {
    margin-left: 0;
    ${devices.phone`margin-left: -0.25rem`};
  }
  &:last-of-type {
    margin-right: -0.25rem;
    ${devices.phone`margin-right: 0`};
  }
  svg {
    fill: ${props => (props.color ? props.color : colors.dark)};
    width: ${fontSizes.xxl};
    height: ${fontSizes.xxl};
  }
`
const IconContainer = styled.div`
  ${flex.end};
  padding: 0.25rem 0.25rem;
  &:hover,
  &:focus,
  &:active {
    opacity: 0.5;
  }
`

const Social = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <SocialContainer>
      <SocialWrapper>
        <TransitionGroup component={null}>
          {isMounted &&
            socialMedia &&
            socialMedia.map(({ color, name, url }, i) => (
              <CSSTransition key={i} classNames={`fade`} timeout={3000}>
                <Link
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  color={color}
                  aria-label={name}
                >
                  <IconContainer>
                    <Icon name={name} />
                  </IconContainer>
                </Link>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </SocialWrapper>
    </SocialContainer>
  )
}

export default Social
