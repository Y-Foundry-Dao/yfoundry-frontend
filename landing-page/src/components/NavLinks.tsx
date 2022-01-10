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
  position:relative;
  color: rgba(255, 255, 255, 0.7);
  text-decoration:none;
  text-transform:uppercase;

  &:hover{
    color:#D8552A;
    &::after{
      content:"";
      position:absolute;
      bottom:-2px;
      left:0;
      width:42px;
      height:2px;
      background:#D8552A;
      border-radius:10px;
    }
  }
`

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;

  font-family: 'Kodchasan', sans-serif;
  font-weight:600;
  display:flex;
  justify-content:space-around;
`

const Li = styled.li`

`

const Nav = styled.nav`
  width:65%;
  @media(max-width:755px){
    display:none;
  }
`

export default NavLinks
