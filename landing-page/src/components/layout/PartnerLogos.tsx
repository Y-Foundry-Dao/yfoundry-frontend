import styled from 'styled-components';
import xVentures from '../../assets/0xVentures.svg';
import apollo from '../../assets/Apollo.png';
import cetaceanCapital from '../../assets/CetaceanCapital.png';
import deepVentures from '../../assets/DeepVentures.jpg';
import hyperion from '../../assets/HyperionLogo.png';
import lambda from '../../assets/LambdaLogo.png';
import thorstarter from '../../assets/Thorstarter.png';
import northRock from '../../assets/NorthRockDigital.png';


function PartnerLogos() {
  return (
    <Section>
      <LogoHolder>
        <Logo src={xVentures} alt={"0xVentures Logo"} />
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
        <Logo src={hyperion} alt={"Hyperion Logo"} />
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
  )
}

const Section = styled.section`
  padding:2% 0;
  border:1px ${props => `${props.theme.colors.orange}`};
  border-style: solid none;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  margin-top:18%;
  width:100%;
  column-gap:50px;
  row-gap:6px;
`

const LogoHolder = styled.div`
  max-width: 100%;
  display:flex;
  align-items:center;
  flex-shrink:0;
`

const Logo = styled.img`
  width:100%;
  height:60px;
`

export default PartnerLogos
