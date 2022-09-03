import React from "react";
import { useSelector } from "react-redux";

const CustomMeals = ({}) => {
  const customMeals = useSelector((state) => state.productsMeal);
  return (
    <>
      {customMeals.map((meal) => (
        <div className="meal bg-primary" key={meal.id}>
          <p>{meal.name}</p>
        </div>
      ))}
    </>
  );
};
export default CustomMeals;
