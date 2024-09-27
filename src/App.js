import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import MealList from "./components/MealList";
import MealDetail from "./components/MealDetail";
import SearchBar from "./components/SearchBar";
import PopularIngredients from "./components/PopularIngredients";
import { fetchMeals } from "./redux/mealsSlice";
import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="app">
        <header>
          <SearchBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MealList />} />
            <Route path="/meal/:id" element={<MealDetail />} />
          </Routes>
          <PopularIngredients />
        </main>
      </div>
    </Router>
  );
};

export default App;
