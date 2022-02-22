import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

function RoadmapTimeline() {
  return (
    <MyVerticalTimeline>
      <CompletedTimeline/>
      <MyVerticalTimelineElementRight position='right'>
        <Date>January 2022</Date>
        <Category>Seed Round Funding</Category>
        <ul>
          <li>1.5M in Funding Reached</li>
        </ul>
        <Category>Web Presence Launch</Category>
        <ul>
          <li>Website Launched</li>
        </ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>February 2022</Date>
        <Category>Development</Category>
        <ul>
          <li>Core Contract Development</li>
        </ul>
        <Category>DAO + Community Building</Category>
        <ul>
          <li>Community Discord</li>
        </ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date>March 2022</Date>
        <Category>DGSF</Category>
        <ul>
          <li>"Upsilon" DGSF Launch</li>
          <ul>
            <li>BETA</li>
          </ul>
        </ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>April 2022</Date>
        <Category >Hedge+</Category>
        <ul>
          <li>Vault Launch</li>
          <ul>
            <li>BETA</li>
          </ul>
        </ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date >May 2022</Date>
        <Category >MVP</Category>
        <ul>
          <li>Governance</li>
          <ul>
            <li>BETA</li>
          </ul>
          <li>Community Farming Events</li>
        </ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>June 2022</Date>
        <Category>Shielded Shorts</Category>
        <ul>
          <li>2nd Vault Product</li>
          <ul>
            <li>BETA</li>
          </ul>
        </ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date>July 2022</Date>
        <Category>V1 Launch</Category>
        <ul>
          <li>Simulation Engine</li>
          <li>Vault moved out of BETA</li>
        </ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>Quarter 3 2022</Date>
        <Category>Community Vaults</Category>
        <ul>
          <li>Community Vault Proposals</li>
        </ul>
      </MyVerticalTimelineElementLeft>

    </MyVerticalTimeline>
  )
}

// taken directly from the css code for the original center line
// changed the values so it is orange
// and added media queries to make it the right length
const CompletedTimeline = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  position: ;
  padding: 0 0;

  ::after{
  /* clearfix */
  content: '';
  display: table;
  clear: both;
  }

  ::before{
    content: '';
    position: absolute;
    top: 0;
    left: 17px;
    height: 22%;
    width: 5px;
    background: ${props => `${props.theme.colors.orange}`};

    @media(min-width: 343px){
      /* fixes length of line so it doesn't show past icon */
      height: 21.05%;
    }
    @media(min-width: 343px){
      /* fixes length of line so it doesn't show past icon */
      height: 21.3%;
    }
    @media(min-width: 510px){
      /* fixes length of line so it doesn't show past icon */
      height: 19.9%;
    }
    
    /* moves the orange line to the center */
    @media(min-width: 1170px){
      left: 49.80%;
    }
  }
`

const MyVerticalTimeline = styled(VerticalTimeline)`
  margin-left: 6%;
  margin-top: 4%;
  
  @media(min-width: 375px){
    margin-left: 8%;
    margin-right: 5%;
  }
  @media(min-width: 425px){
    margin-left: 10%;
    margin-right: 5%;
  }
  @media(min-width: 550px){
    margin-left: 16%;
    margin-right: 6%;
  }
  @media(min-width: 756px){
    margin-left: 25%;
  }
  @media(min-width: 1024px){
    margin-left: 30%;
  }
  @media(min-width: 1170px){
    margin-left: 0%;
    margin-right: 0;
  }

  ::before{
    width: 3px;
    background: #6D7989;
    opacity: .1;

    @media(min-width: 1170px){
      left: 50%;
    }
  }
`
const MyVerticalTimelineElementRight = styled(VerticalTimelineElement)`
  margin-left: 19px;
  margin-right: 5px;

  @media(min-width: 1170px){
    margin-left: 0;
    margin-right: 0;
  }

  & .vertical-timeline-element-content-arrow {
    border: none; 
    width: 64px; 
    height: 1px; 
    padding: 0; 
    background-color: ${props => `${props.theme.colors.orange}`};
    top: 34px !important;
    left: -54px;

    @media(min-width: 1170px){
      margin-left: 0;
      margin-right: 0;
      width: 66px !important;
    }
  }

  & .vertical-timeline-element-icon{
    background: ${props => `${props.theme.colors.blue}`};
    box-shadow: 0 0 0 14px #1f42bf63, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%);
    width: 30px;
    height: 30px;
    margin-Left: -15px;
    margin-top: 18px;
    z-index: 2;
  }

  & .vertical-timeline-element-content{
    background: none;
    box-shadow: none;
  }
`

const MyVerticalTimelineElementLeft = styled(VerticalTimelineElement)`
  margin-left: 19px;
  margin-right: 5px;

  @media(min-width: 1170px){
    margin-left: 0;
    margin-right: 0;
  }

  & .vertical-timeline-element-content-arrow {
    border: none; 
    width: 64px; 
    height: 1px; 
    padding: 0; 
    background-color: ${props => `${props.theme.colors.orange}`};;
    top: 33px !important;
    left: -54px;

    @media(min-width: 1170px){
      left: 40% !important;
      width: 318px !important;
    }
    @media(min-width: 1280px){
      left: 38% !important;
      width: 356px !important;
    }
    @media(min-width: 1390px){
      left: 36% !important;
      width: 396px !important;
    }
  }

  & .vertical-timeline-element-icon{
    background: ${props => `${props.theme.colors.blue}`};
    box-shadow: 0 0 0 14px #1f42bf63, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%);
    width: 30px;
    height: 30px;
    margin-Left: -15px;
    margin-top: 18px;
    z-index: 2;
  }

  & .vertical-timeline-element-content{
    background: none;
    box-shadow: none;
  }
`

const Date = styled.h3`
  color: ${props => `${props.theme.colors.orange}`};
  margin: 0px;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  margin-top: 8px;

  @media(min-width:1170px){
    margin-top: 0px;
  }
`

const Category = styled.h4`
  color: ${props => `${props.theme.colors.tan}`};
  margin: 0;
  font-size: 1.7rem;
  letter-spacing: 1px;
  font-weight: 500;
`

export default RoadmapTimeline