import about_image from "../assets/img/full-background.jpeg";
import { saveAs } from "file-saver";
import cv from "../assets/pdf/Michael-CV.pdf";
export default function About(): JSX.Element {
  const saveFile = () => {
    saveAs(cv,"Michael Jones CV");
  };
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={about_image} alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Web developer, with moderate knowledge and experience, working in
            web technologies, delivering quality work.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Completed <br /> projects
              </span>
            </div>

            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            {/* <!--==================== Change your CV ====================--> */}
            <a
              href="/#about"
              onClick={saveFile}
              className="button button--flex"
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
