import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext.js";
import { useService } from "../../hooks/useService.js";
import { recipeServiceFactory } from "../../services/recipeService.js";

export const Profile = () => {
  const { username, userEmail, userId } = useContext(UserContext);
  // const recipeService = useService(recipeServiceFactory);

  // useEffect(() => {
  //   recipeService.getRecipeByUser(userId).then((data) => {
  //     console.log(data);
  //   });
  // }, [userId]);

  return (
    <div className="wrapper">
      <div className="left">
        <img
          src="https://ubisoft-avatars.akamaized.net/30d2365e-7ce9-4f47-9df7/-5c285ba6f3e3/default_256_256.png"
          alt="user"
          width="100"
        />
        <h4>{username}</h4>
        <div className="logout-container">
          <Link to={"/logout"} className="logout-link">
            Log Out
          </Link>
        </div>
        {/* <!-- <p>UI Developer</p> --> */}
      </div>
      <div className="right">
        <div className="info">
          <h3>Information</h3>
          <div className="info_data">
            <div className="data">
              <h4>Email</h4>
              <p>{userEmail}</p>
            </div>
            <div className="data">
              <h4>Followers</h4>
              <p>0</p>
            </div>
          </div>
        </div>

        <div className="projects">
          <h3>User Recipes</h3>
          <div className="recipe_data">
            <div className="all-recipes">
              <div className="user-recipe">
                <p className="user-recipe-title">Spaghetti Bolognese</p>
                <img
                  className="userProfileImage"
                  alt="recipe-img"
                  src="/images/spaghetti.jpg"
                />
                <a className="button" href="/memes/${meme._id}">
                  Details
                </a>
              </div>
              <div className="user-recipe">
                <p className="user-recipe-title">Fried Chicken</p>
                <img
                  className="userProfileImage"
                  alt="recipe-img"
                  src="images/chicken.jpg"
                />
                <a className="button" href="/memes/${meme._id}">
                  Details
                </a>
              </div>
              <div className="user-recipe">
                <p className="user-recipe-title">Fried Chicken</p>
                <img
                  className="userProfileImage"
                  alt="recipe-img"
                  src="images/chicken.jpg"
                />
                <a className="button" href="/memes/${meme._id}">
                  Details
                </a>
              </div>
              <div className="user-recipe">
                <p className="user-recipe-title">Fried Chicken</p>
                <img
                  className="userProfileImage"
                  alt="recipe-img"
                  src="images/chicken.jpg"
                />
                <a className="button" href="/memes/${meme._id}">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
