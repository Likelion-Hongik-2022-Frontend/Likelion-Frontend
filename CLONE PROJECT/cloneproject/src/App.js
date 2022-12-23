import Router from "./Routes/Router"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
`

function App(){
  return(
    <>
      <GlobalStyle/>
      <Router/>      
    </>
  )
}

export default App;