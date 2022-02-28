import styled from 'styled-components';

import HeaderBar from './components/sections/navigation/HeaderBar';
import MainSection from './components/sections/hero/HeroSection';
import InvestorCarousel from './components/sections/backers/Backers';
import AboutUs from './components/sections/aboutUs/AboutUs';
import FooterBar from './components/sections/footer/FooterBar';
import Community from './components/sections/vision/Vision';
import Blog from './components/sections/medium/Medium';
import BackgroundComposition from './components/background/BackgroundComposition';
import ScrollButton from './components/ScrollTopArrow';

function App() {
  return (
    <LandingPage>
      <BackgroundComposition/>
      <HeaderBar />
      <MainSection />
      <InvestorCarousel />
      <AboutUs />
      <Blog/>
      <Community />
      <Div />
      <FooterBar />
      <ScrollButton/>
    </LandingPage>
  );
}

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100% !important;
  overflow-x: hidden !important;
`

// Line above footer
const Div = styled.div`
  width: 78%;
  height: 1px;
  margin-top: 14%;
  margin-bottom: 5%;
  background: linear-gradient(0deg, #1f43bf 60%, #A9BCFF 30%);
  
  @media(min-width: 425px){
    margin-bottom: 4%;
    width: 80%;
  }
  @media(min-width: 550px){
    margin-bottom: 3%;
    width: 82%;
  }
  @media(min-width: 756px){
    margin-bottom: 2%;
    margin-top: 10%;
    width: 84%;
  }
  @media(min-width: 1024px){
    margin-bottom: 2%;
    margin-top: 8%;
    width: 88%;
  }
`

export default App;
