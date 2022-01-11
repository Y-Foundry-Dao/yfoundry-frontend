import React from 'react'
import styled from 'styled-components'

function CommunityButton() {
  return (
    <Button>Join Community</Button>
  )
}

const Button = styled.button`
  background-color:#1F43BF;
  width:40%;
  border-radius:7px;
  color: #FFFFFF;
  text-transform:uppercase;
  font-weight:600;
  border:none;
  margin:1% 2%;
  padding:1% 2%;
`

export default CommunityButton
