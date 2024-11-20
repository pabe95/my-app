import React, { useState } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <NavContainer>
      <Link to="/">
        <h2>
          Your <span>Portfolio</span>
        </h2>
      </Link>
      <div className={`links ${clicked ? "active" : ""}`}>
        <Link onClick={handleClick} to="/">
          Home
        </Link>
        <Link onClick={handleClick} to="/portfolio">
          Portfolio
        </Link>
        <Link onClick={handleClick} to="/contact">
          Contact
        </Link>
      </div>
      <div className="burguer">
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}> </BgDiv>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
  h2 {
    color: white;
    font-weight: 400;
    padding-left: 30px;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #0596a5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;

    a {
      color: #0596a5;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;

      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #fb494d;
  top: -700px;
  left: -1000px;
  height: 100%;
  width: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;
