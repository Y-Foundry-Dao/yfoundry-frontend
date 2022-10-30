import styled from 'styled-components';

import 'swiper/css';
import { A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BackerLogoWrapper } from './BackerLogoWrapper';

import 'swiper/css';

import xVentures from 'assets/0xVenturesWhite.svg';
import apollo from 'assets/Apollo.png';
import cetaceanCapital from 'assets/CetaceanCapital.png';
import deepVentures from 'assets/DeepVentures.png';
import hyperion from 'assets/HyperionLogo.png';
import lambda from 'assets/LambdaLogo.png';
import thorstarter from 'assets/Thorstarter.svg';
import northRock from 'assets/NorthRockDigital.png';

let logos: { asset: string; altText: string; hasPadding?: boolean }[] = [
  { "asset": hyperion, "altText": 'Hyperion Logo', "hasPadding": false },
  { "asset": apollo, "altText": 'Apollo Logo', "hasPadding": false },
  { "asset": deepVentures, "altText": 'Deep Ventures Logo', "hasPadding": true },
  { "asset": cetaceanCapital, "altText": 'Cetacean Capital Logo',"hasPadding": false },
  { "asset": lambda, "altText": 'Lambda Logo', "hasPadding": false },
  { "asset": thorstarter, "altText": 'Thorstarter Logo', "hasPadding": false },
  { "asset": xVentures, "altText": '0xVentures Logo', "hasPadding": false },
  { "asset": northRock, "altText": 'North Rock Digital Logo', "hasPadding": false },
];

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
      autoplay={{
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
      }}
      freeMode
      loop
      centeredSlides
      grabCursor
      loopFillGroupWithBlank
      loopPreventsSlide
      slidesPerView={2}
      speed={7200}
      breakpoints={{
        756: {
          slidesPerView: 4,
        },
      }}
    >
      {logos.map((logo, id) => (
        // Note: data-swiper-autoplay - sets the individual delay for the slides
        <span>
            <SwiperSlide key={id} data-swiper-autoplay="1200">
              <BackerLogoWrapper key={logo.altText} asset={logo.asset} altLogoText={logo.altText} hasPadding={logo.hasPadding} />
            </SwiperSlide>
        </span>
      ))}
    </StyledSwiper>
  );
}

// Styles for the carousel
const StyledSwiper = styled(Swiper)`
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px ${(props) => `${props.theme.colors.orange}`};
  border-style: solid none;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  z-index: 0;
`;

export default Carousel;
