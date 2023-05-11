import React from "react";

export default function Food({ food }) {
  return (
    <div className="food-container">
      <h2 className="food-title">{food.title}</h2>
      <p className="food-description">{food.description}</p>
      <img className="food-image" src={food.image} alt={food.title} />
      <p className="food-ingredients">Ingredients: {food.ingredients}</p>
      <p className="food-instructions">Instructions: {food.instructions}</p>
    </div>
  );
}
