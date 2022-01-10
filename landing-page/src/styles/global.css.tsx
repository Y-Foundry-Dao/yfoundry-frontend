import { createGlobalStyle } from 'styled-components'
import ThemeType from './ThemeType'

const GlobalCss = createGlobalStyle<{theme:ThemeType}>`
html{
  font-family: 'Kodchasan', sans-serif;
  background-color:${props => `${props.theme.colors.black}`}
}
body {
  margin: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalCss