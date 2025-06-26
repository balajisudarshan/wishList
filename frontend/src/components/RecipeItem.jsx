import React from "react";
import { useLoaderData } from "react-router-dom";
import recipeImg from "../assets/recipe.png";
import { FaStopwatch, FaHeart } from "react-icons/fa";
import "./RecipeItem.css"; // link your CSS file

const RecipeItem = () => {
  const { recipes } = useLoaderData();

  return (
    <div className="card-container">
      <h1>Explore Recipes</h1>
      {recipes.map((item, index) => (
        <div className="card" key={item._id}>
          <div className="image">
            <img src={recipeImg} alt={item.title}/>
          </div>
          <div className="card-body">
            <div className="title">
              {item.title}
            </div>
            <div className="extras">
              <div className="time">
                <FaStopwatch/> {item.time}
              </div>
              <FaHeart/>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeItem;
