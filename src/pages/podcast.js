import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/MyStyledComponents'
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

      <Container>
        <h1>Podcast</h1>
        <h2>Stuff You Can’t Say with Jazz Piano.</h2>

        <IconContainer>
          <a href='https://podcasts.apple.com/us/podcast/stuff-you-cant-say-with-jazz-piano/id1150947491?mt=2&app=podcast'> <ApplePodcasts /></a>
          <a href='https://soundcloud.com/stuffyoucantsay'><SoundCloud /></a>
          <a href='https://www.youtube.com/watch?v=q4r0OBDcpxg&list=PL0NMmeLRl9qp76T2Cqdz_bHnAoSsZIWne'><YoutubeIcon /></a>

        </IconContainer>
      </Container>

    </Layout>
  </>
}

export default Podcast
