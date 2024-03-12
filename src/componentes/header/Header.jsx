import React from 'react';
import "./header.css";
import fotopersonal from "./fotopersonal.png";
import smartphone from "./smartphone.png";
import locationon from "./locationon.png";
import email from "./email.png";

export default function Header(){
    return(
        <div className='header'>
            <div className='headerPhoto'>
                <img src={fotopersonal} alt="fotoPersonal" className="headerPhotoImg" />
            </div>
            <div className='headerNombres'>
                <h1>Andres Osorio Zapata</h1>
                <p></p>
            </div>
            <div className='headerContacto'>
                <ul className='contactList'>
                    <li className='contactListItem'><p><img src={smartphone} className='imagenPequena'/></p><p>+57 3016007234</p></li>
                    <li className='contactListItem'><p><img src={locationon} className='imagenPequena'/></p><p>Dosquebradas / Risaralda - Colombia</p></li>
                    <li className='contactListItem'><p><img src={email} className='imagenPequena'/></p><p>andres_osorioz@soy.sena.edu.co</p></li>
                    <li className='contactListItem'><p><img src={email} className='imagenPequena'/></p><p>andres.osoriozapata97@gmail.com</p></li>
                </ul>
            </div>
        </div>
    )
}