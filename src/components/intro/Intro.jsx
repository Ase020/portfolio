import React, { useEffect, useRef } from "react";
import "./intro.scss";
import man from "../../assets/man.png";
import down from "../../assets/down.png";
import { init } from "ityped";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Accountant"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src={man} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Felix Nyalenda</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
