import styled from 'styled-components'
import RoadmapTimeline from './RoadmapTimeline'

function Roadmap() {
  return (
    <Section>
      <Header>Our <OrangeText>Roadmap</OrangeText></Header>
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

const Header = styled.h4`
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