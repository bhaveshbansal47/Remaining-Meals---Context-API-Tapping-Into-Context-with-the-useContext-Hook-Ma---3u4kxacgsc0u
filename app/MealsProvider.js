"use client";
import React, { createContext, useState } from "react";

const todaysMeals = [
  { id: 1, name: "Baked Beans" },
  { id: 2, name: "Baked Sweet Potatoes" },
  { id: 3, name: "Baked Potatoes" },
];

export const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (e) => {
    const mealId = Number(e.target.value);
    setMeals((meals) => {
      return meals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            ticked: !meal.ticked,
          };
        }
        return meal
      });
    });
  };

  return (
    <MealsContext.Provider value={{ meals, tickMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
