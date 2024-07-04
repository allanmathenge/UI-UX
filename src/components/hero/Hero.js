import React from 'react';
import Items from "../items/Items";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">

        <div className="content-title">
          <h1 className="title">
            The biggest dealers in Houseware
          </h1>
        </div>

        <div className="content-paragraph">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adip id urna par iaculis euismod tempor inv sapien null null a ante dict lorem ipsum dolor sit amet, consectetur adip id urna par iac pul lorem ipsum dolor sit am et al. Lorem ipsum dolor sit amet, consect et dolor tempor.
          </p>
        </div>

        <div className="hero-btn">
          <button className="btn">See items<FaArrowDownLong className="btn-arrowDown" /></button>
        </div>
      </div>
      <hr />
      <Items />
    </div>
  )
}

export default Hero