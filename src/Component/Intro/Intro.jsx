import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkden from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Ehsan from "../../img/NewEhsan1.png";
import Glassemoji from "../../img/glassesimoji.png";
import Floading from "../Floading/Floading";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I am </span>
          <span>Ehsan Nazir</span>
          <span>
            Frontend Developer with the hight level of experience in web
            designing and development, producting the quality work.
          </span>
          <button className="button i-button ">Here Me</button>
          <div className="i-icon">
            <a href="https://github.com/">
              <img src={Github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img src={Linkden} alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="i-right" style={{ transform: "scale(1)" }}>
        <img src={Vector1} alt="Vector 1" />
        <img src={Vector2} alt="Vector 2" />
        <img src={Ehsan} alt="Ehsan" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassemoji}
          alt="glass"
        />
        <motion.div
          initial={{ top: "-4", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-12%", left: "68%" }}
        >
          <Floading image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0%" }}
          transition={transition}
          style={{ top: "18rem", left: "4rem" }}
        >
          <Floading image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "C1F5FF",
            top: "17rem",
            height: "11rem",
            width: "21rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
