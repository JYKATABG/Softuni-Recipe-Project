import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useService } from "../../hooks/useService.js";
import { recipeServiceFactory } from "../../services/recipeService.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import { useRecipeContext } from "../../contexts/RecipeContext.js";

export function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const recipeService = recipeServiceFactory();
  const { userId } = useContext(UserContext);
  const { deleteRecipe } = useRecipeContext();
  const navigate = useNavigate();

  useEffect(() => {
    recipeService.getOne(recipeId).then((data) => {
      setRecipe(data);
    });
  }, [recipeId]);

  const isOwner = recipe._ownerId === userId;

  const onDeleteRecipe = async () => {
    const choice = window.confirm(
      `Are you sure u want to delete ${recipe.title} recipe?`
    );

    if (choice) {
      await recipeService.delete(recipe._id);

      deleteRecipe(recipe._id);

      navigate("/catalog");
    }
  };

  const ingredientsData = recipe.ingredients;
  console.log(ingredientsData);

  return (
    <section>
      <div className="details-heading">
        <h1 id="name">{recipe.title}</h1>
        <p>Recipe description: {recipe.description}</p>
        <div className="recipe-requirements">
          <img src={recipe.imageUrl} alt="" className="details-img" />
          <div className="section-content">
            <h2 className="needed-times">
              Preparation: {recipe.preparation}m | Cook: {recipe.cook}m |
              Servings: {recipe.servings}{" "}
            </h2>
            <div className="all-ingredients">
              <h1>Ingredients:</h1>
              <div className="ingredients-info">
                <ul>
                  <li>{recipe.ingredients}</li>
                </ul>
              </div>
            </div>
            <div className="cooking-method">
              <h1>Method:</h1>
              <div className="method-info">
                <p>{recipe.method}</p>
              </div>
            </div>
            {isOwner && (
              <div className="owner-buttons">
                <Link to={`/catalog/${recipeId}/edit`} className="button">
                  Edit
                </Link>
                <button onClick={onDeleteRecipe} className="button">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
