import styled from 'styled-components';

import SocialIcons from './SocialIcons';
import orangeBars from '../../../assets/orange_bars_community.svg';

function Community() {
  return (
    <Section id='community'>
      <Div>
        <TextSection>
          <Header>Our <OrangeText>Vision</OrangeText></Header>
          <TextParagraph>
            Y-Foundry DAO's aim is to bring about a new type of yield-enhancer that evolves beyond the need for reward-based high-inflationary yield farming,
            and rises to the current challenges plaguing yield-generating strategies and the Terra ecosystem writ large.
          </TextParagraph>
        </TextSection>
        <OrangeBars src={orangeBars} alt="" />
      </Div>
      <SocialIcons />
    </Section>

  )
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
  @media(min-width:1024px){
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
