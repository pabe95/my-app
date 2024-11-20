import React from "react";
import tinder from "../images/tinder.png";
import tribe from "../images/tribe.png";
import agenda from "../images/agenda.png";
import styled from "styled-components";

function Porfolio() {
  return (
    <Proyects>
      <div className="containerproyect">
        <h2 className="title">Our Works</h2>
        <p className="subtitle">My Latest Design</p>
        <div className="proyect">
          {projects.map((project, index) => (
            <div className="proy" key={index}>
              <img
                className="proy-image"
                src={project.image}
                alt={project.title}
              />
              <h2 className="proy-title">{project.title}</h2>
              <p className="proy-text">{project.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Proyects>
  );
}

export default Porfolio;

const Proyects = styled.div`
  .containerproyect {
    margin: 0 auto;
    max-width: 100%;
    padding: 20px;
  }
  .title {
    text-align: center;
    color: #fb494d;
    padding-top: 50px;
  }
  .subtitle {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #161616;
  }
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px 0;
  }
  .proyect {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px 0;
  }
  .proy {
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    text-align: left;
    background-color: white;
    max-width: 300px;
    flex: 1 1 300px;
    transition: transform 0.3s ease;
    box-shadow: 5px 5px 5px 5px rgb(0 0 0 / 0.1);
  }
  .proy:hover {
    transform: scale(1.05);
  }

  .proy-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .proy-title {
    font-family: Arial, sans-serif;
    margin: 10px 0;
    font-size: 15px;
    color: #fb494d;
  }

  .proy-text {
    font-family: Arial, sans-serif;
    font-size: 14px;
  }

  /---* Media Queries--- */ 
  
  @media (max-width: 768px) {
    .subtitle {
      font-size: 30px; /* Reduce tamaño del subtítulo */
    }

    .proy {
      max-width: 100%; /* Tarjetas ocupan el 100% del ancho disponible */
      flex: 1 1 100%;
    }

    .proy-title {
      font-size: 14px; /* Reduce el tamaño del título */
    }

    .proy-text {
      font-size: 12px; /* Reduce el tamaño del texto */
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 24px; /* Ajuste del título para móviles */
    }

    .subtitle {
      font-size: 20px;
    }

    .proy {
      padding: 15px;
      margin: 5px;
    }

    .proy-title {
      font-size: 12px;
    }

    .proy-text {
      font-size: 10px;
    }
  }
`;
const projects = [
  {
    image: tinder,
    title: "Tinder Redesign",
    text: "A fresh take on the Tinder app, focusing on user experience and simplicity.",
  },
  {
    image: agenda,
    title: "Agenda App",
    text: "An app design to help users organize tasks efficiently.",
  },
  {
    image: tribe,
    title: "Tribe Community",
    text: "A design for a platform connecting people through shared interests.",
  },
];
