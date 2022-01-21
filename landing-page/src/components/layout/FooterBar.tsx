import styled from 'styled-components'
import SocialIcons from '../buttons/SocialIcons'
import logo from '../../assets/horizontal_logo_orange&white.svg'

function FooterBar() {
  return (
    <Footer id='community' >
      <Img src={logo} alt={"Y-Foundry Logo"} />
      <SocialIcons />
    </Footer>

  )
}

const Img = styled.img`
  width:24%;
  margin-left:8%;
  @media(min-width:425px){
    margin-left:10%;
    width:20%
  }
  @media(min-width:550px){
    margin-left:12%;
    width:16%
  }
  @media(min-width:756px){
    margin-left:14%;
    width:12%;
  }
  @media(min-width:1024px){
    width:11%;
  }
`

const Footer = styled.footer`
  display:flex;
  justify-content:space-between;
  margin-bottom:6%;
  @media(min-width:425px){
    margin-bottom:4%;
  }
  @media(min-width:550px){
    margin-bottom:2%;
  }
  @media(min-width:1024px){
    margin-bottom:1%;
  }
`

export default FooterBar
