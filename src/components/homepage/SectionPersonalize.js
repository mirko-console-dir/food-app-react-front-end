/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProdMeal,
  removeProdMeal,
} from "../../features/products/customMealsSlice";

const SectionPersonalize = () => {
  /* sezione LARAVEL DB */
  const imgUrlProducts = "http://127.0.0.1:8000/storage/images/products/";
  const imgUrlVariants =
    "http://127.0.0.1:8000/storage/images/products/variants/";
  const urlProducts = "http://127.0.0.1:8000/api/products";
  const urlVariants = "http://127.0.0.1:8000/api/variants";
  const [products, setProducts] = useState([]);
  const [variants, setVariants] = useState([]);
  /* sezione LARAVEL DB */
  /* select slice from state in store */
  const customProd = useSelector((state) => state.productsMeal);
  console.log(customProd);
  /* initialize dispatch */
  const dispatch = useDispatch();

  const check = useRef();

  const checkPositionProduct = () => {
    /* define where is check */
    const boxPosition = document.querySelector(".check-position");
    /* get data position */
    const rect = boxPosition.getBoundingClientRect();
    const productsAll = document.querySelectorAll(".product");
    productsAll.forEach((product) => {
      const nameProd = product.children[2].innerText;
      /*  console.log(nameProd);
      console.log(rect.x, rect.y); */
      const rectProd = product.getBoundingClientRect();
      /* console.log(rectProd.x, rectProd.y); */
      if (rect.x === rectProd.x && rect.y === rectProd.y) {
        console.log("nome prodotto:  " + nameProd);
      }
    });
  };
  const checkPositionVariant = () => {
    /* define where is check */
    const boxPosition = document.querySelector(".check-position");
    /* get data position */
    const rect = boxPosition.getBoundingClientRect();
    const variantsAll = document.querySelectorAll(".variant");
    variantsAll.forEach((variant) => {
      const nameVariant = variant.children[2].innerText;
      /*  console.log(nameProd);
      console.log(rect.x, rect.y); */
      const rectProd = variant.getBoundingClientRect();
      /* console.log(rectProd.x, rectProd.y); */
      if (rect.x === rectProd.x && rect.y === rectProd.y) {
        console.log("nome variant:  " + nameVariant);
      }
    });
  };

  let axisY = 0;
  let axisX = 0;
  const hideControl = () => {
    const watchTopControl = document.querySelector(".watch-top-control");
    const watchBottomControl = document.querySelector(".watch-bottom-control");
    const watchRightControl = document.querySelector(".watch-right-control");
    const watchLeftControl = document.querySelector(".watch-left-control");
    const productsAll = document.querySelectorAll(".product");
    const variantsAll = document.querySelectorAll(".variant");
    const hideProdBtn = productsAll?.length * 70;
    const hideVariantBtn = variantsAll?.length * 70;
    if (axisY === -hideProdBtn) {
      watchTopControl.classList.add("hideControl");
    } else {
      watchTopControl.classList.remove("hideControl");
    }
    if (axisY === hideProdBtn) {
      watchBottomControl.classList.add("hideControl");
    } else {
      watchBottomControl.classList.remove("hideControl");
    }
    if (axisX === hideVariantBtn) {
      watchRightControl.classList.add("hideControl");
    } else {
      watchRightControl.classList.remove("hideControl");
    }
    if (axisX === -hideVariantBtn) {
      watchLeftControl.classList.add("hideControl");
    } else {
      watchLeftControl.classList.remove("hideControl");
    }
  };
  const topControl = () => {
    const watchCases = document.querySelector(".watch-cases");
    watchCases.style.marginTop = `${(axisY -= 70)}rem`;
    setTimeout(() => {
      checkPositionProduct();
    }, 1100);
    hideControl();
  };
  const bottomControl = () => {
    const watchCases = document.querySelector(".watch-cases");
    watchCases.style.marginTop = `${(axisY += 70)}rem`;
    setTimeout(() => {
      checkPositionProduct();
    }, 1100);
    hideControl();
  };
  const rightControl = () => {
    const watchBands = document.querySelector(".watch-bands");
    watchBands.style.marginRight = `${(axisX += 70)}rem`;
    setTimeout(() => {
      checkPositionVariant();
    }, 1100);
    hideControl();
  };
  const leftControl = () => {
    const watchBands = document.querySelector(".watch-bands");
    watchBands.style.marginRight = `${(axisX -= 70)}rem`;
    setTimeout(() => {
      checkPositionVariant();
    }, 1100);
    hideControl();
  };
  const manageClick = () => {
    dispatch(addProdMeal({ name: "ciao" }));
  };

  useEffect(() => {
    fetch(urlProducts)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
    fetch(urlVariants)
      .then((res) => res.json())
      .then((variants) => {
        setVariants(variants);
      });
    /* set distance rendering */
    const watchBands = document.querySelector(".watch-bands");
    /* fix distance */
    if (watchBands?.childElementCount % 2 === 1) {
      watchBands.style.marginLeft = "35rem";
    } else {
      watchBands.style.marginLeft = "0";
    }
    /* set distance rendering */
    return () => {};
  }, []);
  return (
    <>
      <div className="watches center">
        {/* Watch Bands */}
        <div className="watch-bands center">
          {/* variants image.... */}
          {variants.map((variant) => (
            <div className="variant" key={variant.id}>
              <img
                src={imgUrlVariants + variant.image_primary}
                className="watch-band-img"
                alt="image_primary"
              />
              <p style={{ display: "none" }}>{variant.id}</p>
              <p style={{ display: "none" }}>{variant.name}</p>
              <p style={{ display: "none" }}>{variant.description}</p>
              <p style={{ display: "none" }}>{variant.price}</p>
            </div>
          ))}
        </div>
        {/* End of Watch Bands */}
        {/* variants image.... */}
        {/* Products images */}
        {/* Watch Cases */}
        <div className="watch-cases center">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img
                src={imgUrlProducts + product.image_primary}
                className="watch-case-img"
                alt="image_primadry"
              />

              <p style={{ display: "none" }}>{product.id}</p>
              <p style={{ display: "none" }}>{product.name}</p>
              <p style={{ display: "none" }}>{product.description}</p>
              <p style={{ display: "none" }}>{product.price}</p>

              {/*  <div className="card-body">
                <h5 className="card-title">
                  {product.name} {product.id}
                </h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.category.name}</p>
              </div> */}
            </div>
          ))}
        </div>
        {/* End of Watch Cases */}
      </div>
      {/* End of Section 4 Watches */}
      <div ref={check} className="check-position">
        check
      </div>
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
      <div className="container form-products">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name product
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Ingredients
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {/* Watch Button */}
      <button
        onClick={() => manageClick()}
        className="text-white font-weight-bold watch-btn"
      >
        <i className="fas fa-angle-down" />
        send to store
      </button>
      {/* End of Watch Button */}
    </>
  );
};
export default SectionPersonalize;
