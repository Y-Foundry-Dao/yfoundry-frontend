import styled from 'styled-components'
import RoadmapTimeline from 'components/sections/roadmap/RoadmapTimeline'
import roadmapBlueBars from 'assets/RoadmapBlueBars.svg';
import roadmapOrangeBars from 'assets/RoadmapOrangeBars.svg';

function Roadmap() {
  return (
    <Section id='roadmap'>
      <Header>Our <OrangeText>Roadmap</OrangeText></Header>
      <BackText>Roadmap</BackText>
      <RoadmapSection>
        <RoadmapBlueBars src={roadmapBlueBars} alt="" role="presentation" />
        <RoadmapTimeline  />
        <RoadmapOrangeBars src={roadmapOrangeBars} alt="" role="presentation" />
      </RoadmapSection>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 80px;
`

const RoadmapBlueBars = styled.img`
  width: 10%;
  margin-top: -650px;
  margin-right: 0;

  @media(max-width: 1170px){
    display: none;
  }
`
const RoadmapOrangeBars = styled.img`
  width: 10%;
  margin-top: 1450px;

  @media(max-width: 1170px){
    display: none;
  }
`

const RoadmapSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

// transparent text behind header
const BackText = styled.p`
  margin: 0;
  position: relative;
  font-size: 3.5rem;
  letter-spacing: .02em;
  font-weight: 600;
  top: -20px;
  opacity: .2;

  /* workaround to add gradient to text */
  background: linear-gradient(120deg, rgba(31, 67, 191, 0.6) 0%, rgba(196, 188, 255, 0.3) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;

  @media(min-width: 756px){
    font-size: 4.5rem;
    top: -40px
  }
`

const Header = styled.h4`
  margin: 0 0 -40px 0;
  text-align: center;
  font-size: 1.3rem;
  width: 130px;

  @media(min-width: 425px){
    width: 140px;
    font-size: 1.5rem;
  }
  @media(min-width: 756px){
    font-size: 1.6rem;
  }
  @media(min-width: 1025px){
    font-size: 1.8rem;
  }
`

const OrangeText = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

export default Roadmap
