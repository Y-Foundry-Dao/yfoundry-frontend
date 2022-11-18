import styled from 'styled-components';

import logo from 'assets/horizontal_logo_orange&white.svg';
import blueY from 'assets/blue_logo2.svg';

const text = `Propose. Vote. Build.`;

function HeroSection() {
  return (
    <Main>
      <Section>
        <Logo src={logo} alt="y-foundry dao" />
        <HeaderText>{text}</HeaderText>
      </Section>
      <BlueY src={blueY} alt="big blue y" />
    </Main>
  );
}

const Main = styled.main`
  width: 93%;
  padding-left: 5%;
  margin-top: 13%;
  display: flex;
  justify-content: space-between;
  
  @media(min-width: 425px){
    width: 86%;
    padding-left: 9%;
  }
  @media(min-width: 756px){
    margin-top: 16%;
  }
  @media(min-width: 1024px){
    margin-top: 14%;
    padding-left: 11%;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
`

const Logo = styled.img`
  width: 61%;
  margin-bottom: 10px;

  @media(min-width: 425px){
    width: 59%;
  }
  @media(min-width: 600px){
    width: 50%;
  }
  @media(min-width: 756px){
    width: 45%;
    margin-bottom: 20px;
  }
  @media(min-width: 875px){
    width: 40%;
  }
  @media(min-width: 1024px){
    width: 35%;
  }
  @media(min-width: 1440px){
    width: 30%;
  }
  @media(min-width: 1760px){
    margin-bottom: 30px;
  }
`

const HeaderText = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
  white-space: pre-wrap;
  margin-bottom: 20px;

  @media(min-width: 600px){
    font-size: 2.1rem;
  }
  @media(min-width: 756px){
    font-size: 2.2rem;
  }
  @media(min-width: 1024px){
    font-size: 2.25rem;
  }
  @media(min-width: 1440px){
    font-size: 2.4rem;
  }
  @media(min-width: 1760px){
    font-size: 2.5rem;
    line-height: 24px;
  }
`

const BlueY = styled.img`
  position: absolute;
  top: 120px;
  right: 7%;
  width: 28%;

  @media(min-width: 1024px){
    width: 26%;
    right: 8%;
  }
  @media(max-width: 756px){
    display: none;
  }
`





export default HeroSection;
