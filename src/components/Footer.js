import React from 'react'
import styled from 'styled-components'

export default function Footer () {
  const FooterContainer = styled.div`
        background: rgba(189,189,189,.2);
        display: grid;
        align-items: center;
        align-content: center;
        justify-items: center;


    `

  return (
    <FooterContainer>
      {/* <p>Footer</p> */}

      {/* <p style={{ margin: '1rem' }}>footer</p> */}

    </FooterContainer>
  )
}
