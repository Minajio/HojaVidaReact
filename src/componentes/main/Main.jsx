import React from 'react';
import "./main.css";

export default function Main(){
    return(
        <div className='main'>
            <h2>Habilidades</h2>
            <div className='cvMain'>
                <ul className='listaHabilidadesMain'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>REACT</li>
                    <li>BootStrap</li>
                    <li>Java</li>
                    <li>C</li>
                </ul>
            </div>
            <h2>Formación académica universitaria</h2>
            <div className='cvMain'>
                <p>* Tecnologo en analisis y desarrollo de software</p>
            </div>
            <h2>Formacion complementaria</h2>
            <div className='cvMain'>
                <p>*Bases de datos</p>
            </div>
        </div>
    )
}