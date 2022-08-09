/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

const SectionPersonalize = () => {
  let axisY = 0;
  let axisX = 0;
  const hideControl = () => {
    const watchTopControl = document.querySelector(".watch-top-control");
    const watchBottomControl = document.querySelector(".watch-bottom-control");
    const watchRightControl = document.querySelector(".watch-right-control");
    const watchLeftControl = document.querySelector(".watch-left-control");
    if (axisY === -280) {
      watchTopControl.classList.add("hideControl");
    } else {
      watchTopControl.classList.remove("hideControl");
    }
    if (axisY === 280) {
      watchBottomControl.classList.add("hideControl");
    } else {
      watchBottomControl.classList.remove("hideControl");
    }

    if (axisX === 280) {
      watchRightControl.classList.add("hideControl");
    } else {
      watchRightControl.classList.remove("hideControl");
    }

    if (axisX === -280) {
      watchLeftControl.classList.add("hideControl");
    } else {
      watchLeftControl.classList.remove("hideControl");
    }
  };
  const topControl = () => {
    const watchCases = document.querySelector(".watch-cases");
    watchCases.style.marginTop = `${(axisY -= 70)}rem`;
    hideControl();
  };
  const bottomControl = () => {
    const watchCases = document.querySelector(".watch-cases");
    watchCases.style.marginTop = `${(axisY += 70)}rem`;
    hideControl();
  };
  const rightControl = () => {
    const watchBands = document.querySelector(".watch-bands");
    watchBands.style.marginRight = `${(axisX += 70)}rem`;
    hideControl();
  };

  const leftControl = () => {
    const watchBands = document.querySelector(".watch-bands");
    watchBands.style.marginRight = `${(axisX -= 70)}rem`;
    hideControl();
  };

  return (
    <>
      <div className="watches center">
        {/* Watch Bands */}
        <div className="watch-bands center">
          <img
            src="images/watches/watch-band-1.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-2.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-3.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-4.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-5.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-6.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-7.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-8.jpg"
            className="watch-band-img"
          />
          <img
            src="images/watches/watch-band-9.jpg"
            className="watch-band-img"
          />
        </div>
        {/* End of Watch Bands */}
        {/* Watch Cases */}
        <div className="watch-cases center">
          <img
            src="images/watches/watch-case-1.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-2.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-3.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-4.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-5.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-6.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-7.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-8.png"
            className="watch-case-img"
          />
          <img
            src="images/watches/watch-case-9.png"
            className="watch-case-img"
          />
        </div>
        {/* End of Watch Cases */}
      </div>
      {/* End of Section 4 Watches */}
      {/* Watch Controls */}
      <button
        onClick={() => topControl()}
        className="watch-control watch-top-control center"
      >
        <i className="fas fa-angle-up" />
      </button>
      <button
        onClick={() => rightControl()}
        className="watch-control watch-right-control center"
      >
        <i className="fas fa-angle-right" />
      </button>
      <button
        onClick={() => bottomControl()}
        className="watch-control watch-bottom-control center"
      >
        <i className="fas fa-angle-down" />
      </button>
      <button
        onClick={() => leftControl()}
        className="watch-control watch-left-control center"
      >
        <i className="fas fa-angle-left" />
      </button>
      {/* End of Watch Controls */}
      {/* Watch Button */}
      <button className="watch-btn">Buy Now</button>
      {/* End of Watch Button */}
    </>
  );
};
export default SectionPersonalize;
