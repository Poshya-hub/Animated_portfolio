/* eslint-disable no-unused-vars */
import { useRef } from "react";
import LogoS from "../1688239924484.jpg";
import "./index.scss";

const Logo = () => {
  const bgRef = useRef();

  const solidLogoRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
        style={{ borderRadius: "40%"}}
      />
      <span className="circle-spin"></span>
    </div>
  );
};

export default Logo;
