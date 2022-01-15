import styled from 'styled-components';

function CommunityButton() {
  return (
    <Button>Join Community</Button>
  )
}

const Button = styled.button`
  background-color:${props => `${props.theme.colors.blue}`};
  border-radius:6px;
  color: ${props => `${props.theme.colors.white}`};
  text-transform:uppercase;
  font-weight:600;
  font-size:.75rem;
  margin:2% 2% 2% 0;
  padding:2% 3%;
  white-space:nowrap;
  border:none;
  @media(min-width:756px){
    font-size:.9rem;
    padding:1.5% 3%;
  }
  @media(min-width:1440px){
    font-size:1rem;
    padding:1.25% 3%;
  }
  @media(min-width:1760px){
    font-size:1.2rem;
  }
`

export default CommunityButton;
