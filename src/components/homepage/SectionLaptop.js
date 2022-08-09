import React, { useState, useEffect } from "react";

const SectionOverEffect = () => {
  window.addEventListener("scroll", () => {
    const section3Content = document.querySelector(".section-3-content");
    if (
      window.pageYOffset + window.innerHeight >=
      section3Content.offsetTop + section3Content.offsetHeight / 2
    ) {
      section3Content.classList.add("change");
    }
  });

  return (
    <>
      {/* Section 3 Heading */}
      <h1 className="section-3-heading">MacBook Air</h1>
      {/* End of Section 3 Heading */}
      {/* Section 3 Content */}
      <div className="section-3-content center">
        {/* Section 3 Images */}
        <img
          src="images/MacBook/macbook-screen.png"
          className="macbook-img-1"
        />
        <img
          src="images/MacBook/macbook-keyboard.png"
          className="macbook-img-2"
        />
        {/* End of Section 3 Images */}
        {/* Section 3 Loading */}
        <div className="loading-wrapper">
          <div className="loading center">
            <i className="fab fa-apple" />
            <div className="progress-bar" />
          </div>
        </div>
        {/* End of Section 3 Loading */}
        {/* Section 3 Info */}
        <div className="macbook-info">
          <h2 className="macbook-info-heading">Light. Speed.</h2>
          <p className="macbook-price">Starting at $999</p>
          <button className="macbook-btn">Buy Now</button>
        </div>
        {/* End of Section 3 Info */}
      </div>
      {/* End of Section 3 Content */}
    </>
  );
};
export default SectionOverEffect;
