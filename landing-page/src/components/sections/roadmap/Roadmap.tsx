import React from 'react'
import styled from 'styled-components'
import RoadmapTimeline from './RoadmapTimeline'

function Roadmap() {
  return (
    <Section>
      <RoadmapTimeline />
    </Section>
  )
}

const Section = styled.section`
  width:90%;
  margin-left:5%;
  @media(min-width:425px){
    margin-left:10%;
  }
  @media(min-width:550px){
    width:80%;
    margin-left:16%;
  }
  @media(min-width:756px){
    width:75%;
    margin-left:24%;
  }
  @media(min-width:1170px){
    width:70%;
    padding-left:0;
    margin-left:0;
  }
`

export default Roadmap