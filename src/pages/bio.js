import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CreditedImage from '../components/CreditedImg'
import { Container } from '../components/MyStyledComponents'

import styled from 'styled-components'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      
      emmaAtPiano1: file(relativePath: { eq: "images/emmaAtPiano1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
     
    }
  `)

  return <>
    <SEO title='Bio' />

    <Layout>

      <Container>

        <h1>Bio</h1>

        <div style={{ float: 'right' }}>
          <CreditedImage
            fluid={data.emmaAtPiano1.childImageSharp.fluid}
            alt='Emma Stephenson'
            style={{ maxWidth: '20rem', width: '50vw', maxHeight: '20rem', margin: ' 0 1rem' }}
            creditText='Little Olive Photography'
          />

        </div>

        <p>
        Emma Stephenson is an Australian songwriter, pianist and piano teacher. In 2020 she was awarded a PhD degree on the subject of improvisation and piano technique from the Sydney Conservatorium of Music (University of Sydney). After performing her original music with her band at the Sydney Opera House in 2017, she was awarded the Freedman Fellowship for Australian jazz musicians under the age of 35.

        </p>

        <p>
        While residing in New York City from July 2017 to March 2020, she recorded her second studio album, ‘I Wrote You a Song’ featuring six guest vocalists, performed live piano karaoke and request shows at some of New York’s most famous piano bars, and nurtured the talents of forty private piano students.
        </p>

        <p>
        Her songs are often hybrids of her various musical tastes encompassing jazz, pop, rock and folk music, featuring memorable vocal melodies, elaborate lyrics, odd time signatures, and extended improvised solos.
        </p>

      </Container>

    </Layout>
         </>
}

export default Bio
