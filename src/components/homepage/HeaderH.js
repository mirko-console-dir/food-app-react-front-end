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
    // Slideshow
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

  /* slide class change */
  const [slideShow, setSlideShow] = useState(false);
  useEffect(() => {
    setSlideShow(true);
    /* CREATE show */
    const slideshow = () => {
      if (slideShow) {
        let a = 0;
        setInterval(() => {
          a++;
          const div = document.querySelector(".slideshow .change");
          const divs = document.querySelectorAll(".slideshow div");
          div.classList.remove("change");
          if (a < divs.length && div.nextElementSibling) {
            div.nextElementSibling.classList.add("change");
          } else {
            divs[0].classList.add("change");
            a = 0;
          }
        }, 6000);
        console.log("change");
        /* remove/add class change  */
      }
    };
    slideshow();
    // End of Slideshow
  }, [slideShow]);

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
          <button
            onClick={() => topXcontrol()}
            href="#"
            className="bg-transparent top-x-control"
          >
            <i className="fas fa-arrow-up " />
          </button>
          <button
            onClick={() => botXcontrol()}
            href="#"
            className="bg-transparent bottom-x-control"
          >
            <i className="fas fa-arrow-down " />
          </button>
          <button
            onClick={() => leftYcontrol()}
            href="#"
            className="bg-transparent left-y-control"
          >
            <i className="fas fa-arrow-left " />
          </button>
          <button
            onClick={() => rightYcontrol()}
            href="#"
            className="bg-transparent right-y-control"
          >
            <i className="fas fa-arrow-right " />
          </button>
          <button
            onClick={() => topZcontrol()}
            href="#"
            className="bg-transparent top-z-control"
          >
            <i className="fas fa-arrow-down " />
          </button>
          <button
            onClick={() => botZcontrol()}
            href="#"
            className="bg-transparent bottom-z-control"
          >
            <i className="fas fa-arrow-up " />
          </button>
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
      {/*  Slideshow */}
      <div className="slideshow">
        {/* CREATE slides */}
        {[...Array(5)].map((el, index) => (
          <div
            className={index === 0 ? "change" : " "}
            style={{
              backgroundImage: `url(images/slideshow/section-1-bg-${index}.jpg)`,
            }}
            key={index}
          ></div>
        ))}
        {/*  const slideshowDivs = () => {
      for (let i = 1; i <= 5; i++) {
        const div = document.createElement("div");

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        i === 1 && div.classList.add("change");

        document.querySelector(".slideshow").appendChild(div);
      }
    };
    slideshowDivs(); */}
      </div>
      {/*  End of Slideshow  */}
    </>
  );
};

export default HeaderH;
