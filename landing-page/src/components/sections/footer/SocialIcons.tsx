import styled from 'styled-components';
import {ReactComponent as Twitter} from '../../../assets/twitter.svg';
import {ReactComponent as Discord} from '../../../assets/discord.svg';
import {ReactComponent as Telegram} from '../../../assets/Telegram.svg';

function SocialIcons() {
  return (
    <Ul>
      <Li><Link href={"https://twitter.com/yieldfoundrydao"} target={"_blank"} rel={"noreferrer"}><StyledTwitter /></Link></Li>
      <Li><Link href={"https://discord.gg/defidesk"} target={"_blank"} rel={"noreferrer"}><StyledDiscord /></Link></Li>
      <Li><Link href={"https://t.me/yfoundrydao"} target={"_blank"} rel={"noreferrer"}><StyledTelegram /></Link></Li>
    </Ul>
  )
}

const Link = styled.a`
  display:block;
  width:100%;
  z-index:1;
`

const Ul = styled.ul`
border:1px solid white;
  list-style-type: none;
  width: 28%;
  margin: 0 2% 0 0;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
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
border:1px solid white;
  width: 20%;
  display: flex;
`

const StyledDiscord = styled(Discord)`
border:1px solid white;
  width:100%;
  height:50px;
  margin:0;
  padding:0;

  &:hover path{
    fill:#1F43BF
  }
`

const StyledTwitter = styled(Twitter)`
border:1px solid white;
  width:100%;
  height:50px;
  margin:0;
  padding:0;
  z-index:0;

  &:hover path{
    fill:#1F43BF
  }
`

const StyledTelegram = styled(Telegram)`
border:1px solid white;
  width:100%;
  height:50px;
  margin:0;
  padding:0;

  &:hover path{
    fill:#1F43BF
  }
`

export default SocialIcons;
