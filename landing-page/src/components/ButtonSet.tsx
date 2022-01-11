import React from 'react'
import styled from 'styled-components'
import CommunityButton from './CommunityButton'
import LitePaperButton from './LitePaperButton'

function ButtonSet() {
  return (
    <Nav>
      <CommunityButton />
      <LitePaperButton />
    </Nav>
  )
}

const Nav = styled.nav`
  /* align-self:center;
  width:100%; */
  display:flex;
  justify-content:center;
  border:1px solid white;
`

export default ButtonSet
