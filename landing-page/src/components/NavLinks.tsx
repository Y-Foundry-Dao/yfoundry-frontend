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

  &:hover{

  }
`

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;



  /* border:1px solid white; */
  font-family: 'Kodchasan', sans-serif;
  display:flex;
  justify-content:space-around;
`

const Li = styled.li`
  text-transform:uppercase;
`

const Nav = styled.nav`
  width:70%;
  @media(max-width:799px){
    display:none;
  }
`

export default NavLinks
