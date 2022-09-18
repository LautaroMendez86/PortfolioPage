import React from "react";
import "./gridProjects.css";
import { fotos } from "./../constants/index";

const GridProjects = () => {
  const User = ({ avatar, titulo, link}) => {
    return (
      <div className="box">
        <a href={link} target='_blank'>
          <img src={avatar} alt={titulo} />
          <span className="texto span shadow">{titulo}</span>
        </a>
      </div>
    );
  };

  return (
    <>
      {fotos.frame.map((foto) => (
        <User
          avatar={foto.photos}
          titulo={foto.titulo}
          link={foto.link}
          key={setInterval(() => {
            new Date();
          }, 100)}
        />
      ))}
    </>
  );
};

export default GridProjects;
