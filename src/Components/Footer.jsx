import React from "react";
import styled from "styled-components";
import insta from "../images/instagram.png";
import face from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import behance from "../images/behance.png";

function Footer() {
  return (
    <Pie>
      <div className="contpie">
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="instagram" width="30px" />
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="instagram" width="30px" />
            <i className="linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={face} alt="facebook" width="30px" />
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.behance.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={behance} alt="instagram" width="30px" />
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="rightspie">
          © 2024 Your Porfolio. All rights reserved.
                      Terms and Conditions
          
          
            Privacy Policy
         
        </p>
      </div>
    </Pie>
  );
}

export default Footer;
const Pie = styled.div`
  .contpie {
    background-color: #07d3d3; /* Color oscuro */
    color: #ccc; /* Color del texto */
    text-align: center;
    padding: 20px 10px;
    font-size: 14px;
  }

  a {
    align-items: center;
    padding-right: 10px;
  }

  .contpie .social-icons a {
    color: #ccc;
    margin: 0 10px;
    font-size: 20px;
    text-decoration: none;
  }

  .contpie a {
    color: #ccc;
    text-decoration: none;
    margin: 0 5px;
  }

  .contpie a:hover {
    text-decoration: underline;
  }
  .rightspie {
    color: white;
  }
`;
