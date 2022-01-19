import styled from 'styled-components';
import CommunityButton from '../buttons/CommunityButton';
import LitePaperButton from '../buttons/LitePaperButton';

function ButtonSet() {
  return (
    <Nav>
      <CommunityButton />
      <LitePaperButton />
    </Nav>
  )
}

const Nav = styled.nav`
  display:flex;
`

export default ButtonSet;
