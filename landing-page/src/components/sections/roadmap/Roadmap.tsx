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
  border:1px solid white;
  width:50%;
`

export default Roadmap