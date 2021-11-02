import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Qualification from "../components/Qualification";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

export default function Main(): JSX.Element {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
    </main>
  );
}
