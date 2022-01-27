import logo from '../../assets/horizontal_logo_orange&white.svg';
import styled from 'styled-components';
import blueY from '../../assets/blue_logo2.svg';
import moon from "../../assets/moon.svg"
import planet from "../../assets/planet.svg"

const text = `A Decentralized System of Vault \nCreation, Maintenance and Governance.`;

function MainSection() {
  return (
    <Main>
      <Moon src={moon}/>
      <Planet src={planet}/>
      <Section>
        <Logo src={logo} alt={"y-foundry dao"} />
        <HeaderText>{text}</HeaderText>
      </Section>
      <BlueY src={blueY} alt={"big blue y"} />
    </Main>
  )
}

const Moon = styled.img`
  position:absolute;
  top:-70px;
  left:42%;

  @media(min-width:756px){
    top:-70px;
    left:42%;
  }
  @media(min-width:875px){
    top:-70px;
    left:39%;
  }
  @media(min-width:1024px){
    top:-65px;
    left:38%;
  }
  @media(min-width:1440px){
  }

  @media(max-width:756px){
    display:none;
  }
`
const Planet = styled.img`
  position:absolute;
  top:-110px;
  right:2%;

  @media(min-width:900px){
    top:-120px;
  }
  @media(min-width:1024px){
    top:-130px;
    right:4%;
  }
  @media(min-width:1200px){
    top:-150px;
    /* right:6%; */
  }
  @media(min-width:1440px){
    top:-170px;
    /* right:6%; */
  }
  @media(max-width:756px){
    display:none;
  }
`

const Section = styled.section`
  display:flex;
  flex-direction:column;
  width:90%;
`

const Logo = styled.img`
  width:61%;
  margin-bottom:10px;

  @media(min-width:425px){
    width:59%;
  }
  @media(min-width:600px){
    width:50%;
  }
  @media(min-width:756px){
    width:46%;
    margin-bottom:20px;
  }
  @media(min-width:875px){
    width:42%;
  }
  @media(min-width:1024px){
    width:38%;
  }
  @media(min-width:1440px){
    width:36%;
  }
  @media(min-width:1760px){
    margin-bottom:30px;
  }
`

const BlueY = styled.img`
  position:absolute;
  top:-100px;
  right:4%;
  width:26%;

  @media(min-width:900px){
    top:-110px;
  }
  @media(min-width:1024px){
    width:25%;
    top:-120px;
    right:6%;
  }
  @media(min-width:1200px){
    top:-150px;
    right:6%;
  }
  @media(min-width:1440px){
    width:26%;
    top:-180px;
    right:6%;
  }
  @media(max-width:756px){
    display:none;
  }
`

const Main = styled.main`
  position:relative;
  width:93%;
  padding-left:5%;
  margin-top:13%;
  display:flex;
  justify-content:space-between;
  @media(min-width:425px){
    width:86%;
    padding-left:9%;
  }
  @media(min-width:756px){
    margin-top:16%;
  }
  @media(min-width:1024px){
    margin-top:14%;
    padding-left:11%;
  }
  @media(min-width:1440px){
    /* margin-top:12%; */
  }
`

const HeaderText = styled.h1`
  font-size:1rem;
  font-weight:400;
  line-height:24px;
  text-align: justify;
  white-space:pre-wrap;
  margin-bottom:20px;
  @media(min-width:600px){
    font-size:1.1rem;
  }
  @media(min-width:756px){
    font-size:1.2rem;
  }
  @media(min-width:1024px){
    font-size:1.25em;
  }
  @media(min-width:1440px){
    font-size:1.4rem;
  }
  @media(min-width:1760px){
    font-size:1.5rem;
    line-height:24px;
  }
`

export default MainSection;
