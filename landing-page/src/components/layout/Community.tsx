import styled from 'styled-components';
import twitter from '../../assets/twitter.svg';
import discord from '../../assets/discord.svg';
import telegram from '../../assets/whiteTelegram.png';
import orangeBars from '../../assets/orange_bars_community.svg';

function Community() {
  return (
    <Section id='community'>
      <Div>
        <TextSection>
          <Header>Our <OrangeText>Community</OrangeText></Header>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam facilis pariatur doloribus maiores saepe ex earum.</Text>
        </TextSection>
        <OrangeBars src={orangeBars} alt="" />
      </Div>
      <Ul>
        <Li><Link href={"https://twitter.com/yieldfoundrydao"} target={"_blank"} rel={"noreferrer"}><Img src={twitter} alt={"twitter"} /><P>twitter</P></Link></Li>
        <Li><Link href={"https://discord.gg/defidesk"} target={"_blank"} rel={"noreferrer"}><Img src={discord} alt={"discord"} /><P>discord</P></Link></Li>
        <Li><Link href={"https://t.me/yfoundrydao"} target={"_blank"} rel={"noreferrer"}><Img src={telegram} alt={"telegram"} /><P>telegram</P></Link></Li>
      </Ul>
    </Section>

  )
}


const Section = styled.section`
  margin-top:10%;
  margin-bottom:4%;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width:756px){
    flex-direction:row;
    margin-bottom:4%;
    margin-top:8%;
  }

  justify-content:space-between;
  width:100%;
`

const TextSection = styled.div`
  align-self:center;
  width:75%;
  display:flex;
  flex-direction:column;
  margin-bottom:-10%;
  margin-left:3%;

  @media(min-width:756px){
    margin-left:18%;
    width:100%;
  }
`

const Text = styled.p`
  width:85%;
  margin:5% 0 0 3%;
  font-size:.8rem;

  @media(min-width:425px){
    font-size:.9rem;
    width:75%;
  }
  @media(min-width:756px){
    font-size:1rem;
    width:60%;
  }
  @media(min-width:1024px){
    font-size:1.1rem;
    width:55%;
  }
`

const Link = styled.a`
  text-decoration:none;
  color:${props => `${props.theme.colors.white}`};
  display:flex;
  flex-direction:column;
  align-items:center;
`

const P = styled.p`
  text-decoration:none;
  font-size:.9rem;

  @media(min-width:425px){
    font-size:1rem;
  }
`

const Div = styled.div`
  width:100%;
`

const OrangeBars = styled.img`
  width:30%;
  margin-bottom:-7%;
  margin-top:3%;

  @media(min-width:756px){
    width:42%;
  }
  
`
const OrangeText = styled.span`
  color:${props => `${props.theme.colors.orange}`};
`

const Header = styled.h4`
  margin:5% 0 0 3%;
  font-size:1.3rem;

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

const Ul = styled.ul`
  list-style-type:none;
  width:33%;
  gap:60px;
  padding:0;
  font-weight:600;
  display:flex;
  align-items:center;
  justify-content:space-around;

  @media(min-width:756px){
    margin:0 8% 0 0;
  }
  @media(min-width:1025px){
    margin-right:10%;
    width:40%;
  }
`

const Li = styled.li`
  width:30%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Img = styled.img`
  width:80%;
  height:50px;
  margin:0;
  padding:0;
`

export default Community;
