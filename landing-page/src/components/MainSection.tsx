import React from 'react'
import logo from '../assets/horizontal_logo_orange&white.svg'
import styled from 'styled-components'
import ButtonSet from './ButtonSet'
import blueY from '../assets/blue_logo.svg'

const text = `A Decentralized System of Vault \n Creation, Maintenance, and Governance.`

function MainSection() {
  return (
    <Main>
      <Logo src={logo} alt={"y-foundry dao"} />
      <HeaderText>{text}</HeaderText>
      <ButtonSet />
      <BlueY src={blueY} alt={"big blue y"} />
    </Main>
  )
}

const Logo = styled.img`
  width:85%;
`

const BlueY = styled.img`
float:right;
  @media(max-width:756px){
    display:none;
  }
`

const Main = styled.main`
  width:80%;
  border:1px solid white;
  margin-left:5%;
  display:flex;
  flex-direction:column;
`

const HeaderText = styled.h1`
  font-size:1rem;
  font-weight:400;
  line-height:26px;
  white-space:pre-wrap;
`

export default MainSection
