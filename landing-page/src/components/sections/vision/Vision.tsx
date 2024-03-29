import styled from 'styled-components';

import SocialIcons from 'components/sections/vision/SocialIcons';
import orangeBars from 'assets/orange_bars_community.svg';

function Community() {
  return (
    <Section id='community'>
      <Div>
        <TextSection>
          <Header>Our <OrangeText>Vision</OrangeText></Header>
          <TextParagraph>
            If you have an idea, the Y-Foundry platform and community can help make it a reality.
            <br /><br />
            <u>Launch initiatives like:</u>
            <br /><br />
            <VisionList>
              <VisionListItem>
                Automating DeFi strategies such as auto-compounding, arbitrage, or hedging
              </VisionListItem>
              <VisionListItem>
                Releasing an NFT collection
              </VisionListItem>
              <VisionListItem>
                Building a dApp
              </VisionListItem>
              <VisionListItem>
                Funding a charitable idea
              </VisionListItem>
              <VisionListItem>
                Creating grants for open-source development
              </VisionListItem>
              <VisionListItem>
                Starting an off-chain business
              </VisionListItem>
            </VisionList>
            <br /><br />
              Fund ideas and share in the success of the project. Discover and complete interesting tasks to earn reputation points.
            <br /><br />
              Work on projects funded and supported by the community with payment guaranteed by smart contracts.
          </TextParagraph>
        </TextSection>
        <OrangeBars src={orangeBars} alt="" />
      </Div>
      <SocialIcons />
    </Section>
  );
}

const Section = styled.section`
  margin-top: 10%;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  // puts the social icons to the right for desktop view
  @media(min-width: 756px){
    flex-direction: row;
    margin-bottom: 4%;
    margin-top: 8%;
  }
`

const VisionList = styled.ul`
  list-style-type: square;
  list-style-position: outside;
  display: grid;
`

const VisionListItem = styled.li`
  margin-left: 10%;
  padding-bottom: 2%;
`

const Div = styled.div`
  width: 100%;
`

const TextSection = styled.div`
  align-self: center;
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-bottom: -10%;
  margin-left: 3%;

  @media(min-width: 756px){
    margin-left: 18%;
    width: 100%;
  }
`

const Header = styled.h4`
  margin: 5% 0 0 3%;
  font-size: 1.3rem;

  @media(min-width: 425px){
    font-size: 1.5rem;
  }
  @media(min-width: 756px){
    font-size: 1.6rem;
  }
  @media(min-width: 1025px){
    font-size: 1.8rem;
  }
`

const OrangeText = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const TextParagraph = styled.p`
  margin: 5% 0 0 3%;
  width: 85%;
  font-size: .8rem;
  text-align: justify;

  @media(min-width: 425px){
    font-size: .9rem;
    width: 75%;
  }
  @media(min-width: 756px){
    font-size: 1rem;
    width: 60%;
  }
  @media(min-width: 1024px){
    font-size: 1.1rem;
    width: 55%;
  }
`

const OrangeBars = styled.img`
  width: 30%;
  margin-bottom: -7%;
  margin-top: 3%;

  @media(min-width: 756px){
    width: 42%;
  }
`


export default Community;
