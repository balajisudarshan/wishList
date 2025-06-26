import React from "react";
import recipeImg from '../assets/recipe.png';
import './Home.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RecipeItem from "../components/RecipeItem.jsx"
const Home = () => {
  return (
    <>

      <section className="home">
        <div className="left">
          <h1>Food recipe</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            quos modi obcaecati incidunt amet corporis sit hic. Minima quod odit
            eius, error deleniti deserunt dicta optio eum in sunt aperiam!
          </h5>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img src={recipeImg} width="320px" height="300px"/>
        </div>
      </section>
     <div className="bg">
      
     </div>
    <div className="recipe">
      <RecipeItem/>
    </div>
    </>
  );
};

export default Home;
