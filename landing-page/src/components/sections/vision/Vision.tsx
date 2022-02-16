import styled, {keyframes} from 'styled-components';
import {ReactComponent as Twitter} from '../../../assets/twitter.svg';
import {ReactComponent as Discord} from '../../../assets/discord.svg';
import {ReactComponent as Telegram} from '../../../assets/Telegram.svg';
import orangeBars from '../../../assets/orange_bars_community.svg';

function Community() {
  return (
    <Section id='community'>
      <Div>
        <TextSection>
          <Header>Our <OrangeText>Vision</OrangeText></Header>
          <Text>
            Y-Foundry DAO's aim is to bring about a new type of yield-enhancer that evolves beyond the need for reward-based high-inflationary yield farming,
            and rises to the current challenges plaguing yield-generating strategies and the Terra ecosystem writ large.
          </Text>
        </TextSection>
        <OrangeBars src={orangeBars} alt="" />
      </Div>
      <Ul>
        <Li><Link href={"https://twitter.com/yieldfoundrydao"} target={"_blank"} rel={"noreferrer"}><StyledTwitter /><P>twitter</P></Link></Li>
        <Li><Link href={"https://discord.gg/s7FckBHkCF"} target={"_blank"} rel={"noreferrer"}><StyledDiscord /><P>discord</P></Link></Li>
        <Li><Link href={"https://t.me/yfoundrydao"} target={"_blank"} rel={"noreferrer"}><StyledTelegram /><P>telegram</P></Link></Li>
      </Ul>
    </Section>

  )
}


const Section = styled.section`
  margin-top: 10%;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 756px){
    flex-direction: row;
    margin-bottom: 4%;
    margin-top: 8%;
  }

  justify-content:space-between;
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

const Text = styled.p`
  width: 85%;
  margin: 5% 0 0 3%;
  text-align: justify;
  font-size: .8rem;

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

const Link = styled.a`
  text-decoration: none;
  color: ${props => `${props.theme.colors.white}`};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const P = styled.p`
  text-decoration: none;
  font-size: .9rem;

  @media(min-width:425px){
    font-size: 1rem;
  }
`

const Div = styled.div`
  width: 100%;
`

const OrangeBars = styled.img`
  width: 30%;
  margin-bottom: -7%;
  margin-top: 3%;

  @media(min-width: 756px){
    width: 42%;
  }
  
`
const OrangeText = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
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

const Ul = styled.ul`
  list-style-type: none;
  width: 80%;
  gap: 20px;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 756px){
    margin: 0 8% 0 0;
  }
  @media(min-width: 1025px){
    margin-right: 10%;
    width: 40%;
  }
`

const Li = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const colorChangeBlue = keyframes`
  100%{
    fill: #1F43BF;
  }
`

const StyledDiscord = styled(Discord)`
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

const StyledTwitter = styled(Twitter)`
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

const StyledTelegram = styled(Telegram)`
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

export default Community;
