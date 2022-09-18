import React, { useEffect, useState } from "react";
import "./navbar.css";
import { navbar } from "./../constants";
import Boton from "./Boton";
import {PortContext} from "./content/PortContext";
import { useContext } from "react";

const Navbar = () => {
  
  const {navbarMobile, cerrarToggle} = useContext(PortContext)

  const [hState, sethState] = useState("top");
  
  useEffect(() => {
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0 || y < 0) {
        sethState("top");
      }
      lastVal = y;
    };
  }, []);

  return (
    <>
        <header className={`header ${hState} animate__animated animate__fadeIn`}>
      
      <nav className="header-nav trigger-menu-wrapper">
        <ul className="header-nav-ul">
          <li className="title item hola">
            <a href="#" onClick={cerrarToggle}>Lautaro Mendez</a>
          </li>
          <li className="item li">
            <a href="#acerca">{navbar.acerca}</a>
          </li>
          <li className="item li">
            <a href="#proyectos">{navbar.proyectos}</a>
          </li>
          <li className="item li">
            <a href="#contacto">{navbar.contacto}</a>
          </li>
          <Boton/>
          
        </ul>
       
      </nav>
      
     
    </header>
     <aside transition-style="in:circle:hesitate" className={`aside ${navbarMobile}`}>

    

        <a className="a" onClick={cerrarToggle} href="#acerca">{navbar.acerca}</a>
        <a className="a" onClick={cerrarToggle} href="#proyectos">{navbar.proyectos}</a>
        <a className="a" onClick={cerrarToggle} href="#contacto">{navbar.contacto}</a>
      </aside>
    </>


  );
};

export default Navbar;
