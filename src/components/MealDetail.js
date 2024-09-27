import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMealDetail } from "../redux/mealsSlice";

const MealDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const meal = useSelector((state) => state.meals.selectedMeal);

  useEffect(() => {
    dispatch(fetchMealDetail(id));
  }, [dispatch, id]);

  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
    <div className="meal-detail">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetail;
