import styled, { keyframes } from 'styled-components';
import {Link} from 'react-scroll';
require('./navigation.css');

function NavLinks() {
  return (
    <Nav>
      <Ul>
        <li><Link smooth to="about" >about</Link></li>
        <li><Link smooth to="medium" >medium</Link></li>
        <li><Link smooth to="community" >join community</Link></li>
        <li><a href="https://brand.yfoundry.io/" target="_blank">brand kit</a></li>
        <li><Link smooth to="roadmap" >roadmap</Link></li>
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 65%;

  /* hides nav bar on mobile */
  @media(max-width:756px){
    display: none;
  }
`

const Ul = styled.ul`

`

export default NavLinks;
