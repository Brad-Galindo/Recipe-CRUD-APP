// Import core dependencies from React
import React, { useState } from "react";
// Import CSS styling
import "./App.css";
// Import components and data
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

// Main "App" component
function App() {
  // Use state to manage recipes, initializing to RecipeData
  const [recipes, setRecipes] = useState(RecipeData);

  // A handler function for deleting a recipe by index
  const deleteRecipe = (indexToDelete) => 
    setRecipes((recipes) => 
      recipes.filter((recipes, index) => index !== indexToDelete));

  // Return JSX for rendering component
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

// Export App component for use in other files
export default App;