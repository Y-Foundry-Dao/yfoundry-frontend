import styled from 'styled-components';

function LitePaperButton() {
  return (
    <Button>Lite Paper</Button>
  )
}

const Button = styled.button`
  border: 2px solid ${props => `${props.theme.colors.blue}`};
  border-radius:6px;
  background:none;
  text-transform:uppercase;
  font-weight:600;
  font-size:.75rem;
  margin:2% 2%;
  padding:2% 6%;
  color:${props => `${props.theme.colors.gray}`};
  white-space:nowrap;
`

export default LitePaperButton;
