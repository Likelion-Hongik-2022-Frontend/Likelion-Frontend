import React from "react";
import { Information, Slogan6, Slogan3, NotRegBtn, RegBtn } from "../styles/Styled";
import useScrollFadeIn from "../hooks/UseScrollFadeIn";
import { Zoom } from "react-awesome-reveal";
import { isRegistAtom } from "../hooks/Atom";
import { useRecoilState } from 'recoil';

function Section7(){

    const [isRegBtn, setIsRegBtn] = useRecoilState(isRegistAtom);
    const animatedUpItem1 = useScrollFadeIn('up', 0.1, 0);
    const animatedUpItem2 = useScrollFadeIn('up', 0.1, 0.05);

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
            <Zoom duration={600}>
                {isRegBtn ? (
                    <RegBtn>지원 바로가기</RegBtn>
                ) : (
                    <NotRegBtn>모집 기간이 아닙니다.</NotRegBtn>                      
                )}
            </Zoom>
        </Information>
    )
}

export default Section7;