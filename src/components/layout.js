/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import { useStaticQuery, graphql } from 'gatsby'
import Nav from "./Nav"
import Footer from "./Footer"
import styled from "styled-components"

const ContentContainer = styled.div``

const SiteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background: ${props => props.background || "black"};
`

const Layout = ({ children, background }) => {
  return (
    <div>
      <Nav />

      <SiteContainer background={background}>
        <ContentContainer>{children}</ContentContainer>
        {/* spacer */}
        <div />
        <Footer />
      </SiteContainer>
    </div>
  )
}

export default Layout
