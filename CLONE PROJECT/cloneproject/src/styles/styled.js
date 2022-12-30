import styled, { keyframes } from "styled-components";
import Home_Header from "../img/home_header.png"
import "./App.css"

const fadein = keyframes`
    0%{
        opacity:0.3;
    }
    100%{
        opacity:1;
    }
`

const bigger = keyframes`
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.02);
    }
`

export const Container = styled.div`
    color: white;
    background-color: black;
    position: absolute;
    height: max-content;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    word-spacing: 0;
    letter-spacing: 0;
    font-size: 0;
    font-family: "SUIT-Medium";
`

export const Header = styled.div`
    background-color: black;
    color: white;
    display: inline-flex;
    text-align: center;
    top: 0;
    position: relative;
    opacity: 1;
`
export const Logo = styled.div`
    margin-right: 80vh;
    font-size: 20px;
`

export const BackImg = styled.div`
    background-image: url(${Home_Header});
    width: 100%;
    height: 100vh;
    display: block;
    margin: auto;
    /* position: absolute; */
    overflow: hidden;
    animation: ${fadein} 0.5s
`

export const HeaderBtn = styled.button`
    display: flex;
    background: black;
    color: white;
    border:none;
    font-size: 15px;
    margin-top: 13px;
    cursor: pointer;
    margin-left: 7vh;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 45px;
    border-radius: 15%;

    &:hover{
        background-color: rgba(47, 54, 64, 0.5);
        transition: background-color 0.3s ease-in-out;
    }
`;

export const Slogan = styled.div`
    padding-top: 220px;
    padding-bottom: 10px;
    font-size: 80px;
    font-weight: 600;
    white-space: pre;
    font-family: "GothicA1-SemiBold";
`

export const Slogan2 = styled.div`
    font-size: 2.8rem;
    line-height: 150%;
    white-space: pre;
    margin-bottom: 25vh;
    font-family: "GothicA1-Light";
    font-weight: bold;
`

export const Information = styled.div`
    height: 100vh;
`

export const Slogan3 = styled.div`
    font-size: 2.5rem;
    padding-top: 180px;
    font-weight: bold;
    line-height: 60px;
`
export const Boxes = styled.div`
    display:inline-flex;
`

export const InfBox = styled.div`
    background-color: #1B1A1E;
    border-radius: 9%;
    width: 250px;
    height: 250px;
    color:white;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 65px;
    margin-bottom: 8px;
    font-size: 10px;
    align-items: center;
    justify-content:center;
`

export const SmallInf = styled.div`
    padding-top: 70px;
    font-size: 20px;
    font-weight: 500;
    color: #AFAEB6;
`

export const BigInf = styled.div`
    font-size: 55px;
    font-weight: 600;
`

export const Slogan4 = styled.div`
    font-size: 2.7rem;
    padding-top: 180px;
    font-weight: bold;
    line-height: 60px;
`
export const PopDivs = styled.div`
    color: white;
    width: 1000px;;
    height: 320px;
    font-size: 25px;
    font-weight: 500;
    background-color: #1B1A1E;
    display: flex;
    border-radius: 17px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 65px;
    margin-bottom: 8px;
    
`
export const Slogan5 = styled.div`
    font-size: 1.6rem;
    padding-top: 17px;
    color: gray;
`
export const BigBox = styled.div`
    width: 1090px;
    height: 200px;
    background-color: #1B1A1E;
    margin-top: 40px;
    border-radius: 10px;
    display:flex;
`

export const DetailBox = styled.div`
    width: 330px;
    height: 530px;
    font-size: 14px;
    margin: 25px;
    background-color: #1B1A1E;
    border-radius: 15px;
    cursor: pointer;


    &:hover{
        animation: ${bigger} 0.2s linear;     
        animation-fill-mode: forwards; 
    }
`

export const Slogan6 = styled.div`
    margin-top: 150px;
    font-size: 2.3rem;
    color: #82818D;
`

export const NotRegBtn = styled.button`
    margin-top: 60px;
    width: 350px;
    height: 80px;
    font-size: 25px;
    border-radius: 10px;
    border:none;
    color: #1B1A1E;
    cursor: pointer;
    background-color: #4C4A53;
    font-family: "SUIT-Medium";
`

export const RegBtn = styled.button`
    margin-top: 60px;
    width: 350px;
    height: 80px;
    font-size: 25px;
    border-radius: 10px;
    border:none;
    color: white;
    cursor: pointer;
    background-color: #1B5BFF;
    font-family: "SUIT-Medium";
`
