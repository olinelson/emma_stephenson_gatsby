import React from 'react'
import styled from 'styled-components'
import Album from '../components/Album'
import Img from 'gatsby-image'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import { List, PageHeader } from 'antd'
import LinkSquidIcon from '../Icons/LinkSquidIcon'
import SpotifyIcon from '../Icons/SpotifyIcon'
import AppleMusicIcon from '../Icons/AppleMusicIcon'
import AmazonIcon from '../Icons/AmazonIcon'
import YoutubeIcon from '../Icons/YoutubeIcon'
import { LinkOutlined } from '@ant-design/icons'

import SEO from '../components/seo'

// import 'antd/dist/antd.css'

const PageContainer = styled.div`
  height: 100vh;
  background: rgba(0,0,0,.5);
  display: grid;
`

const IconLink = styled.a`
    display: flex;
    align-content: center;
    font-size: 2rem;
    // color: white;
`

const BlurredHeader = styled.div`
  clip-path: ellipse(90vw 25vh at 50% 0%);
  width: 100vw;
  // min-height: 50vh;
  filter: blur(.5rem);
`
const StyledListItem = styled(List.Item)`
display: grid;
grid-template-columns: 2rem 1fr;
justify-items: center;
grid-gap: 1rem;
a {
  color: inherit;
}
`

const Container = styled.div`
  top: 5vh;
  width: 100vw;
  position: absolute;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  height: 100%;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`

const BrandLink = styled.a`
  justify-self: end;
`
const BackToSite = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      iWroteYouASong: file(relativePath: { eq: "images/i-wrote-you-a-song2.jpg" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iWroteYouASongBlurred: file(relativePath: { eq: "images/i-wrote-you-a-song2.jpg" }) {
        childImageSharp {
          fluid(cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      
     
    }
  `)

  const musicLinks = [
    { service: 'linksquid', link: 'http://bit.ly/iwroteyouasong' },
    { service: 'spotify', link: 'https://open.spotify.com/album/6WXgcMmZ5zGChmGpMRQY3v?si=q_MLsiq2RT-7RDHvG-7RYw' },
    { service: 'appleMusic', link: 'https://music.apple.com/au/album/i-wrote-you-a-song/1504299136' },
    { service: 'amazon', link: 'https://music.amazon.in/albums/B086BGF6NZ?ref=dm_sh_1ae6-4c9e-dmcp-97ea-b8eeb&musicTerritory=IN&marketplaceId=A21TJRUUN4KGV' },
    { service: 'youtube', link: 'https://www.youtube.com/watch?v=w4VBIZa4gZs&list=OLAK5uy_m-nhE-Yr_m4IfSNOnr14v4HjnStgoj-qs' }
  ]

  return (
    <>
      <SEO title='I Wrote You A Song' />
      <PageContainer>
        <BlurredHeader>
          <Img
            fluid={data.iWroteYouASong.childImageSharp.fluid}
            alt='Transcribr Logo'
            style={{ maxWidth: '100vw', width: '100%', height: '100%', backgroundPosition: 'center' }}
          />
        </BlurredHeader>
        <Container>
          <Img
            fluid={data.iWroteYouASong.childImageSharp.fluid}
            alt='Transcribr Logo'
            style={{ maxWidth: 'min(25rem, 80vw)', width: '100%', height: 'auto', maxHeight: 'min(25rem, 80vw)' }}
          />
          <List
            style={{ minWidth: 'min(20rem, 80vw)' }}
            dataSource={musicLinks}

            renderItem={item => {
              switch (item.service) {
                case 'linksquid':
                  return <StyledListItem><IconLink href={item.link}><LinkSquidIcon /></IconLink> <BrandLink href={item.link}>linksquid</BrandLink></StyledListItem>

                case 'spotify':
                  return <StyledListItem><IconLink href={item.link} style={{ color: '#1DB954' }}><SpotifyIcon /></IconLink>  <BrandLink href={item.link}>Spotify</BrandLink></StyledListItem>

                case 'appleMusic':
                  return <StyledListItem><IconLink href={item.link} style={{ color: '#FF2F56' }}><AppleMusicIcon /></IconLink>  <BrandLink href={item.link}>Apple Music</BrandLink></StyledListItem>

                case 'amazon':
                  return <StyledListItem><IconLink href={item.link} style={{ color: '#4400FF' }}><AmazonIcon /></IconLink>  <BrandLink href={item.link}>Amazon</BrandLink></StyledListItem>

                case 'youtube':
                  return <StyledListItem><IconLink href={item.link} style={{ color: '#EB3223' }}><YoutubeIcon /></IconLink>  <BrandLink href={item.link}>YouTube</BrandLink></StyledListItem>

                case 'deezer':
                  return <StyledListItem>deezer</StyledListItem>

                default:
                  return <StyledListItem> <IconLink href={item.link}><AmazonIcon /></IconLink>  <a href={item.link}>amazon</a></StyledListItem>
              }
            }}
          />
        </Container>

        <BackToSite>
          <PageHeader
            title='Emma Stephenson'
            onBack={() => navigate('/')}
          />
        </BackToSite>
      </PageContainer>
    </>

  )
}
