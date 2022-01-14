<<<<<<< HEAD
import HeaderBar from './components/HeaderBar';
import Main from './components/MainSection';
=======
import React from 'react';
import HeaderBar from './components/layout/HeaderBar';
import MainSection from './components/layout/MainSection';
import PartnerLogos from './components/layout/PartnerLogos';
import AboutUs from './components/layout/AboutUs';
import styled from 'styled-components';
import LitePaper from './components/layout/LitePaper';
>>>>>>> added partner Logos, AboutUs, and LitePaper

function App() {
  return (
    <LandingPage>
      <HeaderBar />
      <MainSection />
      <PartnerLogos />
      <AboutUs />
      <LitePaper />
    </LandingPage>
  );
}

const LandingPage = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export default App;
