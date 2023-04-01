import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.js";
import { RecipeProvider } from "./contexts/RecipeContext.js";


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

  return (
    <UserProvider>
      <RecipeProvider>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route element={<RouteGuard />} >
              <Route path="/create-recipe" element={<CreateRecipe />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/catalog/:recipeId/edit" element={<EditRecipe />} />
            </Route>
            <Route path="/catalog/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </main>
      </RecipeProvider>
    </UserProvider>
  );
}

export default App;
