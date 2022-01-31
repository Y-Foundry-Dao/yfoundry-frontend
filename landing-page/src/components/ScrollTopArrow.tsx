import {useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';
import styled from 'styled-components';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250){
      setVisible(true)
    } 
    else if (scrolled <= 250){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <ButtonHolder>
      <Button>
        <FaAngleUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
      </Button>
    </ButtonHolder>

  );
}

const ButtonHolder = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 40px; 
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: ${props => `${props.theme.colors.white}`};
`
  
export default ScrollButton;