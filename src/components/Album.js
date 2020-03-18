import React from 'react'
import { Button, Card, Collapse } from 'antd'
import Img from 'gatsby-image'
import { CaretRightOutlined } from '@ant-design/icons'
import SpotifyIcon from '../Icons/SpotifyIcon'
import AppleMusicIcon from '../Icons/AppleMusicIcon'
import AmazonIcon from '../Icons/AmazonIcon'
import GoogleIcon from '../Icons/GoogleIcon'
import LinkSquidIcon from '../Icons/LinkSquidIcon'
import styled from 'styled-components'

const { Panel } = Collapse
const { Meta } = Card

const MusicIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1.5rem);
    grid-gap: 1rem;

    align-items: center;
`

const IconLink = styled.a`
    display: flex;
    align-content: center;
`

function Album ({ imagePath, title, spotifyLink, appleMusicLink, amazonLink, googleLink, linkSquidLink, subtitle, description, showCollapse }) {
  return <Card
    style={{ width: '90vw', maxWidth: '40rem', height: 'auto', margin: '1rem 0' }}
    cover={<Img
    //   fluid={data.file.childImageSharp.fluid}
      fluid={imagePath}
      alt='Transcribr Logo'
    />}
         >

    <Meta
      title={title}
      description={
        <>
          <MusicIconContainer>
            <IconLink href={spotifyLink}><SpotifyIcon /> </IconLink>
            <IconLink href={appleMusicLink}><AppleMusicIcon /> </IconLink>
            <IconLink href={amazonLink}><AmazonIcon /> </IconLink>
            <IconLink href={googleLink}><GoogleIcon /> </IconLink>
            <IconLink href={linkSquidLink}><LinkSquidIcon /> </IconLink>
          </MusicIconContainer>

          {showCollapse
            ? <Collapse bordered={false}>
              <Panel style={{ border: 'none', margin: '.5rem 0' }} header={subtitle} key='1'>
                {description}
              </Panel>
              </Collapse>
            : subtitle}

        </>
      }
    />

  </Card>
}

export default Album
