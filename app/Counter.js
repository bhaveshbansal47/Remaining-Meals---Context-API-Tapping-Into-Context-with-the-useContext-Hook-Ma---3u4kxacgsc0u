'use client'
import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
    const {meals} = useContext(MealsContext)
    const remainingMeals = meals.reduce((val, meal) => {
        return meal.ticked ? val - 1 : val
    }, meals.length)
    return (
        <div>
            <h3>Meals Remaining: {remainingMeals}</h3>
        </div>
    )
}

export default Counter;