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
          <CatText>1.5M in Funding Reached</CatText>
        </ul>
        <Category>Web Presence Launch</Category>
        <ul>
          <CatText>
            Website Launched
          </CatText>
        </ul>
        <ul>
          <CatText>
	          <a href="https://medium.com/@yfoundry/the-yfd-manifesto-c723a5adf888" target="_blank">The YFD Manifesto released</a>
          </CatText>
        </ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>February 2022</Date>
        <Category>Development</Category>
        <ul>
          <CatText>Core Contract Development</CatText>
        </ul>
        <Category>Community Building</Category>
        <ul>
          <CatText><a href="https://discord.gg/yfd" target="_blank">Community Discord</a></CatText>
        </ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date>March 2022</Date>
        <Category>Development</Category>
        <ul>
          <CatText>DGSF Contract</CatText>
	  <CatText><a href="https://github.com/Y-Foundry-Dao/terra-dapp-template" target="_blank">Terra dApp Creation Kit</a></CatText>
        </ul>
	<Category>Tokenomics</Category>
	<ul>
	  <CatText><a href="https://medium.com/@yfoundry/introduction-to-yfd-token-82270ca521d3" target="_blank">$YFD Tokenomics Explained</a></CatText>
	</ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>April 2022</Date>
        <Category>DGSF</Category>
        <ul>
          <CatText>Soft Launch</CatText>
        </ul>
        <Category >Hedge+</Category>
        <ul>
          <CatText>Contract Development</CatText>
        </ul>
	<Category >Games Night</Category>
	<ul>
	  <CatText><a href="https://twitter.com/YFoundryDAO/status/1510667896133160970?t=IyfQUr2mYKmmoaXu0u3K7w&s=19" target="_blank">Community Event</a></CatText>
	</ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date >May 2022</Date>
	<Category >UST / Terra Collapse</Category>
	<ul>
	  <CatText>Development Delayed</CatText>
	</ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>June 2022</Date>
        <Category >Contract Development</Category>
        <ul>
          <CatText>Vault Proposals</CatText>
        </ul>
        <ul>
          <CatText>Governance Proposals</CatText>
        </ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date >July 2022</Date>
        <Category >On-Chain Governance</Category>
        <ul>
          <CatText>Live on Terra2 Testnet</CatText>
        </ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>August 2022</Date>
        <Category >Terra 2 Testnet</Category>
        <ul>
          <CatText>On-Chain Testing</CatText>
        </ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date >September 2022</Date>
        <Category >UI / UX</Category>
        <ul>
          <CatText>UI / UX Development</CatText>
        </ul>
          <Category >Governance Token</Category>
        <ul>
          <CatText>$YFD Launch</CatText>
        </ul>
      </MyVerticalTimelineElementRight>

      <MyVerticalTimelineElementLeft position='left'>
        <Date>October 2022</Date>
        <Category>MVP Launch</Category>
        <ul>
          <CatText>Community Vault Proposals</CatText>          
        </ul>
        <ul>
          <CatText>On-chain Governance</CatText>
        </ul>
      </MyVerticalTimelineElementLeft>

      <MyVerticalTimelineElementRight position='right'>
        <Date>Quarter 4 2022</Date>
        <Category>v1.0 Launch</Category>
        <ul>
          <CatText>Expanded On-chain Proposals</CatText>
        </ul>
        <ul>
          <CatText>Community Farming Events</CatText> 
        </ul>
        <ul>
          <CatText>Learner's Journey</CatText>
        </ul>
      </MyVerticalTimelineElementRight>

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
  padding: 0 0;

  ::after{
  /* clearfix */
  content: '';
  display: table;
  clear: both;
  }

  /* the actual code that changes the center line parameters */
  ::before{
    content: '';
    border-radius:10px;
    position: absolute;
    top: 0;
    left: 17px;
    height: 45.5%;
    width: 5px;
    background: ${props => `${props.theme.colors.orange}`};

    @media(min-width: 343px){
      /* fixes length of line so it doesn't show past icon */
      height: 75.5%;
    }
    @media(min-width: 487px){
      /* fixes length of line so it doesn't show past icon */
      height: 73.5%;
    }
    @media(min-width: 640px){
      /* fixes length of line so it doesn't show past icon */
      height: 71%;
    }
    
    /* moves the orange line to the center */
    @media(min-width: 1170px){
      height: 72.5%;
      left: 49.80%;
    }
  }
`

// extended the default VerticalTimeline styles
const MyVerticalTimeline = styled(VerticalTimeline)`
  /* margins are used to create spaces on the left and right */
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

  a:link {
	color: orange;
	text-decoration: none;
  }

  a:hover {
	color: orange;
	font-weight: bold;
  }

  a:visited {
	color: brown;
  }

  /* parameters for main vertical line */
  ::before{
    width: 3px;
    background: #6D7989;
    opacity: .1;
    border-radius: 10px;

    @media(min-width: 1170px){
      left: 50%;
    }
  }
`

// any elements that will be on the right side of the line when viewed in desktop mode
const MyVerticalTimelineElementRight = styled(VerticalTimelineElement)`
  margin-left: 19px;
  margin-right: 5px;

  @media(min-width: 1170px){
    margin-left: 0;
    margin-right: 0;
  }

  /* library originally uses this class name to create an arrow */
  /* this code overwrites the styles to create the horizontal line */
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

  /* styles for the blue dots */
  & .vertical-timeline-element-icon{
    background: ${props => `${props.theme.colors.blue}`};
    box-shadow: 0 0 0 14px #1f42bf63, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%);
    width: 30px;
    height: 30px;
    margin-Left: -15px;
    margin-top: 18px;
    z-index: 2;
  }

  /* overrides styles that would originally create a box around the element */
  & .vertical-timeline-element-content{
    background: none;
    box-shadow: none;
  }
`

// extended the default VerticalTimelineElement styles
// any elements that will be on the left side of the line when viewed in desktop mode
const MyVerticalTimelineElementLeft = styled(VerticalTimelineElement)`
  margin-left: 19px;
  margin-right: 5px;

  @media(min-width: 1170px){
    margin-left: 0;
    margin-right: 0;
  }

  /* library originally uses this class name to create an arrow */
  /* this code overwrites the styles to create the horizontal line */
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

    /* styles for the blue dots */
  & .vertical-timeline-element-icon{
    background: ${props => `${props.theme.colors.blue}`};
    box-shadow: 0 0 0 14px #1f42bf63, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%);
    width: 30px;
    height: 30px;
    margin-Left: -15px;
    margin-top: 18px;
    z-index: 2;
  }

    /* overrides styles that would originally create a box around the element */
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

  /* positions horizontal line between the title and blue dot */
  @media(min-width:1170px){
    margin-top: 0px;
  }
`

const Category = styled.h4`
  color: ${props => `${props.theme.colors.tan}`};
  margin: 0;
  padding-top: 5%;
  font-size: 1.7rem;
  letter-spacing: 1px;
  font-weight: 500;
`

const CatText = styled.li`
  text-align: justified;
  padding-left: 10%;
  width: 100%;
`

export default RoadmapTimeline
