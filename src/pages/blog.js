import React from 'react'
import { Link, useStaticQuery, graphql, navigate } from 'gatsby'
import { List, Avatar, Tag, PageHeader } from 'antd'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Jumbotron, Container } from '../components/MyStyledComponents'

const Blog = () => {
  const data = useStaticQuery(graphql`query {
  posts: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      id
      frontmatter {
        title
        date
        preview
        path
      }
    }
  }
}`)

  console.log(data.posts)

  return <>
    <SEO title='Blog' />

    <Layout>

      <Container>
        <h1>Blog</h1>
        <List
          itemLayout='horizontal'
          dataSource={data.posts.nodes}
          renderItem={item => (
            <List.Item onClick={() => navigate(item.frontmatter.path)}>
              <List.Item.Meta
                avatar={<Tag color='default'>{item.frontmatter.date}</Tag>}
                title={<Link to={item.frontmatter.path}>{item.frontmatter.title}</Link>}

                description={item.frontmatter.preview}
              />
            </List.Item>
          )}
        />
      </Container>

    </Layout>
         </>
}

export default Blog
