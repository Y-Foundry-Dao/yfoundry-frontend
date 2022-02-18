
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components'

function RoadmapTimeline() {
  return (
    
    <VerticalTimeline lineColor='#D8552A'>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'4%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF', }}
      >
        <Title >Team Building</Title>
        <Category >Planning</Category>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none',  }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Title >DAO Building</Title>
        <Category >Planning - Development</Category>
        <ul>
          <li>Scenario/Market Simulator</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'4%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Title>Partner Building</Title>
        <Category >Development</Category>
        <ul>
          <li>Trigger/Scheduler</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Title >DAO Building</Title>
        <Category >Development</Category>
        <ul>
          <li>DGSF Smart Contract</li>
          <li>HedgePlus</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'4%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Title >Project GravityDrop</Title>
        <Category >MVP</Category>
        <ul>
          <li>Governance</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Title>Partner Building</Title>
        <Category >Development - MVP</Category>
        <ul>
          <li>Shielded Shorts</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'4%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Title >Project GravityDrop</Title>
        <Category >V1 Launch</Category>
        <ul>
          <li>Launch</li>
          <li>Strategy X</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none',  }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Title >Project GravityDrop</Title>
        <Category >MVP - V1 Launch</Category>
        <ul>
          <li>Community Farming Events</li>
        </ul>
      </VerticalTimelineElement>

    </VerticalTimeline>
  )
}

const Title = styled.h3`
  color: ${props => `${props.theme.colors.orange}`};
  margin: 0;
  font-size:1.1rem;
  letter-spacing:1px;
  font-weight:600;
`

const Category = styled.h4`
  color: ${props => `${props.theme.colors.tan}`};
  margin: 0;
  font-size:1.7rem;
  letter-spacing:1px;
  font-weight:500;
`

export default RoadmapTimeline