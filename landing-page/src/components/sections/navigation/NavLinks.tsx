import styled, { keyframes } from 'styled-components';
import {Link} from 'react-scroll';
require('./navigation.css');

function NavLinks() {
  return (
    <Nav>
      <ul>
        <li><Link smooth to="about" >about</Link></li>
        <li><Link smooth to="medium" >medium</Link></li>
        <li><Link smooth to="community" >join community</Link></li>
        <li><a href="https://brand.yfoundry.io/">brand kit</a></li>
        <li><Link smooth to="roadmap" >roadmap</Link></li>
      </ul>
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

export default NavLinks;
