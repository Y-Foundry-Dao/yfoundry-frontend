import styled from 'styled-components'
import SocialIcons from '../buttons/SocialIcons'
import logo from '../../assets/horizontal_logo_orange&white.svg'

function FooterBar() {
  return (
    <Footer>
      <Img src={logo} alt={"Y-Foundry Logo"} />
      <SocialIcons />
    </Footer>

  )
}

const Img = styled.img`
  width:23%;
  margin-left:8%;
`

const Footer = styled.footer`
  display:flex;
  justify-content:space-between;
  margin-bottom:10%;
`

export default FooterBar
