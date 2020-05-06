import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { Seo } from "~components"
import { Globals } from "~styles"

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`

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
        <StyledLayout id="layout">
          <Seo metadata={site.siteMetadata} />
          <Globals />
          {children}
        </StyledLayout>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
