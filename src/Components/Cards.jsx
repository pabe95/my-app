import React from "react";
import skills from "../images/social-media.png";
import styled from "styled-components";

function Cards() {
  return (
    <SkillP>
      <div className="containerservices">
        <h2 className="title">My Services</h2>
        <p className="subtitle">What I Do for Clients</p>
        <div className="services">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img
                className="card-image"
                src={service.image}
                alt={service.title}
              />
              <h2 className="card-title">{service.title}</h2>
              <p className="card-text">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SkillP>
  );
}

export default Cards;

const SkillP = styled.div`
  .containerservices {
    background-color: #161616;
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
    color: white;
    margin-bottom: 40px;
  }
    
  /* Services container */
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-bottom: 5px;
  }

  /* Individual Cards */
  .card {
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    text-align: left;
    background-color: #212121;
    display: inline-block;
    max-width: 300px;
    flex: 1 1 300px;
    transition: transform 0.3s ease;
    box-shadow: 3px 3px 5px rgb(0 0 0 / 0.2);
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card-image {
    height: auto;
    margin-bottom: 10px;
    max-width: 30%;
    border-radius: 5px;
  }

  .card-title {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin: 10px 0;
  }

  .card-text {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #d4d4d4;
    line-height: 1.5;
  }

  /---* Media Queries--- */ 
  
  @media (max-width: 768px) {
    .subtitle {
      font-size: 20px; 
    }

    .services {
      gap: 15px;
    }

    .card {
      max-width: 100%; /
      flex: 1 1 100%;
    }

    .card-title {
      font-size: 16px;
    }

    .card-text {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 24px;
    }

    .subtitle {
      font-size: 18px;
    }

    .card {
      padding: 15px;
    }

    .card-title {
      font-size: 14px;
    }

    .card-text {
      font-size: 10px;
    }
  }
`;
const services = [
  {
    image: skills,
    title: "Social Media",
    text: "Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.",
  },
  {
    image: skills,
    title: "Content Creation",
    text: "Creating engaging content tailored to your brand and audience needs with modern strategies.",
  },
  {
    image: skills,
    title: "SEO Optimization",
    text: "Optimizing your website to rank higher in search engine results and reach more customers.",
  },
];