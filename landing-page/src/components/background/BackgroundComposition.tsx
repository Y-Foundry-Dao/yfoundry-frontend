import styled from "styled-components";
import RadialGradientBottom from "./RadialGradientBottom";
import RadialGradientTop from "./RadialGradientTop";
import starsLarge from "assets/StarsLarge.svg";
import starsSmall from "assets/StarsSmall.svg";

export default function BackgroundComposition() {
  return(
    <Background>
      <StarsLarge src={starsLarge}/>
      <StarsSmall src={starsSmall}/>
      <RadialGradientTop />
      <RadialGradientBottom />
    </Background>
  )
}

const StarsLarge = styled.img`
  position: absolute;
  width: 100%;
  top: 100px;
  z-index: -1;

  @media(max-width: 755px){
    display: none;
  }
`

const StarsSmall = styled.img`
  position: absolute;
  width: 100%;
  top: 100px;
  z-index: -1;

  @media(min-width: 755px){
    display: none;
  }
`

const Background = styled.div`
  height: 0px;
  width: 100vw;
  overflow: hidden;
`
