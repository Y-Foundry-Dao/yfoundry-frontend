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
  @media(min-width:756px){
    font-size:.9rem;
    padding:1.5% 5%;
  }
  @media(min-width:1440px){
    font-size:1rem;
    padding:1.25% 5%;
  }
  @media(min-width:1760px){
    font-size:1.2rem;
  }
`

export default LitePaperButton;
