import HeaderBar from './components/layout/HeaderBar';
import MainSection from './components/layout/MainSection';
import PartnerLogos from './components/layout/PartnerLogos';
import AboutUs from './components/layout/AboutUs';
import styled from 'styled-components';
import LitePaper from './components/layout/LitePaper';
import FooterBar from './components/layout/FooterBar';

function App() {
  return (
    <LandingPage>
      <HeaderBar />
      <MainSection />
      <PartnerLogos />
      <AboutUs />
      <LitePaper />
      <Div />
      <FooterBar />
    </LandingPage>
  );
}

const LandingPage = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Div = styled.div`
  width:70%;
  height:1px;
  background:${props => `${props.theme.colors.blue}`};
  margin-top:20%;
  margin-bottom:10%;
`

export default App;
