import React from "react";
import { PopDivs } from "../../styles/Styled";
import AndroidPng from '../../img/android.png'
import { Fade } from "react-awesome-reveal";

function Android(){
    return(
        <div style={{display: "grid", placeItems:"center", gridTemplateColumns: "repeat(1,1fr)" }}>
            <Fade>
                <PopDivs>
                    <img className="teamPng" alt="designPng" src={AndroidPng}/>
                    <div style={{marginTop:"35px", textAlign:"left"}}>
                        <h3>모바일 환경에서 사용자 경험을 개선하는데 필요한<br/>퍼포먼스를 담당하는 Android Developer</h3>
                        <p style={{lineHeight:"30px", fontSize:"21px", color:"#82818D"}}>
                            구글의 Material Design에 대한 이해를 바탕으로 최고의 모바일<br/>
                            서비스를 만들기 위한 아이디어를 실행해 볼 수 있는 Android<br/>
                            Developer로 성장하게 되어요.
                        </p>                            
                    </div>
                </PopDivs>
            </Fade>
        </div>
    )
}

export default Android;