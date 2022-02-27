import styled, {keyframes} from 'styled-components';

import links from '../../../utilities/links';
import {ReactComponent as Twitter} from '../../../assets/twitter.svg';
import {ReactComponent as Discord} from '../../../assets/discord.svg';
import {ReactComponent as Telegram} from '../../../assets/Telegram.svg';

function SocialIcons() {
  return (
  <Ul>
    <Li>
      <Link href={links.twitter} target="_blank" rel="noreferrer">
        <StyledTwitter />
        <P>twitter</P>
        </Link>
    </Li>
    <Li>
      <Link href={links.discord} target="_blank" rel="noreferrer">
        <StyledDiscord />
        <P>discord</P>
      </Link>
    </Li>
    <Li>
      <Link href={links.telegram} target="_blank" rel="noreferrer">
        <StyledTelegram />
        <P>telegram</P>
      </Link>
    </Li>
  </Ul>
  )
}

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

  @media(min-width: 425px){
    font-size: 1rem;
  }
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

export default SocialIcons