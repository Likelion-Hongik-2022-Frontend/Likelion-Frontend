import React from "react";
import {
    Information, Slogan4
} from '../styles/Styled.js'
import aws from '../img/aws.svg'
import dcamp from '../img/dcamp.svg'
import inflearn from '../img/inflearn.svg'
import surfit from '../img/surfit.svg'
import openup from '../img/openup.png'
import notefolio from '../img/notefolio.svg'

import useScrollFadeIn from "../hooks/UseScrollFadeIn.jsx";

function Section6(){

    const animatedRightItem = useScrollFadeIn('right', 0.2, 0);
    const animatedRightItem1 = useScrollFadeIn('right', 0.2, 0.1);
    const animatedRightItem2 = useScrollFadeIn('right', 0.2, 0.12);
    const animatedRightItem3 = useScrollFadeIn('right', 0.2, 0.14);
    const animatedRightItem4 = useScrollFadeIn('right', 0.2, 0.16);
    const animatedRightItem5 = useScrollFadeIn('right', 0.2, 0.18);
    const animatedRightItem6 = useScrollFadeIn('right', 0.2, 0.2);

    return(
        <Information style={{marginTop:"200px"}}>
            <Slogan4 style={{marginBottom: "100px"}} {...animatedRightItem}>디프만과 함께하는<br/>후원사를 소개할게요</Slogan4>
            <div className="support">
                <img {...animatedRightItem1} alt="aws" src={aws}/>
                <img {...animatedRightItem2} alt="notefolio" src={notefolio}/>
                <img {...animatedRightItem3} alt="surfit" src={surfit}/>
                <img {...animatedRightItem4} alt="inflearn" src={inflearn}/>
                <img {...animatedRightItem5} alt="dcamp" src={dcamp}/>
                <img {...animatedRightItem6} alt="openup" src={openup}/>
            </div>                
        </Information>
    )
}

export default Section6;