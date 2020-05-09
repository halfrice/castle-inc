import React from "react"
import { graphql } from "gatsby"
import { Intro, Layout } from "~components"
import { Main } from "~styles"

const IndexPage = ({ data }) => (
  <Layout>
    <Main>
      <Intro data={data.intro.edges} />
    </Main>
  </Layout>
)

export default IndexPage

export const indexPageQuery = graphql`
  {
    intro: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/intro/" } }
    ) {
      edges {
        node {
          frontmatter {
            icon
            title
            title2
          }
          html
        }
      }
    }
  }
`
