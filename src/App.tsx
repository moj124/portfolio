import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./Pages/Main";
import scrollActive from "./utils/scrollActive";
import scrollTop from "./utils/scrollTop";

function App(): JSX.Element {
  window.addEventListener("scroll", scrollTop);

  window.addEventListener("scroll", scrollActive);
  return (
    <>
      <Header />

      <Main />

      <Footer />

      <a href="/#" className="scrollup" id="scroll-top">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;
