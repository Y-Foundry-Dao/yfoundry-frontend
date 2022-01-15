import styled from 'styled-components';

interface Props{
  open:boolean,
};

function Menu(props:Props) {
  const {open} = props;

  return (
    <StyledMenu open={open}>
      <Ul>
        <Li><Link href="#">home</Link></Li>
        <Li><Link href="#">about</Link></Li>
        <Li><Link href="#">litepaper</Link></Li>
        <Li><Link href="#">roadmap</Link></Li>
        <Li><Link href="#">join community</Link></Li>
      </Ul>
    </StyledMenu>
  )
}

const StyledMenu:any = styled.nav<Props>`
  background: ${props => `${props.theme.colors.black}`};
  opacity: ${({open}) => open ? 1 : 0};
  z-index: ${({open}) => open ? 1 : -1};
  width:100vw;
  height: 100vh;
  position:fixed;
  top: 0;
  left: 0;
  transition: opacity 0.35s ease-in-out;
  display:flex;
  justify-content:center;
  align-items:center;
`


const Link = styled.a`
  color: ${props => `${props.theme.colors.gray}`};
  text-decoration:none;
  text-transform:uppercase;
  &:hover{
    color:${props => `${props.theme.colors.orange}`};
    transition:.15s linear;
  }
`

const Ul = styled.ul`
  list-style-type:none;
  margin:0;
  padding:0;
  font-weight:600;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`

const Li = styled.li`
  margin:15px 0px 15px;
  text-align:center;
`

export default Menu;
