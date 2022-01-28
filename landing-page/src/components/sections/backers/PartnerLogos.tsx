import styled from 'styled-components';
import xVentures from '../../../assets/0xVenturesWhite.svg';
import apollo from '../../../assets/Apollo.png';
import cetaceanCapital from '../../../assets/CetaceanCapital.png';
import deepVentures from '../../../assets/DeepVentures.png';
import hyperion from '../../../assets/HyperionLogo.png';
import lambda from '../../../assets/LambdaLogo.png';
import thorstarter from '../../../assets/Thorstarter.svg';
import northRock from '../../../assets/NorthRockDigital.png';


function PartnerLogos() {
  return (
    <Backers>
    <Header>Our <Orange>Backers</Orange></Header>
    <Section>
        <LogoHolder>
          <Logo0xVentures src={xVentures} alt={"0xVentures Logo"} />
        </LogoHolder>
        <LogoHolder>
          <Logo src={hyperion} alt={"Hyperion Logo"} />
        </LogoHolder>
        <LogoHolder>
          <Logo src={apollo} alt={"Apollo"} />
        </LogoHolder>
        <LogoHolder>
          <Logo src={cetaceanCapital} alt={"Cetacean Capital Logo"} />
        </LogoHolder>
        <LogoHolder>
          <Logo src={deepVentures} alt={"Deep Ventures logo"} />
        </LogoHolder>
        <LogoHolder>
          <Logo src={lambda} alt={"Lambda Logo"} />
        </LogoHolder>
        <LogoHolder>
          <Logo src={thorstarter} alt={"Thorstarter Logo"} />
        </LogoHolder>
        <LogoHolder>
          <Logo src={northRock} alt={"North Rock Digital Logo"} />
        </LogoHolder>
      </Section>
    </Backers>


  )
}

const Backers = styled.div`
  margin-top: 18%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align: justify;
  @media(min-width:756px) {
    margin-top: 24%;
  }
`

const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const Header = styled.h2`
  margin:0 0;
  width:92%;
  font-size:1.4rem;
  margin-bottom:2%;
  align-self:center;
  text-align: justify;

  @media(min-width:425px){
    font-size:1.5rem;
  }
  @media(min-width:756px){
    font-size:1.6rem;
    width:80%;
  }

  @media(min-width:1025px){
    font-size:1.8rem;
    width:70%;
  }
`

const Section = styled.section`
  padding: 2%;
  border: 1px ${props => `${props.theme.colors.orange}`};
  border-style: solid none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 99%;
  column-gap: 16px;
  row-gap: 6px;
`

const LogoHolder = styled.div`
  display: flex;
  align-items: center;

  @media(max-width:756px) {
    margin: 5px 0 5px;
  }
`

const Logo = styled.img`
  height:40px;

  @media(min-width:425px){
    height:45px;
  }
  @media(min-width:756px){
    height:50px;
  }
  @media(min-width:1024px){
    height:60px;
  }
`

const Logo0xVentures = styled(Logo)`
  height:60px;

  @media(min-width:425px){
    height:68px;
  }
  @media(min-width:756px){
    height:80px;
  }
  @media(min-width:1024px){
    height:90px;
  }
`

export default PartnerLogos
