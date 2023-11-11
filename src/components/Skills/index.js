import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import WordCloud from "./wordcloud";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            As a subpar programmer, I work hard to advance my abilities and
            knowledge to improve as a developer.
          </p>
          <p>
            I have successfully answered to almost 500 problems on the Geeks for
            Geeks and LeetCode platforms after much practice and diligence.
          </p>
          <p>
            As a front end developer, my area of expertise is designing
            intuitive and visually appealing web interfaces that improve user
            experience.
          </p>
          <p>
            I take tremendous pride in using my developer abilities to overcome
            challenges, and reaching my objectives.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
