import React, {
  useContext,
  useCallback,
  useEffect,
  useRef,
  useLayoutEffect,
  useState,
} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { devices, mixins, Section, theme } from "~styles"
import { Icon } from "~components/icons"
import { DisplayContext } from "~contexts"
import { throttle, useEventListener } from "~utils"

const { flex } = mixins
const { colors, fontSizes } = theme

const StyledIntro = styled(Section)`
  ${flex.center};
  max-width: 64rem;
  min-height: calc(100vh - calc(16rem));
`
const StyledTransition = styled(TransitionGroup)`
  width: 100%;
`
const StyledLogo = styled.div`
  svg {
    margin-bottom: -1.5rem;
    ${devices.tablet`margin-bottom: -1rem`};
    margin-left: -2.5rem;
    ${devices.desktop`margin-left: -2rem`};
    ${devices.tablet`margin-left: -0.75rem`};
    ${devices.phone`margin-left: 0rem`};
    width: 8rem;
    ${devices.tablet`width: 6rem`};
    height: 8rem;
    ${devices.tablet`height: 6rem`};
    fill: ${colors.black};
    user-select: none;
    ${mixins.shadow};
  }
`
const StyledTitle = styled.div`
  margin: 0 0 0.25rem -1px;
  font-size: ${fontSizes.h2};
  ${devices.desktop`font-size: 2.33rem`};
  ${devices.tablet`font-size: 2.17rem`};
  ${devices.phone`font-size: ${fontSizes.h3}`};
  color: ${colors.redmoon};
`
const StyledTitle2 = styled.div`
  margin-left: -2px;
  margin-bottom: 0.5rem;
  font-size: ${fontSizes.h1};
  ${devices.desktop`font-size: 2.884rem`};
  ${devices.tablet`font-size: 2.667rem`};
  ${devices.phone`font-size: ${fontSizes.h2}`};
  color: ${colors.grey};
`
const StyledContent = styled.p`
  font-size: ${fontSizes.md};
  ${devices.tablet`font-size: ${fontSizes.sm}`};
  ${devices.phone`font-size: ${fontSizes.xs}`};
`

const Intro = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)
  const displayContext = useContext(DisplayContext)
  const { setIntroHeight } = displayContext
  const introRef = useRef()

  const { frontmatter, html } = data[0].node

  const setIntroHeightWrapper = () => {
    if (introRef.current) {
      setIntroHeight(introRef.current.offsetHeight + introRef.current.offsetTop)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1600)
    return () => clearTimeout(timeout)
  }, [])

  useLayoutEffect(() => {
    setIntroHeightWrapper()
  })

  const handleResize = useCallback(
    throttle(() => {
      setIntroHeightWrapper()
    }, 100),
    []
  )

  useEventListener("resize", handleResize)

  const logo = () => (
    <StyledLogo style={{ transitionDelay: "0ms" }}>
      <Icon name={frontmatter.icon} />
    </StyledLogo>
  )

  const title = () => (
    <StyledTitle style={{ transitionDelay: "300ms" }}>
      {frontmatter.title}
    </StyledTitle>
  )

  const title2 = () => (
    <StyledTitle2 style={{ transitionDelay: "400ms" }}>
      {frontmatter.title2}
    </StyledTitle2>
  )

  const content = () => (
    <StyledContent
      style={{ transitionDelay: "500ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  const items = [logo, title, title2, content]
  const fxOrder = ["left", "up", "up", "up"]

  return (
    <StyledIntro ref={introRef}>
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

Intro.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Intro
