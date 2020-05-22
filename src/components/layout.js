import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { Footer, Nav, Seo } from "~components"
import { Globals } from "~styles"
import { DisplayProvider } from "~contexts"

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`
const StyledDisplay = styled.div``

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              description
              title
              url
            }
          }
        }
      `}
      render={({ site }) => (
        <DisplayProvider>
          <StyledLayout id="layout">
            <Seo metadata={site.siteMetadata} />
            <Globals />
            <StyledDisplay id="display">
              <Nav />
              {children}
              <Footer />
            </StyledDisplay>
          </StyledLayout>
        </DisplayProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
