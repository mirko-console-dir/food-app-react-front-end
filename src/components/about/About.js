import { React, useState, useEffect } from "react";
import Navbar from "../navbars/Navbar";
import Products from "../products/Products";

/* const products = [
  {
    id: 0,
    name: "dasd",
    description: "sdsdfdsdsf",
    image_primary: "dasdasasddsa",
    image_secondary: "dasdsaasdds",
    image_ter: "dasdasdsa",
    video_mp4: "dadasads",
    product_code: "",
    category_id: 1,
    tax_id: 1,
  },
  {
    id: 1,
    name: "dasd",
    description: "sdsdfdsdsf",
    image_primary: "dasdasasddsa",
    image_secondary: "dasdsaasdds",
    image_ter: "dasdasdsa",
    video_mp4: "dadasads",
    product_code: "",
    category_id: 1,
    tax_id: 1,
  },
  {
    id: 2,
    name: "dasd",
    description: "sdsdfdsdsf",
    image_primary: "dasdasasddsa",
    image_secondary: "dasdsaasdds",
    image_ter: "dasdasdsa",
    video_mp4: "dadasads",
    product_code: "",
    category_id: 1,
    tax_id: 1,
  },
]; */
const About = () => {
  console.log("About");
  const url = "http://127.0.0.1:8000/api/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
    return () => {};
  }, []);
  return (
    <>
      <Navbar />
      <div>About this: TEST SECTION</div>
      <Products products={products} />
    </>
  );
};

export default About;
