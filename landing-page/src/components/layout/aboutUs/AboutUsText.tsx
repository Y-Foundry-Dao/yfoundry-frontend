import styled from 'styled-components';

function AboutUsText() {
  return (
    <Section>
      <Header>About <Orange>Us</Orange></Header>
      <P>
        Y-Foundry DAO is a decentralized framework designed to govern, manage and align incentives of
        community owned vaults with the long-term goals of any blockchain ecosystem
        (network utilization, total value locked (TVL) and user growth).
      </P>
      <br />
      <P>
        Y-Foundry DAO has been designed to do this by encouraging the crafting of bespoke strategies
        that utilize the assets and services of existing protocols in new, creative ways to generate
        sustainable yield, while keeping reliance on reward emissions to a minimum.
      </P>
    </Section>
  )
}

const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const Section = styled.section`
  display:flex;
  flex-direction:column;
  padding-top:5%;
  padding-left:6%;
  width:70%;

  @media(min-width:425px){
    width:65%;
  }
  @media(min-width:756px){
    padding-top:0%;
  }
  @media(min-width:1025px){
    width:34%;
    padding-left:9%;
  }
`

const Header = styled.h2`
  margin:3% 0;
  font-size:1.4rem;

  @media(min-width:425px){
    font-size:1.5rem;
  }
  @media(min-width:756px){
    font-size:1.6rem;
  }
  @media(min-width:1025px){
    font-size:1.8rem;
  }
`
const P = styled.p`
  line-height:24px;
  font-size:.8rem;
  text-align: justify;

  @media(min-width:425px){
    font-size:.9rem;
  }
  @media(min-width:756px){
    line-height:28px;
    font-size:1rem;
  }
  @media(min-width:1025px){
    line-height:30px
  }
  @media(min-width:1440px){
    font-size:1.3rem;
    line-height:36px
  }
`

export default AboutUsText
