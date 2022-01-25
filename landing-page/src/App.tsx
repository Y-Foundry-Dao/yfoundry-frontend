import HeaderBar from './components/layout/HeaderBar';
import MainSection from './components/layout/MainSection';
import AboutUs from './components/layout/AboutUs';
import styled from 'styled-components';
import FooterBar from './components/layout/FooterBar';
import Community from './components/layout/Community';
import Blog from './components/layout/Blog';
import BackgroundComposition from './components/background/BackgroundComposition';
import ScrollButton from './components/buttons/ScrollTopArrow';
import InvestorCarousel from './components/layout/InvestorCarousel';

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
  display:flex;
  flex-direction:column;
  align-items:center;
  max-width: 100% !important;
  overflow-x: hidden !important;
`
const Div = styled.div`
  width:78%;
  height:1px;
  background:linear-gradient(0deg, #1f43bf 60%, #A9BCFF 30%);
  margin-top:14%;
  margin-bottom:5%;
  @media(min-width:425px){
    margin-bottom:4%;
    width:80%;
  }
  @media(min-width:550px){
    margin-bottom:3%;
    width:82%;
  }
  @media(min-width:756px){
    margin-bottom:2%;
    margin-top:10%;
    width:84%;
  }
  @media(min-width:1024px){
    margin-bottom:2%;
    margin-top:8%;
    width:88%;
  }
`

export default App;
