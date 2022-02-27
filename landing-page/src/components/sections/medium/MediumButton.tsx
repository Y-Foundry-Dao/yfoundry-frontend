import styled from 'styled-components';

import { medium } from '../../../utilities/socialInfo';
import mediumLogo from '../../../assets/mediumLogo.svg';
import mediumWords from '../../../assets/mediumWords.svg';

function MediumButton() {
  return (
    <ButtonContainer>
      <a href={medium} target="_blank" rel="noreferrer">
        <Button>
          <ImgLogo src={mediumLogo} alt="" />
          <ImgWords src={mediumWords} alt="medium" />
        </Button>
      </a>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  width: 50%;
  padding-bottom: 8%;
  display: flex;
  flex-direction: column;
  
  @media(min-width: 425px){
    width: 40%;
    padding-bottom: 2%;
  }
  @media(min-width: 756px){
    width: 35%;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 7%;
  margin-top: 6%;
  border-radius: 6px;
  font-weight: 600;
  font-size: .75rem;
  border: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.theme.colors.blue}`};
  color: ${props => `${props.theme.colors.white}`};
  cursor: pointer;

  @media(min-width: 600px){
    width: 90%;
  }
  @media(min-width: 1440px){
    font-size: 1rem;
  }
  @media(min-width: 1760px){
    font-size: 1.2rem;
  }
`

const ImgLogo = styled.img`
  width: 20%;
  margin-right: 4px;
`

const ImgWords = styled.img`
  width: 50%;
`

export default MediumButton;
