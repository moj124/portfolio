import { useState } from "react";
import { send } from "emailjs-com";

export default function Contactme(): JSX.Element {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Michael",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e: { preventDefault: () => void }) => {
    console.log("working",toSend);
    e.preventDefault();
    send(
      "service_m303rqq",
      "template_hbfy914",
      toSend,
      "user_L9voAx1lmmDANAn4aYLVg"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text, toSend);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({ from_name: "", to_name: "Michael", message: "", reply_to: "" });
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">075391233</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                michael.owen.jones@gmail.com
              </span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">London</span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
                className="contact__input"
              required/>
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea
              name="message"
              value={toSend.message}
              onChange={handleChange}
              cols={0}
              rows={7}
              className="contact__input"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
