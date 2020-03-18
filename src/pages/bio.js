import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/MyStyledComponents'
import { PageHeader } from 'antd'
const Bio = () => {
  return <>
    <SEO title='Bio' />

    <PageHeader
      style={{ marginLeft: '2rem' }}

      title='Bio'
    />
    <Layout>

      <Container>
        Emma Stephenson is an Australian songwriter, pianist and piano teacher. She was trained at the Sydney Conservatorium of Music as a jazz pianist, and is soon to receive her PhD in practice-based research. After performing her original music with her band at the Sydney Opera House in 2017, she was awarded the Freedman Fellowship for Australian jazz musicians under the age of 35.

        While residing in New York City from July 2017 to March 2020, she recorded her second studio album, ‘I Wrote You a Song’ featuring six guest vocalists, performed live piano karaoke and request shows at some of New York’s most famous piano bars, and nurtured the talents of forty private piano students.

        Her songs are often hybrids of her various musical tastes encompassing jazz, pop, rock and folk music, featuring memorable vocal melodies, elaborate lyrics, odd time signatures, and extended improvised solos.
      </Container>

    </Layout>
  </>
}

export default Bio
