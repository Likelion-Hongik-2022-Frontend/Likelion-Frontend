import React from "react";
import { useRecoilValue } from 'recoil';
import { isBtnActiveAtom } from '../hooks/atom';
import { useSetRecoilState } from 'recoil';

function BtnActive(){

    const isBtnActive = useRecoilValue(isBtnActiveAtom);
    const setBtnActive = useSetRecoilState(isBtnActiveAtom);

    return(
        <div className="forPD">
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '1' ? 'active' : ''}`}
                    onClick={()=>setBtnActive('1')}
                    >
                    UIUX Design
                </btn>             
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '2' ? 'active' : ''}`}
                    onClick={()=>setBtnActive('2')}
                    >
                    Web
                </btn>                
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '3' ? 'active' : ''}`}
                    onClick={()=>setBtnActive('3')}
                    >
                    iOS
                </btn>                
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '4' ? 'active' : ''}`}
                    onClick={()=>setBtnActive('4')}
                    >
                    Android
                </btn>                
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '5' ? 'active' : ''}`}
                    onClick={()=>setBtnActive('5')}
                    >
                    Backend
                </btn>                
            </div>
        </div>

    )
}

export default BtnActive;