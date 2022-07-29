import React from "react";

// Cube
let x = 0;
let y = 20;
let z = 0;

const topXcontrol = () => {
  let cube = document.querySelector(".cube");
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
};

const botXcontrol = () => {
  let cube = document.querySelector(".cube");
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
};

const leftYcontrol = () => {
  let cube = document.querySelector(".cube");
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg) `;
};

const rightYcontrol = () => {
  let cube = document.querySelector(".cube");
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg) `;
};

const topZcontrol = () => {
  let cube = document.querySelector(".cube");
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg) `;
};

const botZcontrol = () => {
  let cube = document.querySelector(".cube");
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg) `;
};
const HeaderH = () => {
  return (
    <>
      {/* Cube */}
      <div className="cube-wrapper">
        <div className="cube">
          <div className="front-side">
            <img src="images/iphone.png" alt="image_product" />
          </div>
          <div className="back-side center">
            <i className="fab fa-apple" />
          </div>
        </div>
        {/* Controls for movement*/}
        <div className="controls">
          <a onClick={() => topXcontrol()} href="#" className="top-x-control">
            <i className="fas fa-arrow-up " />
          </a>
          <a
            onClick={() => botXcontrol()}
            href="#"
            className="bottom-x-control"
          >
            <i className="fas fa-arrow-down " />
          </a>
          <a onClick={() => leftYcontrol()} href="#" className="left-y-control">
            <i className="fas fa-arrow-left " />
          </a>
          <a
            onClick={() => rightYcontrol()}
            href="#"
            className="right-y-control"
          >
            <i className="fas fa-arrow-right " />
          </a>
          <a onClick={() => topZcontrol()} href="#" className="top-z-control">
            <i className="fas fa-arrow-down " />
          </a>
          <a
            onClick={() => botZcontrol()}
            href="#"
            className="bottom-z-control"
          >
            <i className="fas fa-arrow-up " />
          </a>
        </div>
        {/* End of Controls */}
      </div>
      {/* End of Cube */}
      {/* Banner */}
      <div className="section-1-banner center">
        <h1>← Best Gift</h1>
        <p>"Creativity is just connecting things."</p>
        <span> - Steve Jobs</span>
        <button type="button">Buy Now</button>
      </div>
      {/* End of Banner */}
    </>
  );
};

export default HeaderH;
