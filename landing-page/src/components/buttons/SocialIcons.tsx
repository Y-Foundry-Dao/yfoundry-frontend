import React from 'react'
import twitter from '../../assets/twitter.svg'
import discord from '../../assets/discord.svg'
import telegram from '../../assets/telegram.svg'

function SocialIcons() {
  return (
    <ul>
      <li><img src={twitter} alt={"twitter"} /></li>
      <li><img src={discord} alt={"discord"} /></li>
      <li><img src={telegram} alt={"telegram"} /></li>
    </ul>
  )
}

export default SocialIcons
