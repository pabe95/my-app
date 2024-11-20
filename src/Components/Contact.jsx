import React from "react";
import me from "../images/CONTACT.png";
import styled from "styled-components";

function contact() {
  return (
    <Contacts>
      <div className="conta">
        <div className="myInformation">
          <img className="meImage" src={me} alt="me" width="40%" />
          <div className="info">
            <p className="articles">Mail Address:</p>
            <p className="data">example@gmail.com / webmail@gmail.com</p>
            <p className="articles">Phone Number:</p>
            <p className="data">0123-456-789 / (9876-543-210)</p>
            <p className="articles">Office Address:</p>
            <p className="data">Kurigrame 5620 Dhaka #7 Bangladesh</p>
          </div>
        </div>
        <div className="formato">
          <p className="talk">
            Have You any Question? <br /> Let’s Talk...
          </p>
          <form>
            <input type="text" placeholder="Your Name" />

            <input type="text" placeholder="Your Email" />

            <input type="text" placeholder="Phone" />

            <textarea
              name="YourMesage"
              id="message"
              cols="30"
              rows="10"
              placeholder="YourMesage"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <hr />
    </Contacts>
  );
}

export default contact;

const Contacts = styled.div`
  .conta {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-bottom: 100px;
    background-color: #f8f8f8;
  }

  .articles {
    font-weight: bold;
    font-size: 20px;
  }
  .data {
    font-size: 15px;
    color: #616161;
  }

  .formato {
    padding-top: 70px;
  }
  .talk {
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 40px;
  }
  input {
    display: block;
    width: 80%;
    padding: 8px;
    margin-bottom: 20px;
    border-radius: 3px;
    font-size: 16px;
    font-family: Arial, sans-serif;
  }

  textarea {
    resize: none;
    width: 98%;
    min-height: 100px;
    max-height: 150px;
    font-family: Arial, sans-serif;
  }
  button {
    padding: 10px 15px;
    font-family: Arial, sans-serif;
    border-radius: 6px;
    margin: 15px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: #07d3d3;
    width: 40%;
    font-size: 16px;
  }
  button:hover {
    background-color: #fb494d;
  }
  hr {
    border: 1px solid #eceaea;
    margin: 0;
  }

  /---* Media Queries--- */ 
  
  @media (max-width: 768px) {
    .conta {
      flex-direction: column;
      align-items: center;
    }

    .myInformation {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .info {
      text-align: left;
      width: 100%;
      padding: 0 20px;
    }
    .data {
      font-size: 14px;
    }
    .articles {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .articles {
      font-size: 16px;
    }

    .data {
      font-size: 12px;
    }

    .meImage {
      width: 70%;
      margin: 0 auto;
    }
    .formato {
      width: 80%;
      padding-top: 0px;
    }
    .talk {
      font-size: 30px;
    }
    .myInformation {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
