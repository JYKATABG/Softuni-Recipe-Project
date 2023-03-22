import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as recipeService from './services/recipeService.js'
import { useNavigate } from "react-router-dom";

// Pages
import { About } from "./components/About/About.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";
import { CreateRecipe } from "./components/CreateRecipe/CreateRecipe.jsx";

function App() {

  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    recipeService.getAll()
      .then(data => {
        setRecipes(data);
      })
  }, [])

  const createNewRecipe = async (data) => {

    const newRecipe = await recipeService.create(data);

    setRecipes(state => ([...state, newRecipe]))

    navigate('/catalog');
  }

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog recipes={recipes} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-recipe" element={<CreateRecipe createNewRecipe={createNewRecipe} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
