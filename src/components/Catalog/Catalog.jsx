import { useRecipeContext } from "../../contexts/RecipeContext.js";
import { CatalogItem } from "./CatalogItem/CatalogItem.jsx";

export function Catalog() {
  const { recipes } = useRecipeContext();

  return (
    <section className="recipes-container">
      <h1 className="recipes-heading">Recipes Catalog</h1>
      <div className="recipes-list">
        {/* signle recipe */}
        {recipes.map((x) => (
          <CatalogItem key={x._id} {...x} />
        ))}

        {recipes.length === 0 && <h3 className="no-recipes">No recipes yet</h3>}
      </div>
    </section>
  );
}
