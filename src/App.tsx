import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/rodape/Rodape";
import NavBar from "./components/navbar/NavBar";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/contato/Contato";
import Gallery from "./pages/galeria/Galeria";
import { ScrollToTop } from "./components/scrolltop/ScrollToTop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/galeria" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
