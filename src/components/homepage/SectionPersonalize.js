import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomItemContainer from "../customItem/customItemContainer";
import {
  createCustomItem,
  removeCustomItem,
  addIngredient,
} from "../../features/customItem/customItemSlice";
import { addCartItem } from "../../features/cart/cartSlice";

class CustomItem {
  /* explicity prorieties in constructor for each new istance*/
  constructor(
    id,
    name_prod,
    price,
    image,
    description,
    amount,
    id_prod,
    ingredients,
    amountIngredients,
    total,
    isLoading
  ) {
    this.id = id;
    this.name_prod = name_prod;
    this.price = price;
    this.image = image;
    this.description = description;
    this.amount = amount;
    this.id_prod = id_prod;
    this.ingredients = ingredients;
    this.amountIngredients = amountIngredients;
    this.total = total;
    this.isLoading = isLoading;
  }
}
class Ingredient {
  /* explicity prorieties in constructor for each new istance*/
  constructor(id, name_variant, price, image, description, amount, id_variant) {
    this.id = id;
    this.name_variant = name_variant;
    this.price = price;
    this.image = image;
    this.description = description;
    this.amount = amount;
    this.id_variant = id_variant;
  }
}

const SectionPersonalize = () => {
  /* section LARAVEL DB */
  const imgUrlProducts = "http://127.0.0.1:8000/storage/images/products/";
  const imgUrlVariants =
    "http://127.0.0.1:8000/storage/images/products/variants/";
  const urlProducts = "http://127.0.0.1:8000/api/products";
  const urlVariants = "http://127.0.0.1:8000/api/variants";
  const [products, setProducts] = useState([]);
  const [variants, setVariants] = useState([]);
  const check = useRef();
  /* section LARAVEL DB */
  /* select slice from state in store */
  const { cartItems } = useSelector((store) => store.cart);
  const customItems = useSelector((store) => store.customItem.customItems);

  /* initialize dispatch */
  const dispatch = useDispatch();

  const guestConfirmProduct = () => {
    /* define where is check */
    const boxPosition = document.querySelector(".check-position");
    /* get data position */
    const rect = boxPosition.getBoundingClientRect();
    const productsAll = document.querySelectorAll(".product");
    productsAll.forEach((product) => {
      const imageProd = product.children[0].currentSrc;
      const idProd = product.children[1].innerText;
      const nameProd = product.children[2].innerText;
      const descriprionProd = product.children[3].innerText;
      const priceProd = product.children[4].innerText;
      /*  console.log(nameProd);
      console.log(rect.x, rect.y); */
      const rectProd = product.getBoundingClientRect();
      /* console.log(rectProd.x, rectProd.y); */
      /* CREATE PAYLOAD */
      if (rect.x === rectProd.x && rect.y === rectProd.y) {
        const n = new CustomItem(
          cartItems.length === 0
            ? 0
            : cartItems.length === 1
            ? 1
            : cartItems.length,
          nameProd,
          Number(priceProd),
          imageProd,
          descriprionProd,
          1,
          Number(idProd),
          [],
          0,
          Number(priceProd) * 1,
          true
        );

        dispatch(createCustomItem(n));
      }
      /* / CREATE PAYLOAD */
    });
  };

  const removeCustom = () => {
    dispatch(removeCustomItem());
  };

  const guestConfirmVariant = () => {
    /* define where is check and data about position*/
    const boxPosition = document.querySelector(".check-position");
    const rect = boxPosition.getBoundingClientRect();
    /*/// define where is check  and data about position */

    const variantsAll = document.querySelectorAll(".variant");
    variantsAll.forEach((variant) => {
      /* variant data */
      const imageVar = variant.children[0].currentSrc;
      const idVar = variant.children[1].innerText;
      const nameVar = variant.children[2].innerText;
      const descriprionVar = variant.children[3].innerText;
      const priceVar = variant.children[4].innerText;
      /*/// variant data */
      /* variant position */
      const rectVar = variant.getBoundingClientRect();
      /*/// variant position */
      if (rect.x === rectVar.x && rect.y === rectVar.y) {
        const v = new Ingredient(
          customItems[0].ingredients.length === 0
            ? 0
            : customItems[0].ingredients.length === 1
            ? 1
            : customItems[0].ingredients.length,
          nameVar,
          Number(priceVar),
          imageVar,
          descriprionVar,
          1,
          Number(idVar)
        );
        /* CHECK QTY INGREDIENT */
        /* ADD INGREDIENT */
        dispatch(addIngredient(v));
        /*/// ADD INGREDIENT */
      }
    });
  };

  const submitProd = () => {
    const prod = customItems[0];
    console.log(prod);
    dispatch(addCartItem(prod));
    dispatch(removeCustomItem());
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
          <CustomItemContainer />

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
        onClick={() => guestConfirmVariant()}
        className="text-white bg-primary font-weight-bold watch-btn"
        style={{ marginBottom: "10em" }}
      >
        <i className="fas fa-angle-down" />
        Scegli Variante per prodotto
      </button>
      <button
        onClick={() => guestConfirmProduct()}
        className="text-white bg-primary font-weight-bold watch-btn"
      >
        <i className="fas fa-angle-down" />
        Scegli Prod
      </button>
      <button
        onClick={() => removeCustom()}
        className="text-white bg-primary font-weight-bold watch-btn"
        style={{ marginBottom: "5em" }}
      >
        <i className="fas fa-angle-down" />
        Remove custom
      </button>
      <button
        onClick={() => submitProd()}
        className="text-white bg-secondary font-weight-bold watch-btn"
        style={{ marginBottom: "30em" }}
      >
        <i className="fas fa-angle-down" />
        Invia al carrello il prodotto
      </button>

      {/* End of Watch Button */}
    </>
  );
};
export default SectionPersonalize;
