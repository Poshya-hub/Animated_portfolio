import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { ImBubble } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import "./index.scss";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = " Talasu Poshya".split("");
  const jobArray = "Mern Stack Developer".split("");
  const interestArray = "Intermediate Coder".split("");

  const openPdf = () => {
    window.open(
      "https://drive.google.com/file/d/1h7AJa2DMpyjVOmieuD4XffPtyrPXRqko/view?usp=sharing",
      "_blank"
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>
            Web Developer | Enjoy learning new stuff on computers | Try to be
            self-reliant about everything.
          </h2>
          <Link to="/contact" className="flat-button">
          <div className="resume">
            Say Hello!
            <div className="eye_res">
            <ImBubble size="20" />
            </div></div>
          </Link>
          <Link onClick={openPdf} className="flat-button">
            <div className="resume">
              Have a look at my resume!
              <div className="eye_res">
                <FaEye size="20" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Logo />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
