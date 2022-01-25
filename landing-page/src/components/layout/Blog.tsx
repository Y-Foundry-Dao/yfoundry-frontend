import styled from 'styled-components';
import DownloadButton from '../buttons/DownloadButton';

function LitePaper() {
  return (
    <Section id='blog'>
      <Div>
        <Header>Do you want to know more about YFD?</Header>
        <P>Check out our blog to stay up to date</P>
      </Div>
      <DownloadButton />
    </Section>
  )
}

const Section = styled.section`
  width:70%;
  border:1px solid ${props => `${props.theme.colors.orange}`};
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:5% 6%;
  margin-top:8%;
  border-radius:15px;
  gap:10%;

  @media(min-width:425px){
    width:65%;
    gap:16%;
    margin-top:6%;
  }
  @media(min-width:600px){
    width:60%;
    gap:20%;
  }
  @media(min-width:756px){
    width:54%;
    margin-top:4%;
  }
  @media(min-width:1024px){
    width:50%;
    padding:4% 2%;
  }
`

const Div = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  width:50%;

  @media(min-width:425px){
    width:43%;
  }
  @media(min-width:600px){
    width:38%;
  }
  @media(min-width:756px){
    width:32%;
  }
  @media(min-width:1024px){
    width:24%;
  }
`

const Header = styled.h3`
  font-size:1rem;
  line-height:106%;
  margin:0;
  font-weight:600;

  @media(min-width:425px){
    font-size:1.1rem;
  }
  @media(min-width:1024px){
    font-size:1.25rem;
  }
`

const P = styled.p`
  font-size:.75rem;
  margin:0;
  text-align: justify;
  color:${props => `${props.theme.colors.gray}`};

  @media(min-width:425px){
    font-size:.9rem;
  }
  @media(min-width:1024px){
    font-size:1.1rem;
  }
`

export default LitePaper
