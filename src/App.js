import { About } from "./components/About/About.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
