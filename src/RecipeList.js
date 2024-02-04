// Importing React 
import React from "react";

// Component to render a recipe
function RecipeView({recipe, deleteRecipe}) {  
  // Component returns a table row with recipe details
  return (
    <tr className="recipe">
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt={recipe.name}/></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td>{recipe.preparation}</td>
      <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
    </tr>
  );
}

// Component to render the list of recipes
function RecipeList({recipes, deleteRecipe}) {
  
  // Component returns a table with a row for each recipe
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            // The RecipeView component is used to render each recipe
            <RecipeView
              // Recipes are deleted by their index
              deleteRecipe={() => deleteRecipe(index)}
              // Key for react list should be unique, so we use index here. In a real application unique id is preferred
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Exporting component for use in other files
export default RecipeList;