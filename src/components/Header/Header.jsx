import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import { Link } from "react-router-dom";

export function Header() {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <header>
      <div className="container">
        <h1>HANSA</h1>
        <div className="navbar">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/catalog"}>CATALOG</Link>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <Link to={"/create-recipe"}>CREATE RECIPE</Link>
                </li>
                <li>
                  <Link to={"/profile"} className="profile-picture">
                    <img
                      src="https://ubisoft-avatars.akamaized.net/30d2365e-7ce9-4f47-9df7-5c285ba6f3e3/default_256_256.png"
                      alt=""
                    />
                  </Link>
                </li>
              </>
            )}

            {!isAuthenticated && (
              <>
                <li>
                  <Link to={"/login"}>LOG IN</Link>
                </li>
                <li>
                  <Link className="reservation" to={"/register"}>
                    REGISTER
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
