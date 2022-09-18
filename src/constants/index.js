import proyecto from "./../assets/proyecto.png";
import proyecto0 from "./../assets/proyecto0.png";
import proyecto1 from "./../assets/proyecto1.png";
import proyecto2 from './../assets/proyecto2.png'

export const navbar = {
  home: "Home",
  acerca: "Acerca de mi",
  experiencia: "Experiencia y habilidades",
  proyectos: "Proyectos",
  contacto: "Contacto",
};

export const titulo = {
  oracion: "Bienvenidos al portfolio de Lautaro Mendez",
};

export const acerca = {
  texto:
    "Lautaro Mendez es un Argentino de 19 años apasionado por la programacion, los autos, la tecnologia en general y sus constantes avances. Disfruta mucho aprender y invierte la mayor parte de su tiempo a su formación como programador.",
  img: "../assets/yo.jpg",
};

export const experiencia = [
  {
    texto: "Titulo secundario en Sor Maria Josefa Rosello",
  },
  {
    texto: "Cursé 3 años de Japones en el Instituto Plank.",
  },
  {
    texto:
      "Trabajo desde 2018 haciendo Detailing y como ayudante de pintor en Mendez Multimarcas.",
  },
  {
    texto: "Estudio programacion a traves de 4 vientos desde 2022.",
  },
  {
    texto: "Conocimientos en:",
    conocimientos: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "React.js",
    ],
  },
  {
    texto:
      " Me gusta mucho el diseño y aspiro a ser en un futuro un excelente Front-End Developer",
  },
];

export const contacto = 
  {
    telefono: "Telefono: 341 391 2140",
    email: "Email: lautaromendez123@gmail.com",
  }
 


export const conocimientos = {
  frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js (basico)"],
  backend: ["Node.js (basico)", "PHP (en aprendizaje)"],
};

export const fotos = {
  frame: [
    {
      titulo: "DolarNow",
      photos: proyecto0,
      parrafo: 'Precios del Dolar en Argentina',
      link:"https://lautaromendez86.github.io/DolarNow/"
    },
   
    {
      titulo: "PlazoFijo",
      photos: proyecto1,
      parrafo: 'Una calculadora de plazo fijo',
      link: 'https://lautaromendez86.github.io/Calculadora-de-Plazo-Fijo/'
    },
    {
      titulo: "HeroesApp",
      photos: proyecto,
      parrafo: 'Una "Wiki" de Marvel y DC',
      link:"https://lautaromendez86.github.io/HeroesApp/"
    },
    {
      titulo: "Calculadora iOS",
      photos: proyecto2,
      parrafo: 'Una "Wiki" de Marvel y DC',
      link: 'https://lautaromendez86.github.io/Calculadora-iOS/'
    },    
  ],
};
