import styled from 'styled-components';

import 'swiper/css';
import { A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import xVentures from 'assets/0xVenturesWhite.svg';
import apollo from 'assets/Apollo.png';
import cetaceanCapital from 'assets/CetaceanCapital.png';
import deepVentures from 'assets/DeepVentures.png';
import hyperion from 'assets/HyperionLogo.png';
import lambda from 'assets/LambdaLogo.png';
import thorstarter from 'assets/Thorstarter.svg';
import northRock from 'assets/NorthRockDigital.png';

// parameters:
//  modules - swiper modules to add features
//  autoplay - allows the carousel to move on its own
//    delay - time between transitions in ms
//    pauseOnMouseEnter - autoplay pauses on mouseover
//    disableOnInteraction - when false, the carousel will restart autoplaying after user interaction
//  freeMode - lets the carousel slide freely rather than snapping
//  loop - enables continuous loop mode
//  centeredSlides - centers the active slide
//  grabCursor - shows 'grab' cursor on desktop view
//  loopFillGroupWithBlank - loop mode will fill groups with insufficient number of slides with blank slides
//  loopPreventsSlide - prevents transitions when transition already in progress
//  slidesPerView - slides visible at the same time on slider's container
//  speed - duration of the transition between slides
//  breakpoints - different styles for various screen sizes
function Carousel() {
  return (
    <StyledSwiper
      modules={[A11y, Autoplay, FreeMode]}
      autoplay={{delay:0, pauseOnMouseEnter:false, disableOnInteraction:false}}
      freeMode
      loop
      centeredSlides
      grabCursor
      loopFillGroupWithBlank
      loopPreventsSlide
      slidesPerView={2}
      speed={7200}
      breakpoints={{
        756:{
          slidesPerView:4
        }
      }}
    >
      {/* data-swiper-autoplay - sets the individual delay for the slides */}
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={hyperion} alt={"Hyperion Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={apollo} alt={"Apollo Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={deepVentures} alt={"Deep Ventures Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={cetaceanCapital} alt={"Cetacean Capital Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={lambda} alt={"Lambda Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={thorstarter} alt={"Thorstarter Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={xVentures} alt={"0xVentures Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={northRock} alt={"North Rock Digital Logo"} /></SwiperSlide>
    </StyledSwiper>
  );
}

// Styles for the carousel
const StyledSwiper = styled(Swiper)`
  padding-top: 20px;
  padding-bottom:20px;
  border: 1px ${props => `${props.theme.colors.orange}`};
  border-style: solid none;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  z-index:0;
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
  ${({ src }) => src === deepVentures && `
    padding-left:55px;
  `}
`


export default Carousel