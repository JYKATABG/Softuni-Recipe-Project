import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useService } from "../../hooks/useService.js";
import { recipeServiceFactory } from "../../services/recipeService.js";

export function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const recipeService = useService(recipeServiceFactory);

  useEffect(() => {
    recipeService.getOne(recipeId).then((data) => {
      setRecipe(data);
      console.log(data);
    });
  }, [recipeId]);

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
            <div className="owner-buttons">
              <Link href="" className="button">
                Edit
              </Link>
              <Link href="" className="button">
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
