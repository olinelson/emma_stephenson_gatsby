import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CreditText = styled.p`
  text-align: right;
  margin: 0 1rem;

`

function StyledImg (props) {
  return (
    <div>
      <Img {...props} />
      <CreditText><small>{props.creditText}</small></CreditText>
    </div>
  )
}

export default StyledImg
