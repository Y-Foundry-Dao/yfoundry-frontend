import styled from 'styled-components';

import Carousel from './Carousel';

function Backers() {
  return (
    <BackersComponent>
      <Header>Our <OrangeText>Backers</OrangeText></Header>
      <Carousel />
    </BackersComponent>
  );
}

const BackersComponent = styled.section`
  width: 100%;
  margin-top: 18%;
  display: flex;
  flex-wrap: wrap;

  @media(min-width: 756px) {
    margin-top: 24%;
  }
`

const Header = styled.h2`
  margin: 0 0 3% 3%;
  font-size: 1.3rem;
  width: 70%;
  padding-left: 3%;

  @media(min-width: 425px){
    font-size: 1.5rem;
  }
  @media(min-width: 756px){
    font-size: 1.6rem;
    width: 55%;
    margin-left: 11%;
    padding-left: 2%;
  }
  @media(min-width: 1025px){
    font-size: 1.8rem;
    width: 60%;
  }
`

const OrangeText = styled.span`
  color: ${props => `${props.theme.colors.orange}`};
`

export default Backers
