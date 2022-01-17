import HeaderBar from './components/layout/HeaderBar';
import MainSection from './components/layout/MainSection';
import PartnerLogos from './components/layout/PartnerLogos';
import AboutUs from './components/layout/AboutUs';
import styled from 'styled-components';
import LitePaper from './components/layout/LitePaper';
import Footer from './components/layout/Footer';

function App() {
  return (
    <LandingPage>
      <HeaderBar />
      <MainSection />
      <PartnerLogos />
      <AboutUs />
      <LitePaper />
      <Footer />
    </LandingPage>
  );
}

const LandingPage = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export default App;
