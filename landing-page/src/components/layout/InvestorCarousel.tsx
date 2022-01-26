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
import { Navigation, A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function InvestorCarousel() {
  return (
    <StyledSwiper
    slidesPerView={1}
    spaceBetween={20}
    loop={true}
    centeredSlides={true}
    grabCursor={true}
    loopFillGroupWithBlank={true}
    navigation={true}
    className="mySwiper"
    modules={[Navigation, A11y, Autoplay, FreeMode]}
    autoplay={{delay:0, pauseOnMouseEnter:true, disableOnInteraction:false}}
    freeMode
    loopPreventsSlide={true}
    speed={10000}
    breakpoints={{
      425:{
        slidesPerView:2
      },
      756:{
        slidesPerView:3
      }
    }}
    >
      
      <SwiperSlide><Logo src={hyperion} alt={"Hyperion Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={apollo} alt={"Apollo"} /></SwiperSlide>
      <SwiperSlide><Logo src={deepVentures} alt={"Deep Ventures logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={cetaceanCapital} alt={"Cetacean Capital Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={lambda} alt={"Lambda Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={thorstarter} alt={"Thorstarter Logo"} /></SwiperSlide>
      <SwiperSlide><Logo0xVentures src={xVentures} alt={"0xVentures Logo"} /></SwiperSlide>
      <SwiperSlide><Logo src={northRock} alt={"North Rock Digital Logo"} /></SwiperSlide>
    </StyledSwiper>
  )
}

const StyledSwiper = styled(Swiper)`
  padding-top: 20px;
  padding-bottom:20px;
  border: 1px ${props => `${props.theme.colors.orange}`};
  border-style: solid none;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 18%;
  width: 100%;
  gap:100px;
  @media(min-width:756px) {
    margin-top: 24%;
  }
  text-align: center;
`

const Logo = styled.img`
  height:40px;
  padding-top:0px;

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
  /* height:80px; */
  /* height:60px;
  padding-top:0px;
  border:1px solid white;
  padding-bottom:10px;

  @media(min-width:425px){
    height:68px;
  }
  @media(min-width:756px){
    height:80px;
  }
  @media(min-width:1024px){
    height:90px;
  } */
`

export default InvestorCarousel
