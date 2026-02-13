import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/rodape/Rodape";
import NavBar from "./components/navbar/NavBar";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
