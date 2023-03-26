import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { recipeServiceFactory } from './services/recipeService.js';
import { authServiceFactory } from './services/authService.js';
import { useNavigate } from "react-router-dom";

// Pages
import { About } from "./components/About/About.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe.jsx";
import { RecipeDetails } from "./components/RecipeDetails/RecipeDetails.jsx";
import { UserContext } from "./contexts/UserContext.js";
import { Profile } from "./components/Profile/Profile.jsx";
import { Logout } from "./components/Logout/Logout.jsx";
import { useService } from "./hooks/useService.js";
import { EditRecipe } from "./components/EditRecipe/EditRecipe.jsx";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const authRecipeService = recipeServiceFactory(userInfo.accessToken);
  const authService = authServiceFactory(userInfo.accessToken);
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

  const onLoginSubmit = async (loginData) => {

    try {
      const userLogin = await authService.login(loginData);

      setUserInfo(userLogin);

      navigate('/');
    } catch (error) {
      console.log(error);
    }

  }

  const onRegisterSubmit = async (registerData) => {
    const { repeatPassword, ...data } = registerData;

    if (repeatPassword !== data.password) {
      throw alert('Password miss match!');
    }

    try {
      const userRegister = await authService.register(data);

      setUserInfo(userRegister);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const onLogout = async () => {
    await authService.logout();

    setUserInfo({});
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

  const context = {
    onLoginSubmit,
    onLogout,
    onRegisterSubmit,
    userId: userInfo._id,
    userEmail: userInfo.email,
    token: userInfo.accessToken,
    username: userInfo.username || 'Anonymous',
    isAuthenticated: !!userInfo.accessToken,

  }

  return (
    <UserContext.Provider value={context}>
      <>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog recipes={recipes} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create-recipe" element={<CreateRecipe createNewRecipe={createNewRecipe} />} />
            <Route path="/catalog/:recipeId" element={<RecipeDetails />} />
            <Route path="/catalog/:recipeId/edit" element={<EditRecipe onRecipeEditSubmit={onRecipeEditSubmit} />} />
          </Routes>
        </main>
      </>
    </UserContext.Provider>
  );
}

export default App;
