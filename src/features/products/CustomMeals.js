import { React, useEffect } from "react";

import { useSelector } from "react-redux";

const CustomMeals = () => {
  const customMeals = useSelector((state) => state.productsMeal);

  return (
    <>
      {customMeals.map((meal) => (
        <div className="meal " key={meal.id}>
          <p>{meal.name}</p>
          {meal.ingredients?.map((ingredient) => ingredient.name)}
        </div>
      ))}
    </>
  );
};
export default CustomMeals;
