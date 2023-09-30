import React from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png";
import Amazon from "../../img/amazon.png";
import { motion } from "framer-motion";

const Work = () => {
  const transition = { duration: 3.5, type: "spring" };
  return (
    <div className="Work">
      <div className="awesome">
        <span>Work For All These</span>
        <span>Work and done</span>
        <span>
          "Delivering excellence through a curated portfolio of my best work,{" "}
          with occasional <br /> forays into smart digital marketing
          strategies."{" "}
        </span>
        -
        <button
          className="button s-button"
          style={{ fontSize: "16px", padding: "8px 16px" }}
        >
          {" "}
          Hire Me{" "}
        </button>
        <div className="blur s-blur1" style={{ background: "#ABF91FF94" }}>
          {" "}
        </div>
      </div>
      {/* this is the left side of the work  */}
      <div className="w-right">
        <motion.div
          transition={transition}
          initial={{ rotate: 0 }} // Set the initial rotation angle to 0 degrees
          animate={{ rotate: 360 }} // Rotate continuously by 360 degrees
          className="w-maincircle"
        >
          <div className="w-seccircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Fiver} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-backcircle bluecircle"></div>
          <div className="w-backcircle yellowcircle"></div>
        </motion.div>
      </div>
      {/* background circle */}
    </div>
  );
};

export default Work;
