# Recipe-CRUD-APP
 Recipe creating app

# Delicious Food Recipes App

This project is a simple React application for managing food recipes. It allows users to add, view, and delete recipes. It is delivered with a pre-loaded set of recipes.

## Project structure

The project includes the following main files:

- `App.js`: The main entry point for the app. It imports and uses other components, maintains the state for the recipes, and manages the deletion of recipes.

- `RecipeCreate.js`: A component for creating new recipes. It contains a form where users can enter details about a recipe, including name, cuisine, photo, ingredients, and preparation. On form submission, it adds a new recipe to the list of recipes.

- `RecipeList.js`: A component for displaying a list of recipes. It takes in the recipes as a prop and generates a table for displaying the recipes. Each row in the table corresponds to one recipe and includes a delete button for deleting the recipe.

- `RecipeData.js`: A JavaScript module that exports initial data for recipes as an array of objects. Each object corresponds to one recipe.

-  `App.css`: This file contains all the stylings used across the app.

## How to run the project

1. Clone this repository to your local machine.
2. Navigate into the project directory.
3. Install dependencies:
4. Start the app in development mode:
5. Open http://localhost:3000 to view it in a web browser.

## Features

- View a list of recipes with their name, cuisine, photo, ingredients, and preparation.
- Delete an existing recipe from the list.
- Create a new recipe by filling out the form and clicking the 'Create' button.

## Future enhancements

- Provide update functionality for recipes.
- Store the recipes permanently using local storage or a back-end API.
- Validate form data when creating a recipe.

## Script Commands

To start the development server run `npm start`
To create a production build run `npm run build`
To run tests run `npm test` 

## Project Status

This project is currently in development, more features are to be added soon. Bug reports and pull requests are welcome.

