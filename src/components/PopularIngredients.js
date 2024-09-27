import React from "react";

const PopularIngredients = () => {
  const ingredients = ["Chicken", "Salmon", "Beef", "Pork"];

  return (
    <div className="popular-ingredients">
      <h2>Popular Ingredients</h2>
      <div className="ingredients-grid">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-item">
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
              alt={ingredient}
            />
            <p>{ingredient}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularIngredients;
