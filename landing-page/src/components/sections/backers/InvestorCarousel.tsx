import styled from 'styled-components';
import xVentures from '../../../assets/0xVenturesWhite.svg';
import apollo from '../../../assets/Apollo.png';
import cetaceanCapital from '../../../assets/CetaceanCapital.png';
import deepVentures from '../../../assets/DeepVentures.png';
import hyperion from '../../../assets/HyperionLogo.png';
import lambda from '../../../assets/LambdaLogo.png';
import thorstarter from '../../../assets/Thorstarter.svg';
import northRock from '../../../assets/NorthRockDigital.png';
// Core modules imports are same as usual

// Direct React component imports
import { A11y, Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function InvestorCarousel() {
  return (
    <Div>
      <Header>Our <OrangeText>Backers</OrangeText></Header>
    <StyledSwiper
    slidesPerView={2}
    loop={true}
    centeredSlides={true}
    grabCursor={true}
    loopFillGroupWithBlank={true}
    className="mySwiper"
    modules={[A11y, Autoplay, FreeMode]}
    autoplay={{delay:0, pauseOnMouseEnter:false, disableOnInteraction:false}}
    freeMode
    loopPreventsSlide={true}
    speed={7200}
    breakpoints={{
      756:{
        slidesPerView:4
      }
    }}
    >
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={hyperion} alt={"Hyperion Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={apollo} alt={"Apollo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><LogoDeepVentures src={deepVentures} alt={"Deep Ventures logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={cetaceanCapital} alt={"Cetacean Capital Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={lambda} alt={"Lambda Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={thorstarter} alt={"Thorstarter Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={xVentures} alt={"0xVentures Logo"} /></SwiperSlide>
      <SwiperSlide data-swiper-autoplay="1200"><Logo src={northRock} alt={"North Rock Digital Logo"} /></SwiperSlide>
    </StyledSwiper>
    </Div>

  )
}



const Div = styled.div`
  width: 100%;
  margin-top: 18%;
  display:flex;
  flex-wrap:wrap;

  @media(min-width:756px) {
    margin-top: 24%;
  }
`

const OrangeText = styled.span`
  color:${props => `${props.theme.colors.orange}`};
`

const Header = styled.h4`
  margin:0 0 3% 3%;
  font-size:1.3rem;
  width:70%;
  padding-left:3%;

  @media(min-width:425px){
    font-size:1.5rem;
  }
  @media(min-width:756px){
    font-size:1.6rem;
    width:55%;
    margin-left:11%;
    padding-left:2%;
  }
  @media(min-width:1025px){
    font-size:1.8rem;
    width:60%;
  }
`

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
`

//Sets the padding on the Deep Ventures logo to fix its individual alignment
const LogoDeepVentures = styled(Logo)`
  padding-left:50px;
`

export default InvestorCarousel
