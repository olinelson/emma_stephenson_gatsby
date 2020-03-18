import React from 'react'
import { Link } from 'gatsby'
import { PageHeader } from 'antd'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Jumbotron, Container } from '../components/MyStyledComponents'

const Contact = () => (
  <>
    <SEO title='Contact' />
    <Layout>
      <PageHeader
        style={{ marginLeft: '2rem' }}

        title='Blog'
      />
      <Container>
        <p>Please send all enquiries to <a href='mailto:emmagrace91@gmail.com'>emmagrace91@gmail.com</a></p>
      </Container>

    </Layout>
  </>
)

export default Contact
