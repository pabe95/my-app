import React from "react";
import styled from "styled-components";
import profilepic from "../images/7975564.jpg";
import behance from "../images/behance2.png";
import linkedin from "../images/linkedin2.png";
import Cards from "./Cards"

function Home() {
  return (
    <>
      <BannerH>
        <div className="container">
          <div className="info">
            <p className="greeting">Hey, My name is</p>
            <h1 className="name">Susanita</h1>
            <Container>
              <span>Graphic Designer</span>
              <Divider />
              <span>UI UX Designer</span>
              <Divider />
              <span> Developer</span>
            </Container>
            <div className="socialmedia">
              <div className="button">
                <img src={behance} alt="h" width="30px" />
                <p>Behance</p>
              </div>
              <div className="button">
                <img src={linkedin} alt="h" width="30px" />
                <p>Linkedin</p>
              </div>
            </div>
          </div>
          <div className="BanH">
            <img src={profilepic} alt="profile" />
          </div>
        </div>
      </BannerH>
      <Cards />
    </>
  );
}

export default Home;
const BannerH = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .greeting {
    color: #fb494d;
    font-weight: bold;
    font-size: 20px;
    z-index: -1000;
  }

  h1 {
    font-weight: bold;
    font-size: 80px;
  }

  .info {
    margin: 50px;
  }

  .BanH img {
    width: 700px;
    height: auto;
    margin-left: auto;
    max-width: 100%;
  }
  .socialmedia {
    display: flex;
    gap: 20px;
    padding: 20px;
    margin-top: 30px;
  }
  .button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    color: #2c2c2c;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .button:hover {
    background-color: #07d3d3;
  }

  /---* Media Queries--- */ @media (max-width: 768px) {
    .container {
      flex-direction: column; /* Apila los elementos verticalmente */
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: 50px; /* Reduce el tamaño del título */
    }

    .info {
      margin: 20px 0;
    }

    .BanH img {
      width: 80%; /* Reduce la imagen */
    }

    .socialmedia {
      flex-direction: column; /* Cambia a una disposición vertical */
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 36px;
    }

    .greeting {
      font-size: 16px;
    }

    .BanH img {
      width: 100%;
    }

    .button {
      padding: 10px;
      font-size: 14px;
    }

    .socialmedia {
      gap: 10px;
    }
    
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 20px; 
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: #000033; /
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #000033;
`;
