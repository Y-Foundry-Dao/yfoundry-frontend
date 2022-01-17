import AboutUsText from './AboutUsText';
import verticalBars from '../../assets/vertical_bars.svg';
import brainDna from '../../assets/brain_dna.svg';
import styled from 'styled-components';

function AboutUs() {
  return (
    <Div>
      <VerticalBars src={verticalBars} alt={""} />
      <AboutUsText />
      <BrainDna src={brainDna} alt={""} />
    </Div>
  )
}

const Div = styled.div`
  position:relative;
  display:flex;
  margin-top:10%;
  padding-top:8%;
  padding-bottom:5%;
  width:100%;
  overflow-X:hidden;
  overflow-Y:hidden;
`

const VerticalBars = styled.img`
  width:10%;

  @media(min-width:1024px){
    width:18%;
    padding-left:2%
  }
  @media(max-width:1024px){
    display:none;
  }
`
const BrainDna = styled.img`
  width:58%;
  position:absolute;
  right:-16%;
  top:0%;

  @media(min-width:425px){
    width:56%;
    right:-15%;
  }
  @media(min-width:755px){
    width:50%;
    top:0%;
    right:-12%;
  }
  @media(min-width:1025px){
    width:35%;
    top:25%;
    right:0%;
  } 
`
export default AboutUs
