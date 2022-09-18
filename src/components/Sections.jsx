import React from "react";
import { acerca, navbar, conocimientos, contacto } from "../constants/index";
import "./sections.css";
import GridProjects from "./GridProjects";
import pdf from './../assets/Lautaro Mendez CV.pdf'

const Sections = () => {
  const li = conocimientos.frontend.map((el, i) => <li key={i}>{el}</li>);
  const li1 = conocimientos.backend.map((el, i) => <li key={i}>{el}</li>);

  return (
    <>
    <hr className="hr divisor" />
      <section className="contenido" id="acerca">
        <div>
          <h2 className="titulo">{navbar.acerca}</h2>
          <p className="texto">{acerca.texto} </p>
        </div>

        <div className="card">
          <div className="parrafos">
            <p>Front-End</p>
            <hr />
            <p>Conocimientos en:</p>
            <ul>
              <p className="parrafo">{conocimientos.texto}</p>
              {li}
            </ul>
          </div>
          <div className="parrafos">
            <p>Back-End</p>
            <hr />
            <ul>
              <p>Conocimientos en:</p>
              {li1}
            </ul>
          </div>
        </div>
      </section>
      <hr className="hr divisor"></hr>
      <section className="contenido"  id="proyectos">
        <div>
          <h2 className="titulo">Proyectos que estuve desarrollando</h2>
          <div className="container">
             <GridProjects />
          </div>
           
        </div>
      </section>
      <hr className="hr divisor"></hr>
      <section className="contenido"  id="contacto">
        <div>
          <h2 className="titulo">Contacto</h2>
          <ul className="contactoUl">
            <li className="texto textop">{contacto.telefono}</li>
            <li className="texto textop">{contacto.email}</li>
            <li className="texto textop">
              Linkedin: <a
                href="https://www.linkedin.com/in/lautaro-mendez-174a45234/"
                target={"_blank"}
              >
                Presiona para visualizarlo
              </a>
            </li>
            <li className="texto textop">Curriculum vitae: <a href={pdf} target={'_blank'}>Presiona para visualizarlo</a></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sections;
