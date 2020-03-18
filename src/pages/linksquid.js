import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Jumbotron } from '../components/MyStyledComponents'
import { PageHeader } from 'antd'
import styled from 'styled-components'

const Linksquid = () => (
  <>
    <SEO title='Linksquid' />

    <Layout>

      <Container>
        <h1>Linksquid</h1>
        <p>Linksquid is an innovative content monetization and distribution system, developed by a father-daughter collaboration between Gary and Emma Stephenson.</p>

        <a href='https://www.linksquid.com/user/Emma%20Grace%20Stephenson'>Follow Emma on Linksquid</a>
      </Container>
    </Layout>
  </>
)

export default Linksquid
