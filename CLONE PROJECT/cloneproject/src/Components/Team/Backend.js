import React from "react";
import { PopDivs } from "../../styles/Styled";
import BackendPng from '../../img/backend.png'
import { Fade, } from "react-awesome-reveal";

function Backend(){
    return(
        <div style={{display: "grid", placeItems:"center", gridTemplateColumns: "repeat(1,1fr)" }}>
            <Fade>
                <PopDivs>
                    <img className="teamPng" alt="designPng" src={BackendPng}/>
                    <div style={{marginTop:"35px", marginLeft:"40px", textAlign:"left"}}>
                        <h3>시스템의 전반적인 흐름을 관리하는<br/>Backend Developer</h3>
                        <p style={{lineHeight:"32px", fontSize:"21px", color:"#82818D"}}>
                            서비스의 전반적인 흐름을 구축해요. 시스템 설계부터 배포까지,<br/>
                            서비스 및 데이터의 흐름을 관리하며 서비스의 전반적인 Life<br/>
                            Cycle을 경험하게 되어요.
                        </p>                            
                    </div>
                </PopDivs>
            </Fade>
        </div>
    )
}

export default Backend;