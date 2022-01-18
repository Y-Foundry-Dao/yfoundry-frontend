import styled from 'styled-components'
import twitter from '../../assets/twitter.svg'
import discord from '../../assets/discord.svg'
import telegram from '../../assets/telegram.svg'

function SocialIcons() {
  return (
    <Ul>
      <Li><a href={"https://twitter.com/yieldfoundrydao"} target={"_blank"} rel={"noreferrer"}><Img src={twitter} alt={"twitter"} /></a></Li>
      <Li><a href={"https://discord.gg/TFUegrY7"} target={"_blank"} rel={"noreferrer"}><Img src={discord} alt={"discord"} /></a></Li>
      <Li><a href={"https://t.me/yfoundrydao"} target={"_blank"} rel={"noreferrer"}><Img src={telegram} alt={"telegram"} /></a></Li>
    </Ul>
  )
}

const Ul = styled.ul`
  list-style-type:none;
  width:28%;
  margin:0 2% 0 0;
  padding:0;
  font-weight:600;
  display:flex;
  align-items:center;
  justify-content:space-around;
  @media(min-width:425px){
    margin-right:8%;
    width:25%;
  }
  @media(min-width:550px){
    margin-right:10%;
    width:22%
  }
  @media(min-width:756px){
    margin-right:12%;
    width:18%;
  }
  @media(min-width:1024px){
    margin-right:14%;
    width:16%;
  }
`

const Li = styled.li`
  width:20%;
  display:flex;
`

const Img = styled.img`
  width:100%;
  margin:0;
  padding:0;
`

export default SocialIcons
