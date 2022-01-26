import styled, { keyframes } from 'styled-components';

function NavLinks() {
  return (
    <Nav>
      <Ul>
        <li><Link href="#home">home</Link></li>
        <li><Link href="#about">about</Link></li>
        <li><Link href="#blog">blog</Link></li>
        <li><Link href="#">roadmap</Link></li>
        <li><Link href="#community">join community</Link></li>
      </Ul>
    </Nav>
  )
}

const loading = keyframes`
  0%{
    opacity:0;
  }100%{
    opacity:1;
  }
`

const Link = styled.a`
  position:relative;
  color: ${props => `${props.theme.colors.gray}`};
  text-decoration:none;
  text-transform:uppercase;
  z-index:2;

  &:hover{
    color:${props => `${props.theme.colors.orange}`};
    transition:all .2s linear;

    &::after{
      content:"";
      position:absolute;
      bottom:-2px;
      left:0;
      width:42px;
      height:2px;
      animation:${loading} .2s 1 linear;
      background:${props => `${props.theme.colors.orange}`};
      border-radius:10px;
    }
  }
`

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;
  font-weight:600;
  display:flex;
  justify-content:space-around;
`

const Nav = styled.nav`
  width:65%;

  @media(max-width:756px){
    display:none;
  }
`

export default NavLinks;
