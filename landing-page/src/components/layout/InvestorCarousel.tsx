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
  width: 100%;
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

const bannerMove1 = keyframes`
  0%{
    margin-left: 2200px;
  }100%{
    margin-left: -2100px;
  }
`

const bannerMove2 = keyframes`
  0%{
    margin-left: 2350px;
  }100%{
    margin-left: -2450px;
  }
`

const bannerMove3 = keyframes`
  0%{
    margin-left: 2500px;
  }100%{
    margin-left: -2500px;
  }
`

const bannerMove4 = keyframes`
  0%{
    margin-left: 2750px;
  }100%{
    margin-left: -2800px;
  }
`

const bannerMove5 = keyframes`
  0%{
    margin-left: 2870px;
  }100%{
    margin-left: -2900px;
  }
`

const bannerMove6 = keyframes`
  0%{
    margin-left: 2950px;
  }100%{
    margin-left: -3000px;
  }
`

const bannerMove7 = keyframes`
  0%{
    margin-left: 3250px;
  }100%{
    margin-left: -3300px;
  }
`
const bannerMove8 = keyframes`
  0%{
    margin-left: 3500px;
  }100%{
    margin-left: -3450px;
  }
`
const bannerMove9 = keyframes`
  0%{
    margin-left: 3600px;
  }100%{
    margin-left: -3600px;
  }
`

const bannerMove10 = keyframes`
  0%{
    margin-left: 4000px;
  }100%{
    margin-left: -4050px;
  }
`
  
const LogoHolder1 = styled.div`
  animation: ${bannerMove1} 35s linear infinite;
  @media(min-width:425px){
    animation: ${bannerMove2} 35s linear infinite;
  }
  @media(min-width:630px){
    animation: ${bannerMove3} 35s linear infinite;
  }
  @media(min-width:756px){
    animation: ${bannerMove4} 40s linear infinite;
  }  
  @media(min-width:875px){
    animation: ${bannerMove5} 40s linear infinite;
  }
  @media(min-width:950px){
    animation: ${bannerMove6} 40s linear infinite;
  }
  @media(min-width:1024px){
    animation: ${bannerMove7} 40s linear infinite;
  }
  @media(min-width:1150px){
    animation: ${bannerMove8} 40s linear infinite;
  }
  @media(min-width:1300px){
    animation: ${bannerMove9} 40s linear infinite;
  }
  @media(min-width:1400px){
    animation: ${bannerMove10} 10s linear infinite;
  }
`

export default InvestorCarousel
