import React from "react";
import { PopDivs } from "../../styles/Styled";
import designPng from '../../img/design.png'
import { Fade } from "react-awesome-reveal";

function UIUX(){
    return(
        <div style={{display: "grid", placeItems:"center", gridTemplateColumns: "repeat(1,1fr)" }}>
            <Fade>
                <PopDivs>
                    <img className="teamPng" alt="designPng" src={designPng}/>
                    <div style={{marginTop:"50px", marginLeft:"70px", textAlign:"left"}}>
                        <h3>서비스 디자인의 모든 것을 담당하는<br/>UIUX 디자이너</h3>
                        <p style={{lineHeight:"35px", fontSize:"21px", color:"#82818D"}}>서비스 기획부터 UX/UI, 브랜딩, 마케팅까지 -<br/>서비스 런칭에 필요한 메인 업무를 담당하게 되어요.</p>                            
                    </div>
                </PopDivs>
            </Fade>
        </div>
    )
}

export default UIUX;