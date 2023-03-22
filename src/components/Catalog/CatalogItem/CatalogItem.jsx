export function CatalogItem({ title, preparation, cook, imageUrl }) {
  return (
    <div href="" className="recipe">
      <img src={imageUrl} alt="" className="img recipe-img" />
      <h5>{title}</h5>
      <p>
        Prep: {preparation}min | Cook: {cook}min
      </p>
      <button className="detailsBtn">Details</button>
    </div>
  );
}
