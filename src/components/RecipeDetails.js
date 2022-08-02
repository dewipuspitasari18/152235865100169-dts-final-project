import React from "react";
import { v4 as uuidv4 } from "uuid";
import PrivateComponent from "../containers/PrivateComponent";

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
    return (
      <PrivateComponent>
        <ul key={uuidv4()} className="ingredient-list">
          <li className="ingredient-text">{ingredient.text}</li>
          <li className="ingredient-weight">Weight - {ingredient.weight}</li>
        </ul>
      </PrivateComponent>
    );
  });
};

export default RecipeDetails;
