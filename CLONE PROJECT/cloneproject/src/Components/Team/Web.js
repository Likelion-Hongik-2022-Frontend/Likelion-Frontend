import React from "react";
import { PopDivs } from "../../styles/Styled";
import WebPng from '../../img/web.png'
import { Fade } from "react-awesome-reveal";

function Web(){
    return(
        <div style={{display: "grid", placeItems:"center", gridTemplateColumns: "repeat(1,1fr)" }}>
            <Fade>
                <PopDivs>
                    <img className="teamPng" alt="designPng" src={WebPng}/>
                    <div style={{marginTop:"50px", marginLeft:"50px", textAlign:"left"}}>
                        <h3>웹부터 앱까지 클라이언트 개발을 담당하는<br/>Web Developer</h3>
                        <p style={{lineHeight: "35px", fontSize:"21px", color:"#82818D"}}>서비스의 Life Cycle에 전반적으로 참여하며 웹 혹은 웹뷰<br/>형태의 앱 클라이언트 개발을 담당하게 되어요.</p>                            
                    </div>
                </PopDivs>
            </Fade>
        </div>
    )
}

export default Web;