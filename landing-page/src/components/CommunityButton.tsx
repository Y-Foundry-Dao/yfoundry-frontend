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
`

export default CommunityButton;
