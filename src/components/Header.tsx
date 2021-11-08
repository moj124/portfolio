import { useState, useEffect } from "react";

function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  const [lightTheme, setLightTheme] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-theme", lightTheme);
  }, [lightTheme]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/#" className="nav__logo">
          Michael
        </a>

        <div
          className={!showMenu ? "nav__menu" : "nav__menu show-menu"}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="/#home"
                className="nav__link active-link"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="/#about"
                className="nav__link"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="/#skills"
                className="nav__link"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="/#qualification"
                className="nav__link"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="uil uil-scenery nav__icon"></i> Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="/#portfolio"
                className="nav__link"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="/#contact"
                className="nav__link"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="uil uil-message nav__icon"></i> Contactme
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i
            className={
              !lightTheme
                ? "uil uil-moon change-theme"
                : "uil uil-moon change-theme uil-sun"
            }
            id="theme-button"
            onClick={() => setLightTheme(!lightTheme)}
          ></i>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
