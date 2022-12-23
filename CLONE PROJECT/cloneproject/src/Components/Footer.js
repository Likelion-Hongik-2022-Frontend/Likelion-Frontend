import React from "react";
import { Logo } from "../styles/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div>
            <Logo style={{marginRight: 0, marginBottom: "20px"}}>DEPROMEET</Logo>
            <FontAwesomeIcon icon={faGithub} style={{color: "white"}}/>
            <div className="footer">
                © 2022 Depromeet. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;