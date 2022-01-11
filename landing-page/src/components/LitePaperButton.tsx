import React from 'react'
import styled from 'styled-components'

function LitePaperButton() {
  return (
    <Button>LitePaper</Button>
  )
}

const Button = styled.button`
  border: 1.38272px solid #1F43BF;
  background:none;
  margin:1% 2%;
  padding:1% 2%;
  color:rgba(255,255,255,.7)
`

export default LitePaperButton
