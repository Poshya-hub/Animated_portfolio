import React, { useEffect } from 'react';
import './index.css';

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector('.cb-cursor');
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleMouseOver = () => {
      const cursor = document.querySelector('.cb-cursor');
      cursor.classList.add('-video');
    };

    const handleMouseOut = () => {
      const cursor = document.querySelector('.cb-cursor');
      cursor.classList.remove('-video');
    };

    window.addEventListener('mousemove', handleMouseMove);

    const elements = document.querySelectorAll('h2 .word');
    elements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      elements.forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <div className="cb-cursor">
      <div className="cb-cursor-text"></div>
      <div className="cb-cursor-video">
        <div>
          <video
            id="reel-clips"
            className="cursor-clips"
            preload="metadata"
            loop
            muted
            playsInline
            autoPlay
          >
            <source src="https://cdn.poolhouse.co/wp-content/uploads/2021/06/02213043/clips.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Cursor;
