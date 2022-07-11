import React from "react";
import "./testimonials.scss";
import rightArrow from "../../assets/right-arrow.png";

function Testimonials() {
  const testimonialData = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: require("../../assets/twitter.png"),
      desc: "This interview happened on an insanely wintry morning. The type where you occasionally blow into your hands.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: require("../../assets/youtube.png"),
      desc: " We sat at a window. Outside, the grey clouds refused to shift, the sun a faded memory. It felt gloomy and desperate, like the end of something significant.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: require("../../assets/linkedin.png"),
      desc: "Apart from Kiganjo, the police training school, he can’t say where else he trained and with whom. He’s vague about it.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialData.map((data) => (
          <div
            className={data.featured ? "card featured" : "card"}
            key={data.id}
          >
            <div className="top">
              <img src={rightArrow} alt="" className="left" />
              <img src={data.img} alt="" className="user" />
              <img src={data.icon} alt="" className="right" />
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
