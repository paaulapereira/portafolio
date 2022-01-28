import { Routes, Route, useLocation } from "react-router-dom";
//importando estilos
import "./assets/styles/main.css";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/portafolio/" exact element={<AboutMe />} />
          <Route path="/portafolio/projects" exact element={<Projects />} />
          <Route path="/portafolio/contact" exact element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
