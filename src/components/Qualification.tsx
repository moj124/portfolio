import { useState } from "react";

export default function Qualification(): JSX.Element {
  const [showQualification, setShowQualification] = useState(false);
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              showQualification
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            data-target="#education"
            onMouseEnter={() => setShowQualification(true)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              !showQualification
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            data-target="#work"
            onMouseEnter={() => setShowQualification(false)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          {/* <!--=============== QUALIFICATION CONTENT 1 ===============--> */}
          <div
            className={
              showQualification
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
            data-content
            id="education"
          >
            {/* <!--=============== QUALIFICATION 1 ===============--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Electronic Engineering</h3>
                <span className="qualification__subtitle">
                  London - KCL University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 2 ===============--> */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <!-- <span className="qualification__line"></span> --> */}
              </div>

              <div>
                <h3 className="qualification__title">Academy Scholar</h3>
                <span className="qualification__subtitle">
                  London - Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 3 ===============--> */}
            {/* <!-- <div className="qualification__data">
                              <div>
                                  <h3 className="qualification__title">Web Development</h3>
                                  <span className="qualification__subtitle">Peru - Institute</span>
                                  <div className="qualification__calendar">
                                      <i className="uil uil-calendar-alt"></i>
                                      2017 - 2019
                                  </div>
                              </div>
  
                              <div>
                                  <span className="qualification__rounder"></span>
                                  <span className="qualification__line"></span>
                              </div>
                          </div> --> */}

            {/* <!--=============== QUALIFICATION 4 ===============--> */}
            {/* <!-- <div className="qualification__data">
                              <div></div>
                                   
                              <div className="qualification__time">
                                  <span className="qualification__rounder"></span> */}
            {/* <!-- <span className="qualification__line"></span> --> */}
            {/* <!-- </div>

                              <div>
                                  <h3 className="qualification__title">Master in Ui/Ux</h3>
                                  <span className="qualification__subtitle">Peru - Institute</span>
                                  <div className="qualification__calendar">
                                      <i className="uil uil-calendar-alt"></i>
                                      2019 - 2021
                                  </div>
                              </div>
                          </div> -->  */}
          </div>

          {/* <!--=============== QUALIFICATION CONTENT 2 ===============--> */}
          <div
            className={
              !showQualification
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
            data-content
            id="work"
          >
            {/* <!--=============== QUALIFICATION 1 ===============--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Business Associate</h3>
                <span className="qualification__subtitle">
                  The Challenges Group - Rwanda
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2017- Sep 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 2 ===============--> */}
            <div className="qualification__data">
              <div></div>

              <div className="qualification__time">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Secretariat Administrator
                </h3>
                <span className="qualification__subtitle">
                  MEDISCRIPT LIMITED - London
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2018- Aug 2018
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 3 ===============--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programming Intern</h3>
                <span className="qualification__subtitle">
                  ETSOO Network-Tech - China
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2019 - Aug 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 4 ===============--> */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Tutor</h3>
                <span className="qualification__subtitle">
                  Fire Tech - London
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Apr 2020 - Jul 2021
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 5 ===============--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Academy Scholar</h3>
                <span className="qualification__subtitle">
                  Academy - London
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <!-- <span className="qualification__line"></span> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
