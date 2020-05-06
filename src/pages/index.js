import React from "react"
import styled from "styled-components"
import { Layout } from "~components"
import { Main, mixins, Section } from "~styles"

const { flex } = mixins

const StyledSection = styled(Section)`
  ${flex.start};
  width: 100%;
  min-height: 100vh;
`

const IndexPage = () => (
  <Layout>
    <Main>
      <StyledSection>
        <div>Index</div>
      </StyledSection>
    </Main>
  </Layout>
)

export default IndexPage
