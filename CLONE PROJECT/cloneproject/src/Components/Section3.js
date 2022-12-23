import React from "react";
import {
    Information,
    Slogan3,
    InfBox,
    SmallInf,
    BigInf,
    Boxes,
} from "../styles/styled.js"
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Section3(){

    const animatedUpItem = useScrollFadeIn('up', 0.2, 0);
    const animatedRightItem = useScrollFadeIn('right', 0.2, 0.1);

    return(
        <Information>
            <Slogan3  {...animatedUpItem}>
            디프만은 서비스 기획부터 론칭, 그리고 개선까지
            <br/>
            다양한 경험을 통해 성장하는 모임이에요.
            </Slogan3>
            <Boxes {...animatedRightItem}>
                <InfBox>
                    <SmallInf>
                    탄생한 지
                    </SmallInf>
                    <BigInf>
                    6년
                    </BigInf>
                </InfBox>
                <InfBox>
                    <SmallInf>
                    누적 멤버 수
                    </SmallInf>
                    <BigInf>
                    800명+
                    </BigInf>
                </InfBox>
                <InfBox>
                    <SmallInf>
                    론칭 성공률
                    </SmallInf>
                    <BigInf>
                    100%
                    </BigInf>
                    <p style={{fontSize:"20px", color:"#4b4b4b", paddingTop:"24px"}}>10,11기 기준</p>
                </InfBox>
                <InfBox>
                    <SmallInf>
                    론칭 서비스
                    </SmallInf>
                    <BigInf>
                    34개+
                    </BigInf>
                    <p style={{fontSize:"20px", color:"#4b4b4b", paddingTop:"24px"}}>5~11기 기준</p>
                </InfBox> 
            </Boxes>
      </Information>
    )
}

export default Section3;