import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Purchase = ({ purchase }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="purchase" key={purchase.id}>
        <p>{purchase.id}</p>
        <p>{purchase.fullname}</p>
        <p>{purchase.email}</p>
        <p>{purchase.phone}</p>
        <p>{purchase.cart_json}</p>
        <p>{purchase.amount}</p>
      </div>
    </>
  );
};

export default Purchase;
