import { useForm } from "react-hook-form";
import { useRecipeContext } from "../../contexts/RecipeContext.js";

export const CreateRecipe = () => {
  const { createNewRecipe } = useRecipeContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createNewRecipe(data);
  };

  return (
    <section>
      <div className="center">
        <h1>Create Recipe</h1>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="txt_field">
            <input
              type="text"
              {...register("title", {
                required: true,
                maxLength: 50,
              })}
            />

            {errors.title && errors.title.type === "required" && (
              <p className="errorMsg">Title is required!</p>
            )}
            {errors.title && errors.title.type === "maxLength" && (
              <p className="errorMsg">Title must be maximum 50 characters!</p>
            )}
            <span></span>
            <label>Title</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              {...register("description", {
                required: false,
                maxLength: 400,
              })}
            />

            {errors.description && errors.description.type === "maxLength" && (
              <p className="errorMsg">Max description length is 400</p>
            )}
            <span></span>
            <label>Description</label>
          </div>
          <div className="txt_field">
            <input
              type="number"
              {...register("preparation", {
                required: true,
                min: 0,
                max: 400,
              })}
            />

            {/* Validate preparation */}
            {errors.preparation && errors.preparation.type === "required" && (
              <p className="errorMsg">Preparation is required</p>
            )}
            {errors.preparation && errors.preparation.type === "min" && (
              <p className="errorMsg">Min preparation time is 0</p>
            )}
            {errors.preparation && errors.preparation.type === "max" && (
              <p className="errorMsg">Max preparation time is 400</p>
            )}
            <span></span>
            <label>Preparation Time (in minutes)</label>
          </div>
          <div className="txt_field">
            <input
              type="number"
              {...register("cook", {
                required: true,
                min: 0,
                max: 400,
              })}
            />

            {/* Validate cook time */}
            {errors.cook && errors.cook.type === "required" && (
              <p className="errorMsg">Cook is required</p>
            )}
            {errors.cook && errors.cook.type === "min" && (
              <p className="errorMsg">Min cook time is 0</p>
            )}
            {errors.cook && errors.cook.type === "max" && (
              <p className="errorMsg">Max cook time is 400</p>
            )}
            <span></span>
            <label>Cook Time (in minutes)</label>
          </div>
          <div className="txt_field">
            <input
              type="number"
              {...register("servings", {
                required: true,
                min: 0,
                max: 50,
              })}
            />

            {/* Validate servings number */}
            {errors.servings && errors.servings.type === "required" && (
              <p className="errorMsg">Servings are required</p>
            )}
            {errors.servings && errors.servings.type === "min" && (
              <p className="errorMsg">Min servings time is 0</p>
            )}
            {errors.servings && errors.servings.type === "max" && (
              <p className="errorMsg">Max servings time is 50</p>
            )}
            <span></span>
            <label>Number of servings</label>
          </div>
          <div className="txt_field">
            {/* <input type="number" name="ingredients"  /> */}
            <textarea
              {...register("ingredients", {
                required: true,
                minLength: 10,
                maxLength: 1000,
              })}
            ></textarea>

            {/* Validate Ingredients */}
            {errors.ingredients && errors.ingredients.type === "required" && (
              <p className="errorMsg">Ingredients are required</p>
            )}
            {errors.ingredients && errors.ingredients.type === "minLength" && (
              <p className="errorMsg">Min ingredients characters are 10</p>
            )}
            {errors.ingredients && errors.ingredients.type === "maxLength" && (
              <p className="errorMsg">Max ingredients characters are 1000</p>
            )}
            <span></span>
            <label>List of ingredients</label>
          </div>
          <div className="txt_field">
            {/* <input type="number" name="method"  /> */}
            <textarea
              {...register("method", {
                required: true,
                maxLength: 1000,
                minLength: 10,
              })}
            ></textarea>

            {/* Validate Method */}
            {errors.method && errors.method.type === "required" && (
              <p className="errorMsg">Method is required</p>
            )}
            {errors.method && errors.method.type === "minLength" && (
              <p className="errorMsg">Min ingredients characters are 10</p>
            )}
            {errors.method && errors.method.type === "maxLength" && (
              <p className="errorMsg">Max ingredients characters are 1000</p>
            )}
            <span></span>
            <label>Method</label>
          </div>
          <div className="txt_field">
            {/* <input type="number" name="method"  /> */}
            <input
              {...register("imageUrl", {
                required: true,
                pattern: /(https?:\/\/.*\.(?:png|jpg))/i,
              })}
            />

            {errors.imageUrl && errors.imageUrl.type === "required" && (
              <p className="errorMsg">ImageUrl is required</p>
            )}
            {errors.imageUrl && errors.imageUrl.type === "pattern" && (
              <p className="errorMsg">ImageUrl should be http or https</p>
            )}
            <span></span>
            <label>Image</label>
          </div>
          <input type="submit" value="Create recipe" />
          <div className="signup_link">
            {/* <!-- Already a member? <a href="#">Log in</a> --> */}
          </div>
        </form>
      </div>
    </section>
  );
};
