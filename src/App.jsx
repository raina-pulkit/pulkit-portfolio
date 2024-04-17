import { useContext } from "react";
import "./app.scss";
import NavBar from "./components/NavBar/NavBar";
import { Contexts } from "./context";
import Home from "./components/Home/home";
import Parallax from "./components/Parallax/parallax";
import Courses from "./components/Education, Courses & Certification/Education, Courses & Certification";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  const { light } = useContext(Contexts);

  return (
    <div data-theme={light ? "light" : "dark"} className="main-wrapper w-full">
      <section id = "Home">
        <NavBar />
        <Home />
      </section>

      <section id="Timeline">
        <Parallax item = "courses"/>
      </section>
      <section style={{height: "auto"}}>
        <Courses />
      </section>

      <section id="Portfolios">
        <Parallax item = "portfolio"/>
      </section>
      <Portfolio />
      {/* <section>Portfolio 1</section>
      <section>Parallax</section>
      <section>Portfolio 2</section>
      <section>Parallax</section>
      <section>Portfolio 3</section>
      <section>Parallax</section>
      <section>Portfolio 4</section>
      <section>Parallax</section>
      <section>Portfolio 5</section> */}

      <section id="Contact">Parallax</section>
      <section>Contact</section>

      <section id="About">Parallax</section>
      <section>About Me</section>
    </div>
  );
}

export default App;
