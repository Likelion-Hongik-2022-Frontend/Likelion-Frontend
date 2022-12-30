import React from "react";
import { Header, HeaderBtn, Logo } from '../styles/Styled';

function HeaderComponent(){
    return(
        <Header>
            <Logo>
                <p>DEPROMEET</p>                  
            </Logo>
            <HeaderBtn>
                <p>프로젝트</p>
            </HeaderBtn>
            <HeaderBtn>
                <p>문의하기</p>
            </HeaderBtn>
            <HeaderBtn>
                <p>리크루팅</p>
            </HeaderBtn>
        </Header>        
    )
}

export default HeaderComponent;
