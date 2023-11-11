import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import MyComponent from "./Component";
import project1 from "./asserts/project1.mp4";
import video1 from './asserts/clips.mp4';

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const ProjectArray = "Projects".split("");
  const pro1 = ["Pandiit", "Academy", "intermediate", "College"];
  const pro2 = ["MessageMate", "ChattingApp", "google"];
  const [isVideoPlaying1, setVideoPlaying1] = useState(false);
  const [isVideoPlaying2, setVideoPlaying2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container project-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={ProjectArray}
            idx={15}
          />
          <br />
        </h1>
        <div className="content-container">
          <div className="left-component">
            <MyComponent
              videoClip={project1}
              textContent={pro1}
              identifier="pro1"
              isVideoPlaying={isVideoPlaying1}
              setVideoPlaying={setVideoPlaying1}
            />
          </div>
          <div className="right-component">
            <MyComponent
              videoClip={video1}
              textContent={pro2}
              identifier="pro2"
              isVideoPlaying={isVideoPlaying2}
              setVideoPlaying={setVideoPlaying2}
            />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </div>
  );
};

export default Project;
