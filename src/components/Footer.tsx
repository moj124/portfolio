export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Michael</h1>
            <span className="footer__subtitle">Fullstack developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/michaelowen.jones.96"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/emoj124/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://twitter.com/JonesJowen"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
