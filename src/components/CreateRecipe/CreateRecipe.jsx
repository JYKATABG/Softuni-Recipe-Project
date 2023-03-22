export const CreateRecipe = () => {
  return (
    <section>
      <div class="center">
        <h1>Create Recipe</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" name="title" required />
            <span></span>
            <label>Title</label>
          </div>
          <div class="txt_field">
            <input type="text" name="description" required />
            <span></span>
            <label>Description</label>
          </div>
          <div class="txt_field">
            <input type="number" name="preparation" required />
            <span></span>
            <label>Preparation Time (in minutes)</label>
          </div>
          <div class="txt_field">
            <input type="number" name="cook" required />
            <span></span>
            <label>Cook Time (in minutes)</label>
          </div>
          <div class="txt_field">
            <input type="number" name="servings" required />
            <span></span>
            <label>Number of servings</label>
          </div>
          <div class="txt_field">
            {/* <input type="number" name="ingredients" required /> */}
            <textarea name="preparation" required></textarea>
            <span></span>
            <label>List of ingredients</label>
          </div>
          <div class="txt_field">
            {/* <input type="number" name="method" required /> */}
            <textarea name="method" required></textarea>
            <span></span>
            <label>Method</label>
          </div>
          <input type="submit" value="Create recipe" />
          <div class="signup_link">
            {/* <!-- Already a member? <a href="#">Log in</a> --> */}
          </div>
        </form>
      </div>
    </section>
  );
};
