import React from 'react'
import { Card, Collapse } from 'antd'
import Img from 'gatsby-image'
import SpotifyIcon from '../Icons/SpotifyIcon'
import AppleMusicIcon from '../Icons/AppleMusicIcon'
import AmazonIcon from '../Icons/AmazonIcon'
import GoogleIcon from '../Icons/GoogleIcon'
import LinkSquidIcon from '../Icons/LinkSquidIcon'
import styled from 'styled-components'
import YoutubeIcon from '../Icons/YoutubeIcon'

const { Panel } = Collapse
const { Meta } = Card

const MusicIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 2rem);
    grid-gap: 1rem;
    margin: 1rem 0;
    align-items: center;
    a{
      font-size: 2rem;
      // color: inherit;
    }

`

const IconLink = styled.a`
    display: flex;
    align-content: center;
`

function Album ({ imagePath, title, spotifyLink, appleMusicLink, amazonLink, googleLink, youtubeLink, linkSquidLink, subtitle, description, showCollapse, maxWidth }) {
  return (
    <Card
      style={{ width: '100%', maxWidth: maxWidth || '30rem', justifySelf: 'center' }}
      cover={
        <Img
          fluid={imagePath}
          alt='Transcribr Logo'
          style={{ maxWidth: '30rem' }}
        />
      }
    >

      <Meta
        title={title}
        description={
          <>
            <MusicIconContainer>
              {linkSquidLink
                ? <IconLink href={linkSquidLink}><LinkSquidIcon /> </IconLink>
                : null}

              {spotifyLink
                ? <IconLink href={spotifyLink}><SpotifyIcon /> </IconLink>
                : null}

              {appleMusicLink
                ? <IconLink href={appleMusicLink}><AppleMusicIcon /> </IconLink>
                : null}

              {amazonLink
                ? <IconLink href={amazonLink}><AmazonIcon /> </IconLink>
                : null}

              {googleLink
                ? <IconLink href={googleLink}><GoogleIcon /> </IconLink>
                : null}

              {youtubeLink
                ? <IconLink href={youtubeLink}><YoutubeIcon /> </IconLink>
                : null}

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
  )
}

export default Album
