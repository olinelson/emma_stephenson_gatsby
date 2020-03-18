import React from 'react'
import { Link } from 'gatsby'
import { PageHeader } from 'antd'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Jumbotron, Container } from '../components/MyStyledComponents'
import ApplePodcasts from '../Icons/ApplePodcasts'
import SoundCloud from '../Icons/SoundCloud'
import YoutubeIcon from '../Icons/YoutubeIcon'
import styled from 'styled-components'

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1.5rem);
    grid-gap: 1rem;

    align-items: center;
`

function Podcast () {
  return <>
    <SEO title='Podcast' />
    <Layout>
      <PageHeader
        style={{ marginLeft: '2rem' }}

        title='Bio'
      />
      <Container>
        <h1>Podcast</h1>

        <h4>Stuff You Can’t Say with Jazz Piano.</h4>

        <IconContainer>
          <ApplePodcasts />
          <SoundCloud />
          <YoutubeIcon />
        </IconContainer>
      </Container>

    </Layout>
         </>
}

export default Podcast
