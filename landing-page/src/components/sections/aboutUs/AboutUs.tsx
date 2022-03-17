import styled from 'styled-components';

import AboutUsText from 'components/sections/aboutUs/AboutUsText';
import verticalBars from 'assets/vertical_bars.svg';
import brainDna from 'assets/brain_dna.svg';

function AboutUs() {
  return (
    <AboutUsComponent id='about'>
      <VerticalBars src={verticalBars} alt="" />
      <AboutUsText />
      <BrainDna src={brainDna} alt="" />
    </AboutUsComponent>
  );
}

const AboutUsComponent = styled.section`
  margin-top: 11%;
  padding-top: 8%;
  padding-bottom: 5%;
  width: 100%;
  position: relative;
  display: flex;
  overflow-X: hidden;
  overflow-Y: hidden;

  @media(min-width: 425px){
    margin-top: 9%;

  }
  @media(min-width: 756px){
    margin-top: 8%;

  }
  @media(min-width: 1024px){
    margin-top: 2%;
  }
`

const VerticalBars = styled.img`
  width: 10%;

  @media(min-width: 1024px){
    width: 18%;
    padding-left: 2%;
  }
  /* hides the element on small screens */
  @media(max-width: 1024px){
    display: none;
  }
`
const BrainDna = styled.img`
  width: 58%;
  position: absolute;
  right: -16%;
  top: 0%;

  @media(min-width: 425px){
    width: 56%;
    right: -15%;
  }
  @media(min-width: 755px){
    width: 50%;
    top: 0%;
    right: -12%;
  }
  @media(min-width: 1025px){
    width: 35%;
    top: 25%;
    right: 0%;
  } 
`
export default AboutUs;

