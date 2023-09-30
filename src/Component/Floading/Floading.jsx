import React from "react";
import "./Floading.css";

const Floading = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingdiv">
      <img src={image} alt="Crown" />
      <span>
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

export default Floading;
