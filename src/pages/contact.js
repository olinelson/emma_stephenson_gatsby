import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/MyStyledComponents'

const Contact = () => (
  <>
    <SEO title='Contact' />
    <Layout>

      <Container>
        <h1>Contact</h1>
        <p>Please send all enquiries to <a href='mailto:emmagrace91@gmail.com'>emmagrace91@gmail.com</a></p>
      </Container>

    </Layout>
  </>
)

export default Contact
