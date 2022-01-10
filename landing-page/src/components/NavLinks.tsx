import React from 'react'
import styled from 'styled-components'

function NavLinks() {
  return (
    <Nav>
      <Ul>
        <Li><Link href="javascript:;">home</Link></Li>
        <Li><Link href="javascript:;">about</Link></Li>
        <Li><Link href="javascript:;">litepaper</Link></Li>
        <Li><Link href="javascript:;">roadmap</Link></Li>
        <Li><Link href="javascript:;">join community</Link></Li>
      </Ul>
    </Nav>
  )
}

const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration:none;
  text-transform:uppercase;
  &:hover{
    color:#D8552A;
    text-decoration:underline;
  }
`

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;

  font-family: 'Kodchasan', sans-serif;
  display:flex;
  justify-content:space-around;
`

const Li = styled.li`

`

const Nav = styled.nav`
  width:65%;
  @media(max-width:799px){
    display:none;
  }
`

export default NavLinks
