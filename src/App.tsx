import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/rodape/Rodape";
import NavBar from "./components/navbar/NavBar";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/contato/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
