import { Link } from "react-router-dom";

export const ProfileRecipe = ({ title, imageUrl, _id }) => {
  return (
    <div className="user-recipe">
      <p className="user-recipe-title">{title}</p>
      <img className="userProfileImage" alt="recipe-img" src={imageUrl} />
      <Link className="button" to={`/catalog/${_id}`}>
        Details
      </Link>
    </div>
  );
};
