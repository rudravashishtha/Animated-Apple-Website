import React from "react";
import IPhone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

function Jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      // ? means that if the element is undefined the further part will not execute
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={IPhone} alt="iPhone 14 Pro" />
      <p className="text">Big and Bigger.</p>
      <span className="description">
        From ₹15000/mo. for 24 mo. or ₹159000 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>Learn More</a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="Holding-iphone" />
    </div>
  );
}

export default Jumbotron;
