'use client'
import { useState } from 'react';
import style from './StyleMode.module.css'

export default function StyleMode() {
    //con  esta funcion cambiamos los estilos de nuestra pagina, si es oscuro pasa a claro 
    //y si es claro pasa a oscuro
    const handleChange = (e)=>{
        const listClass = document.body.classList
        if(listClass[1] === 'lightMode'){
            document.body.classList.remove('lightMode')
            document.body.classList.add('darkMode');
            
        }else{
            document.body.classList.remove('darkMode') 
            document.body.classList.add('lightMode'); 
        }
        
    }
    
    return (
        <div id='toggle' className={style.toggle} onChange={handleChange}>
            <input type="checkbox"/>
            <label></label> 
        </div>
    )
}