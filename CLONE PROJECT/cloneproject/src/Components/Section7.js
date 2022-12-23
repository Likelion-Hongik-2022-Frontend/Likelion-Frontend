import React from "react";
import { Information, Slogan6, Slogan3, RegBtn } from "../styles/styled";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Section7(){

    const animatedUpItem1 = useScrollFadeIn('up', 0.1, 0);
    const animatedUpItem2 = useScrollFadeIn('up', 0.1, 0.05);
    const animatedUpItem3 = useScrollFadeIn('up', 0.3, 0.15);

    return(
        <Information style={{height: "70vh"}}>
            <Slogan6 {...animatedUpItem1}>
                이제 여러분 차례예요!
            </Slogan6>
            <div {...animatedUpItem2}>
            <Slogan3 style={{paddingTop: 0, fontSize: "50px"}}>
                디프만 12기 멤버가 되고싶다면
            </Slogan3>
            </div>

            <RegBtn {...animatedUpItem3}>모집 기간이 아닙니다.</RegBtn>
        </Information>
    )
}

export default Section7;