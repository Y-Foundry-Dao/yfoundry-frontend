import styled from 'styled-components';

function DownloadButton() {
  return (
    <Div>
      <Label>Lite Paper</Label>
      <Button>Download</Button>
    </Div>

  )
}

const Button = styled.button`
  background-color:${props => `${props.theme.colors.blue}`};
  border-radius:6px;
  color: ${props => `${props.theme.colors.white}`};
  text-transform:uppercase;
  font-weight:600;
  font-size:.75rem;
  padding:7%;
  white-space:nowrap;
  margin-top:6%;
  border:none;
  width:100%;

  @media(min-width:600px){
    width:90%;
  }
  @media(min-width:1440px){
    font-size:1rem;
  }
  @media(min-width:1760px){
    font-size:1.2rem;
  }
`

const Label = styled.p`
  margin:0;
  padding:0;
  font-weight:600;
  font-size:.8rem;

  @media(min-width:756px){
    font-size:.9rem;
  }
  @media(min-width:1024px){
    font-size:1.1rem;
  }
`

const Div = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  padding-bottom:8%;
  
  @media(min-width:425px){
    width:40%;
    padding-bottom:2%;
  }
  @media(min-width:756px){
    width:35%;
  }
`

export default DownloadButton;
