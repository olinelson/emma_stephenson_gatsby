import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import CreditedImg from '../components/CreditedImg'

import SEO from '../components/seo'
import styled from 'styled-components'

import Album from '../components/Album'

const AlbumContainer = styled.div`
      display: grid;
      padding: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      grid-gap: 2rem;
      margin: 4rem auto;
       max-width: 80rem;
    width: 100vw;
    `

function IndexPage () {
  const data = useStaticQuery(graphql`
    query {
      iWroteYouASong: file(relativePath: { eq: "images/i-wrote-you-a-song2.jpg" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      whereTheRestOfTheWorldBegins: file(relativePath: { eq: "images/whereTheRestOfTheWorldBegins.jpg" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trashCanDreamSquare: file(relativePath: { eq: "images/trashCanDreamSquare.jpg" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headshot: file(relativePath: { eq: "images/headshot.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title='Music' />
      <div style={{ background: 'black' }}>
        <h1 style={{ zIndex: '100', position: 'absolute', top: 'min(80vw, 70vh)', fontSize: '10vw', left: '1rem' }}>Emma Stephenson</h1>
        <CreditedImg
          fluid={data.headshot.childImageSharp.fluid}
          alt='Emma Stephenson'
          creditText='Frank Crews Photography'
          // imgStyle={{ maxHeight: '100vh' }}
          style={{ margin: 'auto 15vw auto auto', maxHeight: '100vh', maxWidth: '80vh', width: '100%' }}
        />
      </div>

      <AlbumContainer>

        <Album
          imagePath={data.iWroteYouASong.childImageSharp.fluid}
          title='I Wrote You A Song'
          subtitle='Studio album comprising ten original songs written by Emma, featuring:'
          showCollapse
          bandcampLink='https://emmastephenson.bandcamp.com/album/i-wrote-you-a-song'
          linkSquidLink='http://bit.ly/iwroteyouasong'
          spotifyLink='https://open.spotify.com/album/6WXgcMmZ5zGChmGpMRQY3v?si=q_MLsiq2RT-7RDHvG-7RYw'
          appleMusicLink='https://music.apple.com/au/album/i-wrote-you-a-song/1504299136'
          amazonLink='https://music.amazon.in/albums/B086BGF6NZ?ref=dm_sh_1ae6-4c9e-dmcp-97ea-b8eeb&musicTerritory=IN&marketplaceId=A21TJRUUN4KGV'
          youtubeLink='https://www.youtube.com/watch?v=w4VBIZa4gZs&list=OLAK5uy_m-nhE-Yr_m4IfSNOnr14v4HjnStgoj-qs'

          description={
            <>
              <p>
                <b>Vocalists (in order of appearance): </b>
              </p>
              <p>

              Liam Budge, Olivia Chindamo, Kristin Berardi, Jane Irving, Liz Tobias, and Jo Lawry

              </p>

              <p>
                <b>Piano:</b> Emma Stephenson

              </p>
              <p>
                <b>Drums:</b> Oli Nelson

              </p>
              <p><b>Bass:</b> Sam Zerna</p>

              <p>Mixed by Darren Fewins and mastered by Mark Christensen @ Engine Room Audio (NYC)</p>

            </>
          }
        />

        <Album
          imagePath={data.whereTheRestOfTheWorldBegins.childImageSharp.fluid}
          title='Where The Rest Of The World Begins'
          subtitle='Studio album featuring Gian Slater on vocals and Hieronymus Trio (Emma Stephenson, Nick Henderson and Oli Nelson)'
          showCollapse={false}
          appleMusicLink='https://geo.music.apple.com/us/album/where-the-rest-of-the-world-begins-feat-gian-slater/1230208237?mt=1&app=music'
          amazonLink='https://music.amazon.com/albums/B071YMN41Y?ref=dm_sh_9d30-a56e-dmcp-11db-d25ee&musicTerritory=US&marketplaceId=ATVPDKIKX0DER'
          googleLink='https://play.google.com/store/music/album/Hieronymus_Trio_Where_the_Rest_of_the_World_begins?id=Bgdlqvb355g5enc7xkpy7dok7ki&hl=en_US'
        />
        <Album
          imagePath={data.trashCanDreamSquare.childImageSharp.fluid}
          title='Trash Can Dream'
          subtitle='Home brewed demos from husband and wife duo Emma Stephenson and Oli Nelson, recorded in our New York City Apartment in 2018 and 2019. '
          showCollapse={false}
          linkSquidLink='https://www.linksquid.com/feed/73058'
          spotifyLink='https://open.spotify.com/artist/3LDSoLpkpujvh6w0ilJTUT?si=VaL4jV3rQtCgYfi0W9oIxg'
          appleMusicLink='https://geo.music.apple.com/us/artist/trash-can-dream/1422156907?mt=1&app=music'
          amazonLink='https://music.amazon.com/artists/B07G65S2JM?ref=dm_sh_642c-82fb-dmcp-3388-a0a4a&musicTerritory=US&marketplaceId=ATVPDKIKX0DER'
          googleLink='https://play.google.com/store/music/artist/Trash_Can_Dream?id=Agbjcbipjjf3ummf5ftw6tyu5my&hl=en_US'
          youtubeLink='https://www.youtube.com/channel/UCzyml733Yndw70UzI1VWNsg'
        />

      </AlbumContainer>

    </Layout>
  )
}

export default IndexPage
