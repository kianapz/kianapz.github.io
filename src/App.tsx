import { useContext, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { ThemeContext } from "./context/Theme";
import { Routes, Route, HashRouter } from "react-router-dom";
import WebFont from "webfontloader";

WebFont.load({
  custom: {
    families: ["Roboto", "Roboto-light"],
    urls: ["./fonts/Roboto.ttf", "./fonts/Roboto-light.ttf"],
  },
});

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const favIcon = document.getElementById("favicon") as HTMLLinkElement;
    favIcon.href =  "./favicon.ico";
  }, [theme]);
  return (
    <div
      id="App"
      className={
        (theme === "light" ? "bg-white" : "bg-black") +
        " w-full h-screen animate-fadeIn relative overflow-auto"
      }
    >
      <HashRouter>
        <Nav />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
