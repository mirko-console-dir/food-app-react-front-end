import React, { useState, useEffect } from "react";

const HeaderH = () => {
  // Cube
  let x = 0;
  let y = 20;
  let z = 0;
  let cube = document.querySelector(".cube");

  /* conrtols */
  const topXcontrol = () => {
    cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  };
  const botXcontrol = () => {
    cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  };
  const leftYcontrol = () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg) `;
  };
  const rightYcontrol = () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg) `;
  };
  const topZcontrol = () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg) `;
  };
  const botZcontrol = () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg) `;
  };
  /* conrtols */
  /* autoplay */
  const [isAutoplay, setAutoplay] = useState(false);
  useEffect(() => {
    setAutoplay(true);
    let interval;
    const play = () => {
      if (isAutoplay) {
        interval = setInterval(() => {
          cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
        }, 100);
      } else {
        clearInterval(interval);
      }
    };
    play();
  }, [isAutoplay]);
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
        {/* Controls for twist*/}
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
