import styled from 'styled-components'
import RoadmapTimeline from './RoadmapTimeline'

function Roadmap() {
  return (
    <Section>
      <Header>Our <OrangeText>Roadmap</OrangeText></Header>
      <BackText>Roadmap</BackText>
      <RoadmapTimeline />
    </Section>
  )
}

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  margin-top:80px;
`

const BackText = styled.p`
  margin: 0;
  position: relative;
  font-size:4.5rem;
  letter-spacing:.02em;
  font-weight:600;
  top:-80px;
  opacity:.2;
  background:linear-gradient(120deg,rgba(31,67,191,0.6) 0%, rgba(196,188,255,0.3) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
`

const Header = styled.h4`
  margin: 0;
  text-align:center;
  font-size:1.3rem;
  width:130px;
  @media(min-width:425px){
    width:140px;
    font-size:1.5rem;
  }
  @media(min-width:756px){
    font-size:1.6rem;
  }
  @media(min-width:1025px){
    font-size:1.8rem;
  }
`

const OrangeText = styled.span`
  color:${props => `${props.theme.colors.orange}`};
`

export default Roadmap