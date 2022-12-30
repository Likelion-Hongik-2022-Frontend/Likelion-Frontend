import React from "react";
import { 
    Information,
    Slogan4,
 } from "../styles/Styled";
import BtnActive from "./BtnActiveComponent";
import { isBtnActiveAtom } from '../hooks/Atom';
import { useRecoilValue } from "recoil";
import UIUX from './Team/UIUX';
import Web from './Team/Web';
import IOS from './Team/IOS';
import Android from "./Team/Android";
import Backend from "./Team/Backend";
import useScrollFadeIn from "../hooks/UseScrollFadeIn";

function Section3(){

    const isBtnActive = useRecoilValue(isBtnActiveAtom);
    const animatedUpItem = useScrollFadeIn('up', 0.2, 0);

    return(
        <Information {...animatedUpItem}>
            <Slogan4 >디프만의 팀은 어떻게 구성되어 있을까요?</Slogan4>
            <BtnActive/>
            { isBtnActive === '1' && <UIUX/>}
            { isBtnActive === '2' && <Web/>}
            { isBtnActive === '3' && <IOS/>}
            { isBtnActive === '4' && <Android/>}
            { isBtnActive === '5' && <Backend/>}
        </Information>
    )
}

export default Section3;