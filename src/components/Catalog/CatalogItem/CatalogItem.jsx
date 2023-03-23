import { Link } from "react-router-dom";

export function CatalogItem({ _id, title, preparation, cook, imageUrl }) {
  return (
    <div className="recipe">
      <img src={imageUrl} alt="" className="img recipe-img" />
      <h5>{title}</h5>
      <p>
        Prep: {preparation}min | Cook: {cook}min
      </p>
      <Link to={`/catalog/${_id}`} className="detailsBtn">
        Details
      </Link>
    </div>
  );
}
