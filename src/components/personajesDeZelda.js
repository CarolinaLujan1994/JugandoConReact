import React from 'react';
import '../stylesheets/personajesDeZelda.css'

function PersonajesDeZelda(props) {
    return (
        <div className='contenedor-personaje'>
            <img className='imagen-personaje'
                src={require(`../image/${props.imagenPersonaje}.png`)} 
                alt=''/>
            <div className='contenedor-texto-personaje'>
                <p className='nombre-personaje'>
                    <strong>{props.nombrePersonaje}</strong>
                </p>
                <p className='cargo-personaje'>
                    <strong>{props.cargoPersonaje} </strong>
                </p>
                <p className='descripcion-personaje'>{props.descripcionPersonaje}</p>
            </div>
        </div>
    );
}

export default PersonajesDeZelda;