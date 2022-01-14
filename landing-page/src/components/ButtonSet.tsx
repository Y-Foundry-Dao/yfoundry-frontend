import React from 'react';
import styled from 'styled-components';
import CommunityButton from './CommunityButton';
import LitePaperButton from './LitePaperButton';

function ButtonSet() {
  return (
    <Nav>
      <CommunityButton />
      <LitePaperButton />
    </Nav>
  )
}

const Nav = styled.nav`
  display:flex;
`

export default ButtonSet;
