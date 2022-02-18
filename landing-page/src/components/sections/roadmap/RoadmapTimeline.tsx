
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components'

function RoadmapTimeline() {
  return (
    
    <VerticalTimeline lineColor='#D8552A'>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'12%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF', }}
      >
        <Date >January 2022</Date>
        <Category >Seed Round Funding</Category>
        <ul>
          <li>1.5M in Funding Reached</li>
        </ul>
        <Category >Web Presence Launch</Category>
        <ul>
          <li>Website Launched</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none',  marginLeft:'12%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Date >February 2022</Date>
        <Category >Development</Category>
        <ul>
          <li>Core Contract Development</li>
        </ul>
        <Category >DAO + Community Building</Category>
        <ul>
          <li>Community Discord</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'12%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Date>March 2022</Date>
        <Category >DGSF</Category>
        <ul>
          <li>"Upsilon" DGSF Launch</li>
          <ul>
            <li>BETA</li>
          </ul>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'12%'  }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Date>April 2022</Date>
        <Category >Hedge+</Category>
        <ul>
          <li>Vault Launch</li>
          <ul>
            <li>BETA</li>
          </ul>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'12%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Date >May 2022</Date>
        <Category >MVP</Category>
        <ul>
          <li>Governance</li>
          <ul>
            <li>BETA</li>
          </ul>
          <li>Community Farming Events</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'12%'  }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Date>June 2022</Date>
        <Category >Shielded Shorts</Category>
        <ul>
          <li>2nd Vault Product</li>
          <ul>
            <li>BETA</li>
          </ul>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'12%' }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Date >July 2022</Date>
        <Category >V1 Launch</Category>
        <ul>
          <li>Simulation Engine</li>
          <li>Vault moved out of BETA</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none', marginLeft:'12%'   }}
        contentArrowStyle={{ borderRight: '7px solid  rgba(33, 149, 243, 0)' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <Date >Quarter 3 2022</Date>
        <Category >Community Vaults</Category>
        <ul>
          <li>Community Vault Proposals</li>
        </ul>
      </VerticalTimelineElement>

    </VerticalTimeline>
  )
}

const Date = styled.h3`
  color: ${props => `${props.theme.colors.orange}`};
  margin: 0;
  font-size:1rem;
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