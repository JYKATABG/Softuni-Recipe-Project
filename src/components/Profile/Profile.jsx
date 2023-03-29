import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/UserContext.js";
import { recipeServiceFactory } from "../../services/recipeService.js";
import { ProfileRecipe } from "./ProfileRecipe/ProfileRecipe.jsx";

export const Profile = () => {
  const { username, userEmail, userId } = useAuthContext();
  const [userRecipes, setUserRecipes] = useState([]);
  const recipeService = recipeServiceFactory();

  useEffect(() => {
    recipeService.getAll().then((data) => {
      setUserRecipes(data);
      setUserRecipes((state) => state.filter((x) => x._ownerId === userId));
    });
  }, [userId]);

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
              {/* {userRecipes
                .filter((x) => x._ownerId === userId)
                .map((x) => (
                  <ProfileRecipe key={x._id} {...x} />
                ))} */}
              {userRecipes.map((x) => (
                <ProfileRecipe key={x._id} {...x} />
              ))}

              {userRecipes.length === 0 && (
                <p className="no-recipes">User doesn't own any recipes</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
