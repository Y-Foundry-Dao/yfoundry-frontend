import styled from 'styled-components';

function PartnerLogos() {
  return (
    <Section>
      <LogoHolder>
        <Logo />
      </LogoHolder>
      <LogoHolder>
        <Logo />
      </LogoHolder>
      <LogoHolder>
        <Logo />
      </LogoHolder>
      <LogoHolder>
        <Logo />
      </LogoHolder>
    </Section>
  )
}

const Section = styled.section`
  border:1px ${props => `${props.theme.colors.orange}`};
  border-style: solid none;
  display:flex;
  justify-content:space-around;
  margin-top:18%;
  background: ${props => `${props.theme.colors.black}`};
  width:100%;
  box-sizing:border-box;
`

const LogoHolder = styled.div`
  background-color:#161414;
  margin:20px 0;
  height:45px;
  width: 15%;
  border-radius:10px;

  @media(min-width:756px){
    height:70px;
    width:12%;
  }
`

const Logo = styled.div`
  width:100%;
  height:auto;
  background-size:auto;
`

export default PartnerLogos
