import { useForm } from "react-hook-form";

export const CreateRecipe = ({ createNewRecipe }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    createNewRecipe(data);
  };

  return (
    <section>
      <div className="center">
        <h1>Create Recipe</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txt_field">
            <input type="text" required {...register("title")} />
            <span></span>
            <label>Title</label>
          </div>
          <div className="txt_field">
            <input type="text" required {...register("description")} />
            <span></span>
            <label>Description</label>
          </div>
          <div className="txt_field">
            <input type="number" required {...register("preparation")} />
            <span></span>
            <label>Preparation Time (in minutes)</label>
          </div>
          <div className="txt_field">
            <input type="number" required {...register("cook")} />
            <span></span>
            <label>Cook Time (in minutes)</label>
          </div>
          <div className="txt_field">
            <input type="number" required {...register("servings")} />
            <span></span>
            <label>Number of servings</label>
          </div>
          <div className="txt_field">
            {/* <input type="number" name="ingredients" required /> */}
            <textarea required {...register("ingredients")}></textarea>
            <span></span>
            <label>List of ingredients</label>
          </div>
          <div className="txt_field">
            {/* <input type="number" name="method" required /> */}
            <textarea required {...register("method")}></textarea>
            <span></span>
            <label>Method</label>
          </div>
          <div className="txt_field">
            {/* <input type="number" name="method" required /> */}
            <input required {...register("imageUrl")}></input>
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
