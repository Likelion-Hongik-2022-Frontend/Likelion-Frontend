import React from "react";
import { isBtnActiveAtom } from '../hooks/Atom';
import { useRecoilState } from 'recoil';

function BtnActive(){

    const [isBtnActive, setIsBtnActive] = useRecoilState(isBtnActiveAtom);

    return(
        <div className="forPD">
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '1' ? 'active' : ''}`}
                    onClick={()=>{
                        setIsBtnActive('1')
                    }}
                    >
                    UIUX Design
                </btn>       
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '2' ? 'active' : ''}`}
                    onClick={()=>setIsBtnActive('2')}
                    >
                    Web
                </btn>                
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '3' ? 'active' : ''}`}
                    onClick={()=>setIsBtnActive('3')}
                    >
                    iOS
                </btn>                
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '4' ? 'active' : ''}`}
                    onClick={()=>setIsBtnActive('4')}
                    >
                    Android
                </btn>                
            </div>
            <div>
                <btn id="btnactive"
                    className={`btn ${isBtnActive === '5' ? 'active' : ''}`}
                    onClick={()=>setIsBtnActive('5')}
                    >
                    Backend
                </btn>                
            </div>
        </div>

    )
}

export default BtnActive;