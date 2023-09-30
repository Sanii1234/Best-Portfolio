import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";

const Experince = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div className={`experince ${darkMode ? "dark-mode" : ""}`}>
      <div className="acheivement">
        <div className="circle">8+</div>
        <span>Year</span>
        <br />
        <span>Experience</span>
      </div>
      <div className="acheivement">
        <div className="circle">20+</div>
        <span>Completed</span>
        <br />
        <span>Project</span>
      </div>
      <div className="acheivement">
        <div className="circle"> 5+</div>
        <span>Companies</span>
        <br />
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experince;
