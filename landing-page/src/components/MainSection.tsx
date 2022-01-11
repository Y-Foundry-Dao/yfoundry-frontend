import React from 'react';
import logo from '../assets/horizontal_logo_orange&white.svg';
import styled from 'styled-components';
import ButtonSet from './ButtonSet';
import blueY from '../assets/blue_logo2.svg';

const text = `A Decentralized System of Vault \nCreation, Maintenance, and Governance.`;

function MainSection() {
  return (
    <Main>
      <Section>
        <Logo src={logo} alt={"y-foundry dao"} />
        <HeaderText>{text}</HeaderText>
        <ButtonSet />
      </Section>
      <BlueY src={blueY} alt={"big blue y"} />
    </Main>
  )
}

const Section = styled.section`
  display:flex;
  flex-direction:column;
  width:90%;

  @media(min-width:756px){
    width:60%;
  }
`

const Logo = styled.img`
  width:65%;
  margin-bottom:10px;

  @media(min-width:425px){
    width:62%;
  }
  @media(min-width:756px){
    width:64%;
  }
  @media(min-width:1024px){
    width:56%;
  }
  @media(min-width:1440px){
    width:53%;
  }
  @media(min-width:1760px){
    margin-bottom:30px;
    width:50%
  }
`

const BlueY = styled.img`
  position:absolute;
  top:120px;
  right:7%;
  width:28%;  

  @media(min-width:1024px){
    width:26%;
  }
  @media(min-width:1440px){
    width:24%;
  }

  @media(max-width:756px){
    display:none;
  }
`

const Main = styled.main`
  width:90%;
  margin-left:5%;
  margin-top:12%;
  display:flex;
  justify-content:space-between;
  @media(min-width:425px){
    margin-left:12%;
  }
  @media(min-width:756px){
    margin-top:14%;
    width:85%;
  }
  @media(min-width:1024px){
    margin-top:13%;
  }
  @media(min-width:1440px){
    margin-top:11%;
  }
`

const HeaderText = styled.h1`
  font-size:1rem;
  font-weight:400;
  line-height:26px;
  white-space:pre-wrap;
  margin-bottom:20px;

  @media(min-width:756px){
    font-size:.9rem;
  }
  @media(min-width:1440px){
    font-size:1.2rem;
  }
  @media(min-width:1760px){
    font-size:1.4rem;
    line-height:24px;
  }
`

export default MainSection;
