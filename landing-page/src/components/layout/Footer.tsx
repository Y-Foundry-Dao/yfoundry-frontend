import styled from 'styled-components'
import SocialIcons from '../buttons/SocialIcons'
import logo from '../../assets/horizontal_logo_orange&white.svg'

function Footer() {
  return (
    <div>
      <Img src={logo} alt={"Y-Foundry Logo"} />
      <SocialIcons />
    </div>
  )
}

const Img = styled.img`
  width:50px;
`

export default Footer
