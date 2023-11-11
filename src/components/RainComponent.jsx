import React, { useEffect } from "react";
import './Layout/bg.css'
const RainComponent = () => {
  useEffect(() => {
    const rain = () => {
      let amount = 100;
      let body = document.querySelector(".rain"); // Select the .rain container
      let windowHeight = window.innerHeight; // Get the window height
      let i = 0;
      while (i < amount) {
        let drop = document.createElement("i");
        let size = Math.random() * 5;
        let posx = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        drop.style.width = `0.2${size}px`;
        drop.style.left = `${posx}px`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.animationDuration = `${1 + duration}s`;
        body.appendChild(drop);
        i++;
      }
      body.style.height = `${windowHeight}px`; // Set the container height
    };

    rain();

  //   // Clean up the raindrops when the component unmounts
  //   return () => {
  //     const body = document.querySelector(".rain");
  //     body.innerHTML = ""; // Clear the raindrops when component unmounts
  //   };
   }, []);

  return <div className="rain"></div>;
};

export default RainComponent;
