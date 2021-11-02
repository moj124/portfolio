import url_image from "../assets/img/url-shortener.png";
import codenames from "../assets/img/playing-codenames-board-game.jpeg";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);
export default function Portfolio(): JSX.Element {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 5000 }}
        className="portfolio__container container swiper-container"
      >
        <SwiperSlide className="portfolio__content grid swiper-slide">
          <img src={url_image} alt="" className="portfolio__img" />

          <div className="portfolio__data">
            <h3 className="portfolio__title">Link Shorts</h3>
            <p className="portfolio__description">
              Create a condensed url of a very long url, share links and manage
              urls.
            </p>
            <a
              href="https://shorts-link.netlify.app/"
              className="button button--flex button--small portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Demo
              <i className="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="portfolio__content grid swiper-slide">
          <img src={codenames} alt="" className="portfolio__img" />

          <div className="portfolio__data">
            <h3 className="portfolio__title">Code Names</h3>
            <p className="portfolio__description">
              A social web application made from the popular game of Code Names.
            </p>
            <a
              href="https://codethatname.netlify.app/"
              className="button button--flex button--small portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Demo
              <i className="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
