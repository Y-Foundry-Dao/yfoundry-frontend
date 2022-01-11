import React from 'react'
import logo from '../assets/horizontal_logo_orange&white.svg'
import styled from 'styled-components'
import ButtonSet from './ButtonSet'

const text = `A Decentralized System of Vault \n Creation, Maintenance, and Governance.`

function MainSection() {
  return (
    <Main>
      <Logo src={logo} alt={"y-foundry dao"} />
      <HeaderText>{text}</HeaderText>
      <ButtonSet />
    </Main>
  )
}

const Logo = styled.img`
  width:85%;
`

const Main = styled.main`
  width:70%;
  border:1px solid white;
`

const HeaderText = styled.h1`
  font-size:1rem;
  font-weight:400;
  line-height:26px;
`

export default MainSection
