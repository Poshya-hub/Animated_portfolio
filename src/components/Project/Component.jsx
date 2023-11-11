import React, { useEffect } from "react";
import "./style.css";

const MyComponent = ({
  videoClip,
  textContent,
  identifier,
  isVideoPlaying,
  setVideoPlaying
}) => {
  useEffect(() => {
    const cursor = document.querySelector(".cb-cursor");
    const cursorText = cursor.querySelector(".cb-cursor-text");
    const cursorVideo = cursor.querySelector(".cb-cursor-video");
    const video = cursorVideo.querySelector("video");

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      cursor.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    const elements = [...document.querySelectorAll(`.${identifier}`)];

    elements.forEach((element) => {
      element.onmouseover = () => {
        cursor.classList.add("-video");
        cursorText.innerHTML = textContent.join(" ");
        video.src = videoClip;
        video.play();
        setVideoPlaying(true);
      };

      element.onmouseout = () => {
        cursor.classList.remove("-video");
        cursorText.innerHTML = "";
        video.pause();
        video.currentTime = 0;
        setVideoPlaying(false);
      };
    });
  }, [videoClip, textContent, identifier, setVideoPlaying]);

  return (
    <div>
      <section className="homeHero">
        <div className={`homeHero--inner ${identifier}`}>
          <h2 className={`homeHero__title ${identifier}`}>
            {textContent.map((text, index) => (
              <div
                key={index}
                style={{ position: "relative", display: "inline-block" }}
              >
                {text}
              </div>
            ))}
          </h2>
        </div>
      </section>
      <div className="cb-cursor">
        <div className="cb-cursor-text"></div>
        <div className="cb-cursor-video">
          <div>
            <video
              id="reel-clips"
              className={`cursor-clips ${identifier}`}
              preload="auto"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src={videoClip} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;