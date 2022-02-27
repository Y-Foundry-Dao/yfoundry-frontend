import styled, {keyframes} from 'styled-components';

import links from '../../../utilities/links';
import {ReactComponent as Twitter} from '../../../assets/twitter.svg';
import {ReactComponent as Discord} from '../../../assets/discord.svg';
import {ReactComponent as Telegram} from '../../../assets/Telegram.svg';

function SocialIcons() {
  return (
    <Ul>
      <Li><Link href={links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><StyledTwitter /></Link></Li>
      <Li><Link href={links.discord} target="_blank" rel="noreferrer" aria-label="Discord"><StyledDiscord /></Link></Li>
      <Li><Link href={links.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><StyledTelegram /></Link></Li>
    </Ul>
  )
}

const Ul = styled.ul`
  list-style-type: none;
  height:100%;
  width: 28%;
  margin: 0 5% 0 0;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  align-self:center;
  justify-content: space-around;

  @media(min-width: 425px){
    margin-right: 8%;
    width: 25%;
  }
  @media(min-width: 550px){
    margin-right: 10%;
    width: 22%
  }
  @media(min-width: 756px){
    margin-right: 12%;
    width: 18%;
  }
  @media(min-width: 1024px){
    margin-right: 14%;
    width: 16%;
  }
`

const Li = styled.li`
  width: 20%;
  display: flex;
`

const Link = styled.a`
  display: block;
  width: 100%;
  z-index: 1;
`

const colorChangeBlue = keyframes`
  100%{
    fill: #1F43BF;
  }
`

const StyledDiscord = styled(Discord)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

const StyledTwitter = styled(Twitter)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

const StyledTelegram = styled(Telegram)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;

  &:hover path{
    animation: ${colorChangeBlue} .15s linear forwards;
  }
`

export default SocialIcons;
