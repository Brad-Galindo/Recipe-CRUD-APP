// We import the required hooks from React - useState
import React, { useState } from "react";

// Function component to create a new recipe
function RecipeCreate({recipes, setRecipes}) {
  // Initial state for the form data
  const initialFormState = { name: '', cuisine: '', photo: '', ingredients: '', preparation: '' };

  // Use state to manage form data
  const [formData, setFormData] = useState({...initialFormState});

  // This function will be used to handle changes in the form fields
  const handleChange = ({target}) => {
    const {value, name} = target;
    // We update the corresponding field in the state
    setFormData({...formData,[name]: value,});
  };

  // This function will handle the form submission
  const handleSubmit = (event) => {
    // We prevent the default form submission
    event.preventDefault();
    // We add the new recipe to the overall recipes list
    setRecipes([...recipes, formData]);
    // We reset the form fields
    setFormData(initialFormState);
  };

  return (
    // The form for a new recipe
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Each input field is bound to a piece of state and updates on change */}
            <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
            <td><input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} /></td>
            <td><input type="url" name="photo" value={formData.photo} onChange={handleChange} /></td>
            <td><textarea type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} /></td>
            <td><textarea type="text" name="preparation" value={formData.preparation} onChange={handleChange} /></td>
            <td>
              {/* The button that will trigger the form submission */}
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

// We export the component for use in other files
export default RecipeCreate;