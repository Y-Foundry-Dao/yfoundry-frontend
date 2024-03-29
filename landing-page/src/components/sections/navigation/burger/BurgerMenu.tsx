import styled from 'styled-components';

interface Props{
  open: boolean,
  setOpen: any
};

function Menu(props:Props) {
  const {open, setOpen} = props;

  return (
    <StyledMenu open={open}>
      <Ul>
        <Li onClick={() => setOpen(!open)}><Link href="#about">about</Link></Li>
        <Li onClick={() => setOpen(!open)}><Link href="#medium">medium</Link></Li>
        <Li onClick={() => setOpen(!open)}><Link href="#community">join community</Link></Li>
        <Li onClick={() => setOpen(!open)}><Link href="https://work.yfoundry.io/">bounties</Link></Li>        
        <Li onClick={() => setOpen(!open)}><Link href="https://brand.yfoundry.io/">brand kit</Link></Li>
        <Li onClick={() => setOpen(!open)}><Link href="#roadmap">progress</Link></Li>
      </Ul>
    </StyledMenu>
  );
}

const StyledMenu:any = styled.nav<Props>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => `${props.theme.colors.black}`};
  opacity: ${({open}) => open ? 1 : 0};
  z-index: ${({open}) => open ? 1 : -1};
  transition: opacity 0.35s ease-in-out;
`

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Li = styled.li`
  margin: 15px 0px 15px;
  text-align: center;
`

const Link = styled.a`
  color: ${props => `${props.theme.colors.gray}`};
  text-decoration: none;
  text-transform: uppercase;

  &:hover{
    color: ${props => `${props.theme.colors.orange}`};
    transition: .15s linear;
  }
`

export default Menu;
