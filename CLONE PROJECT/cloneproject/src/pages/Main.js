import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { 
  Container, 
  BackImg, 
  Slogan, 
  Slogan2, 
 } from '../styles/Styled';
import Section2 from '../components/Section2';
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from '../components/Section5';
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Footer from "../components/Footer";


function Main() {
  return (
    <Container>
      <HeaderComponent/>
      <BackImg>
        <Slogan>
          DEPROMEET
        </Slogan>
        <Slogan2>
          디자이너와 프로그래머가 만났을 때
        </Slogan2>
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="40" viewBox="0 0 61 40"><path d="M8 10L30.5 30L53 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </BackImg>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </Container>
  );
}

export default Main;