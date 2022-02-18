
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Roadmap() {
  return (
    
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3>Team Building</h3>
        <h4>Planning</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 >Art Director</h3>
        <h4 >San Francisco, CA</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2008 - 2010"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 >Web Designer</h3>
        <h4 >Los Angeles, CA</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 >Web Designer</h3>
        <h4 >San Francisco, CA</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <ul>
          <li>yfoundry.io website launch</li>
          <li>Technical Requirements</li>
        </ul>
      </VerticalTimelineElement>

    </VerticalTimeline>
  )
}

export default Roadmap