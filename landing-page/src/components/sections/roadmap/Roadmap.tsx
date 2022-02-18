
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Roadmap() {
  return (
    
    <VerticalTimeline lineColor='#D8552A'>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        iconStyle={{ background: '#1F43BF', }}
      >
        <h3>Team Building</h3>
        <h4>Planning</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <h3 >Art Director</h3>
        <h4 >San Francisco, CA</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <h3 >Web Designer</h3>
        <h4 >Los Angeles, CA</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <h3 >Web Designer</h3>
        <h4 >San Francisco, CA</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <h3 >Content Marketing for Web, Mobile and Social Media</h3>
        <h4 >Online Course</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <h3 >Agile Development Scrum Master</h3>
        <h4 >Certification</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgba(33, 149, 243, 0)', boxShadow:'none' }}
        iconStyle={{ background: '#1F43BF' }}
      >
        <h3 >Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 >Bachelor Degree</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>

    </VerticalTimeline>
  )
}

export default Roadmap