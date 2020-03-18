import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button, Card, Collapse, PageHeader, Divider } from 'antd'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled, { withTheme } from 'styled-components'

import { Jumbotron } from '../components/MyStyledComponents'

import Album from '../components/Album'

import { CaretRightOutlined, MenuFoldOutlined } from '@ant-design/icons'
import SpotifyIcon from '../Icons/SpotifyIcon'
import AppleMusicIcon from '../Icons/AppleMusicIcon'
import AmazonIcon from '../Icons/AmazonIcon'
import GoogleIcon from '../Icons/GoogleIcon'
import LinkSquidIcon from '../Icons/LinkSquidIcon'

const { Panel } = Collapse
const { Meta } = Card

function IndexPage () {
  const data = useStaticQuery(graphql`
    query {
      iWroteYouASong: file(relativePath: { eq: "images/i-wrote-you-a-song.png" }) {
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
      trashCanDream: file(relativePath: { eq: "images/trashCanDream.jpg" }) {
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
      <SEO title='Home' />
      <div style={{ background: 'black' }}>
        <h1 style={{ zIndex: '100', position: 'absolute', top: 'min(80vw, 70vh)', fontSize: '10vw', left: '1rem' }}>Emma Stephenson</h1>
        <Img
          fluid={data.headshot.childImageSharp.fluid}
          alt='Emma Stephenson'
          // imgStyle={{ maxHeight: '100vh' }}
          style={{ margin: 'auto 15vw auto auto', maxHeight: '100vh', maxWidth: '80vh' }}
        // style={{ border: '1px solid red', background: 'black' }}
        />
      </div>

      <PageHeader
        style={{ marginLeft: '2rem' }}
        className='site-page-header'
        // onBack={() => null}
        title='Music'
        // subTitle='Emma Stephenson'
        backIcon={<MenuFoldOutlined />}
      />

      <Jumbotron>

        <Album
          imagePath={data.iWroteYouASong.childImageSharp.fluid}
          title='I Wrote You A Song'
          subtitle='Studio album comprising ten original songs written by Emma, featuring:'
          showCollapse
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
            </>
          }
        />

        <Album
          imagePath={data.whereTheRestOfTheWorldBegins.childImageSharp.fluid}
          title='Where The Rest Of The World Begins'
          subtitle='Studio album featuring Gian Slater on vocals and Hieronymus Trio (Emma Stephenson, Nick Henderson and Oli Nelson)'
          showCollapse={false}

        />
        <Album
          imagePath={data.trashCanDream.childImageSharp.fluid}
          title='Trash Can Dream'
          subtitle='Home brewed demos from husband and wife duo Emma Stephenson and Oli Nelson, recorded in our New York City Apartment in 2018 and 2019. '
          showCollapse={false}

        />
      </Jumbotron>

    </Layout>
  )
}

export default IndexPage
