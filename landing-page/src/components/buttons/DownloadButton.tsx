import styled from 'styled-components';
import mediumLogo from '../../assets/mediumLogo.svg'
import mediumWords from '../../assets/mediumWords.svg'

function DownloadButton() {
  return (
    <Div>
      <Button>
        <ImgLogo src={mediumLogo} alt="medium logo" />
        <ImgWords src={mediumWords} alt="medium" />
      </Button>
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

  display:flex;
  flex-wrap:nowrap;
  align-items:center;
  justify-content:center;

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

const ImgLogo = styled.img`
  width:20%;
  /* margin-bottom:3px; */
  margin-right:4px;
`

const ImgWords = styled.img`
  width:50%;
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
