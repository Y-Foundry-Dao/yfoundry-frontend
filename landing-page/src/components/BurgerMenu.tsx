import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'

interface Props{
  open:boolean,
}

function Menu(props:Props) {
  const {open} = props

  return (
    <StyledMenu open={open}>
      <Ul>
        <Li><Link href="#">home</Link></Li>
        <Li><Link href="#">about</Link></Li>
        <Li><Link href="#">litepaper</Link></Li>
        <Li><Link href="#">roadmap</Link></Li>
        <Li><Link href="#">join community</Link></Li>
      </Ul>
    </StyledMenu>
  )
}

const StyledMenu:any = styled.nav<Props>`
  background: ${props => `${props.theme.colors.black}`};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  width:100%;
  height: 100vh;
  position:fixed;
  top: 0;
  right: 0;
  transition: transform 0.25s ease-in-out;
  display:flex;
  justify-content:center;
  align-items:center;
  display: ${({open}) => open ? 'inital' : 'none'};
`
    

const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration:none;
  text-transform:uppercase;
  
  &:hover{
    color:${props => `${props.theme.colors.orange}`};
    transition:.15s linear;
  }
`

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;
  font-weight:600;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`

const Li = styled.li`
  margin:15px 0px 15px;
  text-align:center;
`
  
export default Menu
