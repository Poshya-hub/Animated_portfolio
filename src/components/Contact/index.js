import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.css";

const Contact = () => {
  useEffect(() => {
    emailjs.init("d9OKwudEAb42N0cud");
  }, []);

  const form = useRef();

  const sendmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ku668o",
        "template_kc3yjmj",
        form.current,
        "d9OKwudEAb42N0cud"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Your message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [letterClass, setLetterClass] = useState("text-animate");
  const skillsArray = "Contact me".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <section className="contact" id="contact">
            <form ref={form} onSubmit={sendmail}>
              <div className="input-box">
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name="name"
                    required
                  />
                  <span className="focus"></span>
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    required
                  />
                  <span className="focus"></span>
                </div>
              </div>
              <div className="input-box">
                <div className="input-field">
                  <input
                    type="number"
                    placeholder="Contact number"
                    id="phoneno"
                    name="phoneno"
                    required
                  />
                  <span className="focus"></span>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    required
                  />
                  <span className="focus"></span>
                </div>
              </div>
              <div className="textarea-field">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  required
                ></textarea>
                <span className="focus"></span>
              </div>

              <div className="btn-box btns">
                <button type="submit" name="send" className="btn">
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
