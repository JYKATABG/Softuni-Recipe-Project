import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { recipeServiceFactory } from './services/recipeService.js';
import { useNavigate } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.js";
import { useService } from "./hooks/useService.js";

// Pages
import { About } from "./components/About/About.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe.jsx";
import { RecipeDetails } from "./components/RecipeDetails/RecipeDetails.jsx";
import { Profile } from "./components/Profile/Profile.jsx";
import { Logout } from "./components/Logout/Logout.jsx";
import { EditRecipe } from "./components/EditRecipe/EditRecipe.jsx";
import { RouteGuard } from "./components/common/RouteGuard.js";

function App() {

  const [recipes, setRecipes] = useState([]);
  const authRecipeService = recipeServiceFactory(); //userInfo.accessToken
  const navigate = useNavigate();

  useEffect(() => {
    authRecipeService.getAll()
      .then(data => {
        setRecipes(data);
      })
  }, [])

  const createNewRecipe = async (data) => {

    const newRecipe = await authRecipeService.create(data);

    setRecipes(state => ([...state, newRecipe]))

    navigate('/catalog');
  }


  const onRecipeEditSubmit = async (values, recipeId) => {
    try {
      const result = await authRecipeService.edit(recipeId, values)

      //Change state

      navigate(`/catalog/${recipeId}`)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <UserProvider>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog recipes={recipes} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<RouteGuard />} >
            <Route path="/create-recipe" element={<CreateRecipe createNewRecipe={createNewRecipe} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/catalog/:recipeId/edit" element={<EditRecipe onRecipeEditSubmit={onRecipeEditSubmit} />} />
          </Route>
          <Route path="/catalog/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </main>
    </UserProvider>
  );
}

export default App;
