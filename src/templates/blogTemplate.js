import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/MyStyledComponents'
import Img from 'gatsby-image'
import { Divider, PageHeader } from 'antd'

function Template ({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, featureImageQuery } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Img style={{ maxHeight: '40vh' }} fluid={featureImageQuery.childImageSharp.fluid} />

      <Container style={{ marginTop: 0 }}>

        <PageHeader title={frontmatter.title} onBack={() => navigate('/blog')} subTitle={frontmatter.date} />
        {/* // <h1 style={{ margin: 0 }}>{frontmatter.title}</h1> */}

        {/* <h4>{frontmatter.date}</h4> */}
        <Divider />
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!, $featureImage: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featureImage
      }
    }

     featureImageQuery: file(relativePath: { eq: $featureImage }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }


  }
`

export default Template
