import React from 'react'
import yLogo from '../assets/logo_orange.svg'
import styled from 'styled-components'
import NavLinks from './NavLinks'

function HeaderBar() {
  return (
    <Header>
      <Logo src={yLogo} alt={"Y logo"} />
      <NavLinks />
    </Header>
  )
}

const Logo = styled.img`
  position:relative;
  left:64px;
  top:14px;
  width:28px;
`

const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:81px;

`

export default HeaderBar
