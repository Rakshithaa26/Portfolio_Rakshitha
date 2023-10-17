import React from "react";
import "./works.css";
import web from "../../images/web.jpeg";

function Works() {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksdesc">
        "I take pride in my unwavering commitment to precision, ensuring every
        detail is pixel-perfect. I am enthusiastic about leveraging my skills
        and experience to empower businesses in achieving their objectives and
        establishing a robust and compelling online presence."
      </span>
      <div className="worksimgs">
        <img src={web} alt="" className="worksimg" />
        <img src={web} alt="" className="worksimg" />
        <img src={web} alt="" className="worksimg" />
        <img src={web} alt="" className="worksimg" />
        <img src={web} alt="" className="worksimg" />
        <img src={web} alt="" className="worksimg" />
      </div>
      <button className="workbtn">See More</button>
    </section>
  );
}

export default Works;
