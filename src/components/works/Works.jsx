import React, { useState } from "react";
import "./works.scss";
import arrow from "../../assets/arrow.png";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderData = [
    {
      id: "1",
      icon: require("../../assets/mobile.png"),
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: require("../../assets/globe.png"),
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: require("../../assets/writing.png"),
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < sliderData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {sliderData.map((data) => (
          <div className="container" key={data.id}>
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={arrow}
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Works;
