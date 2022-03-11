import styled from 'styled-components';

import MediumButton from 'components/sections/medium/MediumButton';

function Medium() {
  return (
    <Section id='medium'>
      <Div>
        <Header>Do you want to know more about YFD?</Header>
        <P>Check out our blog to stay up to date</P>
      </Div>
      <MediumButton />
    </Section>
  );
}

const Section = styled.section`
  width: 70%;
  padding: 5% 6%;
  margin-top: 8%;
  border-radius: 15px;
  gap: 10%;
  border: 1px solid ${props => `${props.theme.colors.orange}`};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(min-width: 425px){
    width: 65%;
    gap: 16%;
    margin-top: 6%;
  }
  @media(min-width: 600px){
    width: 60%;
    gap: 20%;
  }
  @media(min-width: 756px){
    width: 54%;
    margin-top: 4%;
  }
  @media(min-width: 1024px){
    width: 52%;
    padding: 4% 2%;
  }
`

const Div = styled.div`
  width: 44%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media(min-width: 375px){
    width: 42%;
  }
  @media(min-width: 475px){
    width: 40%;
  }
  @media(min-width: 520px){
    width: 38%;
  }
  @media(min-width: 580px){
    width: 36%;
  }
  @media(min-width: 756px){
    width: 32%;
  }
`

const Header = styled.h3`
  font-size: .8rem;
  line-height: 106%;
  margin: 0;
  font-weight: 600;

  @media(min-width: 375px){
    font-size: .9rem;
  }
  @media(min-width: 425px){
    font-size: 1rem;
  }
  @media(min-width: 1024px){
    font-size: 1.15rem;
  }
  @media(min-width: 1440px){
    font-size: 1.25rem;
  }
`

const P = styled.p`
  font-size: .7rem;
  margin: 0;
  text-align: left;
  color: ${props => `${props.theme.colors.gray}`};

  @media(min-width: 375px){
    font-size: .8rem;
  }
  @media(min-width: 425px){
    font-size: .9rem;
  }
  @media(min-width: 1024px){
    font-size: 1.05rem;
  }
  @media(min-width: 1024px){
    font-size: 1.15rem;
  }
`

export default Medium;
