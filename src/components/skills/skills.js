import React from "react";
import "./skills.css";
import web from "../../images/web.jpeg";

function Skills() {
  return (
    <section id="skills">
      <span className="skilltitle">My Skills</span>
      <span className="skilldescription">
        "Skilled web designer and developer with expertise in front-end and
        back-end technologies, creating visually appealing, user-friendly
        websites. Strong problem-solving skills, responsive design, and a
        passion for staying up-to-date with the latest web development trends."
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={web} alt="" className="skillBarimg" />
          <div className="skillBartxt">
            <h2>Website Design</h2>
            <p>
              "Full-Stack Web Developer & Designer | Creating Exceptional
              Digital Experiences"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
