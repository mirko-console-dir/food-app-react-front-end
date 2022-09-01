import React from "react";

const Products = ({ products }) => {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="container bg-dark d-flex justify-content-center align-items-center"
      >
        {products.map((product) => (
          <div className="card" style={{ width: "18rem" }} key={product.id}>
            {/*  <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">
                {product.name} {product.id}
              </h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
