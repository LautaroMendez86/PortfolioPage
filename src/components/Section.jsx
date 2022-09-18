import React from "react";
import {titulo} from '../constants/index'
import './section.css'
import './aside.css'

const SectionPrincipal = () => (
    <>

    <section className="section animate__animated animate__fadeIn">
      
    <h1>{titulo.oracion}</h1>
    <p className="subtitle">Front-End Developer</p>
    
  </section>


    </>
  
  
);

export default SectionPrincipal;
