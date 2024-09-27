import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MealList = () => {
  const meals = useSelector((state) => state.meals.meals);

  return (
    <div className="meal-list">
      <h2>Latest Meals</h2>
      <div className="meals-grid">
        {meals.map((meal) => (
          <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
            <div className="meal-item">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MealList;
