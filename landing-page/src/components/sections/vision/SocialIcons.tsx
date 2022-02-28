import styled from 'styled-components';

import socialInfo from '../../../utilities/socialInfo';

function SocialIcons() {
  return (
    <Ul>
      {Object.values(socialInfo).map((social) => {
        return (
          <Li>
            <Link href={social.link} target="_blank" rel="noreferrer">
              {social.iconVision}
              <P>{social.text}</P>
            </Link>
          </Li>
        )})}
    </Ul>
  )
}

const Ul = styled.ul`
  list-style-type: none;
  width: 80%;
  gap: 20px;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 756px){
    margin: 0 8% 0 0;
  }
  @media(min-width: 1025px){
    margin-right: 10%;
    width: 40%;
  }
`

const Li = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  color: ${props => `${props.theme.colors.white}`};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const P = styled.p`
  text-decoration: none;
  font-size: .9rem;

  @media(min-width: 425px){
    font-size: 1rem;
  }
`

export default SocialIcons