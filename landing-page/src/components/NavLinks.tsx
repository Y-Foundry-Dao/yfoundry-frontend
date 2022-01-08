import React from 'react'
import styled from 'styled-components'

function NavLinks() {
  return (
    <nav>
      <Ul>
        <li><a>home</a></li>
        <li><a>about</a></li>
        <li><a>litepaper</a></li>
        <li><a>roadmap</a></li>
        <li><a>join community</a></li>
      </Ul>
    </nav>
  )
}

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;

  display:flex;
`

export default NavLinks
