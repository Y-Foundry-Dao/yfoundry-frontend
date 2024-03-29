import styled from 'styled-components';

function AboutUsText() {
  return (
    <Section>
      <Header>About <Orange>Us</Orange></Header>
      <P>
      Y-Foundry is a platform connecting the community with creators to propose, vote, and build their ideas.
      <br /><br />
      <b>Developed by the community —
        <br />
        Owned by the community
      </b>
      <br /><br />
      Bringing an idea to market requires massive amounts of effort to coordinate developers, creators, and capital.
      <br /><br />
      Y-Foundry seeks to provide creators with the means to connect with the community and launch their projects.
      <br /><br />
      Anyone with a great idea can propose it to the Y-Foundry DAO, receive support to expand on their ideas, and find additional resources within the community.
      <br /><br />
      Y-Foundry enables creators and developers to connect, ideate, fund, and build the community-owned crypto projects of tomorrow.
    </P>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  padding-left: 6%;
  width: 70%;

  @media(min-width: 425px){
    width: 65%;
  }
  @media(min-width: 756px){
    padding-top: 0%;
  }
  @media(min-width: 1025px){
    width: 34%;
    padding-left: 9%;
  }
`

const Header = styled.h2`
  margin: 3% 0;
  font-size: 1.4rem;

  @media(min-width: 425px){
    font-size: 1.5rem;
  }
  @media(min-width: 756px){
    font-size: 1.6rem;
  }
  @media(min-width: 1025px){
    font-size: 1.8rem;
  }
`

const Orange = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

const P = styled.p`
  line-height: 24px;
  font-size: .8rem;
  text-align: justify;

  @media(min-width: 425px){
    font-size: .9rem;
  }
  @media(min-width: 756px){
    line-height: 28px;
    font-size: 1rem;
  }
  @media(min-width: 1025px){
    line-height: 30px;
  }
  @media(min-width: 1440px){
    font-size: 1.3rem;
    line-height: 36px;
  }
`

export default AboutUsText;
