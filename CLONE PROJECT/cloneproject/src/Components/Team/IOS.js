import React from "react";
import { PopDivs } from "../../styles/Styled";
import iOSPng from '../../img/ios.png'
import { Fade } from "react-awesome-reveal";
import '../../styles/App.css'

function IOS(){
    return(
        <div style={{display: "grid", placeItems:"center", gridTemplateColumns: "repeat(1,1fr)" }}>
            <Fade>
                <PopDivs>
                    <img className="teamPng" alt="designPng" src={iOSPng}/>
                    <div style={{marginTop:"30px", marginLeft:"80px", textAlign:"left"}}>
                        <h3>iOS 유저를 위한 앱 개발을 담당하는<br/>iOS Developer</h3>
                        <p style={{lineHeight:"32px", fontSize:"21px", color:"#82818D"}}>앱 개발을 담당해요. 디자인 및 서버 개발 직군과의
                            <br/>협업을 경험할 수 있으며, 보다 나은 사용성을 위해
                            <br/>Use Case 및 Wireframe을 구축하게 되어요.
                        </p>                            
                    </div>
                </PopDivs>
            </Fade>
        </div>
    )
}

export default IOS;