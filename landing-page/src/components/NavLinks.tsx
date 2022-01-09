import React from 'react'
import styled from 'styled-components'

function NavLinks() {
  return (
    <Nav>
      <Ul>
        <li><a>home</a></li>
        <li><a>about</a></li>
        <li><a>litepaper</a></li>
        <li><a>roadmap</a></li>
        <li><a>join community</a></li>
      </Ul>
    </Nav>
  )
}

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;

  color: rgba(255, 255, 255, 0.7);

  display:flex;
`

const Nav = styled.nav`
  @media(max-width:799px){
    display:none;
  }
`

export default NavLinks
