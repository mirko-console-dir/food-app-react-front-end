/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

const BannerHome = () => {
  return (
    <>
      <div className="airpods">
        {/* Section 5 Heading */}
        <h1 className="section-5-heading">AirPods</h1>
        {/* End of Section 5 Heading */}
        {/* Section 5 Images */}
        <img src="images/AirPods/airpods-1.png" className="airpods-img-1" />
        <img src="images/AirPods/airpods-2.png" className="airpods-img-2" />
        {/* End of Section 5 Images */}
        {/* Section 5 Buttons */}
        <div className="airpods-buttons">
          <button className="airpods-btn">Learn More</button>
          <button className="airpods-btn">Buy</button>
        </div>
        {/* End of Section 5 Buttons */}
      </div>
      {/* End of Section 5 Content */}
    </>
  );
};
export default BannerHome;
