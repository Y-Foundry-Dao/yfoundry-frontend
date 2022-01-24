import styled, {keyframes} from 'styled-components';
import xVentures from '../../assets/0xVenturesWhite.svg';
import apollo from '../../assets/Apollo.png';
import cetaceanCapital from '../../assets/CetaceanCapital.png';
import deepVentures from '../../assets/DeepVentures.png';
import hyperion from '../../assets/HyperionLogo.png';
import lambda from '../../assets/LambdaLogo.png';
import thorstarter from '../../assets/Thorstarter.svg';
import northRock from '../../assets/NorthRockDigital.png';


function InvestorCarousel() {
  return (
    <Carousel>
      <LogoHolder1>
        <Logo0xVentures src={xVentures} alt={"0xVentures Logo"} />
      </LogoHolder1>

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
      
      {/* <LogoHolder>
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
      </LogoHolder> */}
    </Carousel>
  )
}

const Carousel = styled.div`
  border:1px solid white;
  padding: 2%;
  border: 1px ${props => `${props.theme.colors.orange}`};
  border-style: solid none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 18%;
  width: 3550px;
  gap:100px;
  @media(min-width:756px) {
    margin-top: 24%;
  }
`

const LogoHolder = styled.div`
  display: flex;
  align-items: center;
  /* border:1px solid white; */
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

const bannerMove = keyframes`
  0%{
    margin-left: 3800px;
  }100%{
    margin-left: -5000px;
  }
`
  
const LogoHolder1 = styled.div`
  animation: ${bannerMove} 30s linear infinite;
`

export default InvestorCarousel
