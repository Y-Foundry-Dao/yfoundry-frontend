import React from 'react'
import styled from 'styled-components'

function NavLinks() {
  return (
    <Nav>
      <Ul>
        <li><Link href="#">home</Link></li>
        <li><Link href="#">about</Link></li>
        <li><Link href="#">litepaper</Link></li>
        <li><Link href="#">roadmap</Link></li>
        <li><Link href="#">join community</Link></li>
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
    color:${props => `${props.theme.colors.orange}`};
    transition:.15s linear;

    &::after{
      content:"";
      position:absolute;
      bottom:-2px;
      left:0;
      width:42px;
      height:2px;
      background:${props => `${props.theme.colors.orange}`};
      border-radius:10px;
    }
  }
`

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;
  font-weight:600;
  display:flex;
  justify-content:space-around;
`

const Nav = styled.nav`
  width:65%;
  @media(max-width:755px){
    display:none;
  }
`

export default NavLinks
