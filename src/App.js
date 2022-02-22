import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/contacto" element={<Contact />}></Route>

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
