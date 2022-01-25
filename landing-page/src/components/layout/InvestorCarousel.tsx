import styled, {keyframes} from 'styled-components';
import xVentures from '../../assets/0xVenturesWhite.svg';
import apollo from '../../assets/Apollo.png';
import cetaceanCapital from '../../assets/CetaceanCapital.png';
import deepVentures from '../../assets/DeepVentures.png';
import hyperion from '../../assets/HyperionLogo.png';
import lambda from '../../assets/LambdaLogo.png';
import thorstarter from '../../assets/Thorstarter.svg';
import northRock from '../../assets/NorthRockDigital.png';
// Core modules imports are same as usual

// Direct React component imports
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function InvestorCarousel() {
  return (
    <StyledSwiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
    spaceBetween={0}
    slidesPerView={4}
    navigation
    // autoplay={{delay:0, pauseOnMouseEnter:true, disableOnInteraction:false}}
    freeMode
    loop={true}
    loopPreventsSlide={true}
    speed={12000}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Logo0xVentures src={xVentures} alt={"0xVentures Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={hyperion} alt={"Hyperion Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={apollo} alt={"Apollo"} /></SwiperSlide>
      <SwiperSlide><Logo src={cetaceanCapital} alt={"Cetacean Capital Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={deepVentures} alt={"Deep Ventures logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={lambda} alt={"Lambda Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={thorstarter} alt={"Thorstarter Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={northRock} alt={"North Rock Digital Logo"} /></SwiperSlide>
    </StyledSwiper>
  )
}

const StyledSwiper = styled(Swiper)`
  padding-top: 2%;
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

const StyledSwiperSlide = styled.div`
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
  animation: ${bannerMove1} 40s linear infinite;
  @media(min-width:425px){
    animation: ${bannerMove2} 40s linear infinite;
  }
  @media(min-width:630px){
    animation: ${bannerMove3} 40s linear infinite;
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
    animation: ${bannerMove7} 45s linear infinite;
  }
  @media(min-width:1150px){
    animation: ${bannerMove8} 45s linear infinite;
  }
  @media(min-width:1300px){
    animation: ${bannerMove9} 45s linear infinite;
  }
  @media(min-width:1400px){
    animation: ${bannerMove10} 45s linear infinite;
  }
`

export default InvestorCarousel
