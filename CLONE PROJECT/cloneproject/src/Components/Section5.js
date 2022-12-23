import React from "react";
import {
    Information,
    Slogan4,
    DetailBox,
} from '../styles/styled.js'
import imgmedium from '../img/medium.png'
import imginterview from '../img/interview.png'
import imgprojects from '../img/projects.png'
import useScrollFadeIn from "../hooks/useScrollFadeIn.jsx";

function Section5(){

    const animatedRightItem = useScrollFadeIn('right', 0.6, 0);
    const animatedUpItem = useScrollFadeIn('up', 0.2, 0);
    const animatedUpItem2 = useScrollFadeIn('up', 0.2, 0.05);
    const animatedUpItem3 = useScrollFadeIn('up', 0.2, 0.1);

    return(
        <>
        <Information style={{paddingTop: "550px", justifyContent:"center"}}>
                <Slogan4 {...animatedRightItem}>
                디프만에 대해서<br/>더 자세히 알고 싶다면?
                </Slogan4>
                <div className="boxing" style={{marginTop: "35px", display: "inline-flex"}}>
                    <DetailBox {...animatedUpItem}>
                        <img alt="imgmedium" src={imgmedium} style={{width: "330px", height: "365px"}}/>
                        <div className="textsmall" style={{marginTop: "20px"}}>활동 내역</div>
                        <div className="textMedium" style={{fontWeight:"normal"}}>결과만큼 과정도 중요한<br/>디프만의 활동 내역</div>
                    </DetailBox>
                    <DetailBox {...animatedUpItem2}>
                        <img alt="imgmedium" src={imginterview} style={{width: "330px", height: "365px"}}/>
                        <div className="textsmall" style={{marginTop: "20px"}}>멤버 인터뷰</div>
                        <div className="textMedium" style={{fontWeight:"normal"}}>디프만 11기 멤버가<br/>말해주는 디프만</div>
                    </DetailBox>
                    <DetailBox {...animatedUpItem3}>
                        <img alt="imgmedium" src={imgprojects} style={{width: "330px", height: "365px"}}/>
                        <div className="textsmall" style={{marginTop: "20px"}}>프로젝트</div>
                        <div className="textMedium" style={{fontWeight:"normal"}}>디프만에서 론칭된<br/>개성있는 프로젝트</div>
                    </DetailBox>          
                </div>
            </Information>        
        </>
 
    )
}

export default Section5;