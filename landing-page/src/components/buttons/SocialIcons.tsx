import React from 'react'
import styled from 'styled-components'
import twitter from '../../assets/twitter.svg'
import discord from '../../assets/discord.svg'
import telegram from '../../assets/telegram.svg'

function SocialIcons() {
  return (
    <Ul>
      <Li><Img src={twitter} alt={"twitter"} /></Li>
      <Li><Img src={discord} alt={"discord"} /></Li>
      <Li><Img src={telegram} alt={"telegram"} /></Li>
    </Ul>
  )
}

const Ul = styled.ul`
  border:1px solid white;
  list-style-type:none;
  width:32%;
  margin:0 2% 0 0;
  padding:0;
  font-weight:600;
  display:flex;
  align-items:center;
  justify-content:space-around;
`

const Li = styled.li`
  width:20%;
  border:1px solid white;
  display:flex;
`

const Img = styled.img`
  width:100%;
  margin:0;
  padding:0;
  border:1px solid white;
`

export default SocialIcons
