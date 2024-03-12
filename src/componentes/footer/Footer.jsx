import React from 'react';
import "./footer.css";
import github from "./github.png";

export default function Footer(){
    return(
        <div className='footer'>
            <ul className='ulFooter'>
                <li className='contactListItemFooter'><img src={github} alt="GitHub" className="imagenPequena"/><a href="https://github.com/Minajio"><p>Github</p></a></li>
            </ul>
        </div>
    )
}