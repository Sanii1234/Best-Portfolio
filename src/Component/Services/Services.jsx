import React from "react";
import "./Service.css";
import emoji from "../../img/heartemoji.png";
import Card from "../Cards/Card";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Resume from "./EhsanResume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="Service">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          "Delivering excellence through a created portfolio of my best work,{" "}
          with occasional <br /> fordays into smart digital marketing
          strategies."{" "}
        </span>
        <a href={Resume} download>
          <button
            className="button s-button"
            style={{ fontSize: "16px", padding: "8px 16px" }}
          >
            {" "}
            Download CV{" "}
          </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF91FF94" }}>
          {" "}
        </div>
      </div>
      {/* left side of services */}
      <div className="cards">
        <motion.div
          initial={{ left: "22%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem", top: "-4rem" }}
        >
          <Card
            emoji={emoji}
            heading={"Design"}
            detail={"figma , Abode illustrator, Abode Photoshop"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-1rem" }}
          transition={transition}
          // style={{ top: "12rem", left: "2rem" }}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"HTML, CSS , Javascript , React"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "12rem", left: "25rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
          // style={{ top: "16rem", left: "22rem" }}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"dummy text is use to fil the specific line"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "#ABF91FF94" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
