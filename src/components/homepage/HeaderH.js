import React from "react";
const HeaderH = () => {
  return (
    <>
      {/* Cube */}
      <div className="cube-wrapper">
        <div className="cube">
          <div className="front-side">
            <img src="images/iphone.png" />
          </div>
          <div className="back-side center">
            <i className="fab fa-apple" />
          </div>
        </div>
        {/* Controls for movement*/}
        <div className="controls">
          <a href="#" className="top-x-control">
            <i className="fas fa-arrow-up " />
          </a>
          <a href="#" className="bottom-x-control">
            <i className="fas fa-arrow-down " />
          </a>
          <a href="#" className="left-y-control">
            <i className="fas fa-arrow-left " />
          </a>
          <a href="#" className="right-y-control">
            <i className="fas fa-arrow-right " />
          </a>
          <a href="#" className="top-z-control">
            <i className="fas fa-arrow-down " />
          </a>
          <a href="#" className="bottom-z-control">
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
