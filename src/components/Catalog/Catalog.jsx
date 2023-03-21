export function Catalog() {
  return (
    <section className="recipes-container">
      <h1 className="recipes-heading">Recipes Catalog</h1>
      <div className="recipes-list">
        signle recipe
        <div href="" className="recipe">
          <img src="/images/food.jpg" alt="" className="img recipe-img" />
          <h5>French fries</h5>
          <p>Prep: 15min | Cook: 5min</p>
          <button className="detailsBtn">Details</button>
        </div>
        <div href="" className="recipe">
          <img src="/images/chicken.jpg" alt="" className="img recipe-img" />
          <h5>Chicken Leg</h5>
          <p>Prep: 25min | Cook: 60min</p>
          <button className="detailsBtn">Details</button>
        </div>
        <div href="" className="recipe">
          <img src="/images/spaghetti.jpg" alt="" className="img recipe-img" />
          <h5>Spaghetti Bolognese</h5>
          <p>Prep: 15min | Cook: 5min</p>
          <button className="detailsBtn">Details</button>
        </div>
        <div href="" className="recipe">
          <img src="/images/food.jpg" alt="" className="img recipe-img" />
          <h5>French fries</h5>
          <p>Prep: 15min | Cook: 5min</p>
          <button className="detailsBtn">Details</button>
        </div>
      </div>
    </section>
  );
}
