import React from "react";
import { Link } from "react-router-dom";
import { Header, HeaderBtn, Logo } from '../styles/styled';

function HeaderComponent(){
    return(
        <Header>
            <Logo>
                <Link to="/"  style={{textDecoration:"none", color: "white"}}>
                    <p>DEPROMEET</p>
                </Link>                  
            </Logo>
            <HeaderBtn>
                <Link to="/project"  style={{textDecoration:"none", color: "white"}}>
                    <p>프로젝트</p>
                </Link>
            </HeaderBtn>
            <HeaderBtn>
                <Link to="/contact"  style={{textDecoration:"none", color: "white"}}>
                    <p>문의하기</p>
                </Link>
            </HeaderBtn>
            <HeaderBtn>
                <Link to="/recruit"  style={{textDecoration:"none", color: "white"}}>
                    <p>리크루팅</p>
                </Link>
            </HeaderBtn>
        </Header>        
    )
}

export default HeaderComponent;
