import React from "react";
import Navbar from "../navbars/Navbar";
import HeaderH from "./HeaderH";
import SectionOverEffect from "./SectionOverEffect";

const Home = () => {
  return (
    <>
      <section id="section-1" className="section-1">
        <Navbar />
        <HeaderH />
      </section>
      <section id="section-2" className="section-2">
        <SectionOverEffect />
      </section>
    </>
  );
};
export default Home;
