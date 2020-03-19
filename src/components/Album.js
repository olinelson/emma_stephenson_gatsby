import React from 'react'
import { Card, Collapse } from 'antd'
import Img from 'gatsby-image'
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
    grid-template-columns: repeat(5, 2rem);
    grid-gap: 1rem;

    align-items: center;
    a{
      font-size: 2rem;
      color: inherit;
    }
    a:link {
  color: inherit;
}

/* visited link */
a:visited {
  color: inherit;
}

/* mouse over link */
a:hover {
  color: inherit;
}

/* selected link */
a:active {
  color: inherit;
}
`

const IconLink = styled.a`
    display: flex;
    align-content: center;
`

function Album ({ imagePath, title, spotifyLink, appleMusicLink, amazonLink, googleLink, linkSquidLink, subtitle, description, showCollapse }) {
  return (
    <div
      style={{ width: '100%', maxWidth: '30rem'  }}

    >

      <Img
        fluid={imagePath}
        alt='Transcribr Logo'
        style={{ maxWidth: '30rem' }}
      />

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

    </div>
  )
}

export default Album
