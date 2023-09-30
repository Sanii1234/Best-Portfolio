import "./App.css";
import Contact from "./Component/Contact/Contact";
import Experince from "./Component/Experience/Experince";
import Footer from "./Component/Footer/Footer";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Work from "./Component/Works/Work";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonial/Testimonial";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "", // Set the background color based on darkMode
        color: darkMode ? "white" : "", // Set the text color based on darkMode
      }}
    >
      <Navbar />
      <div id="intro">
        <Intro />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="experience">
        <Experince />
      </div>
      <div id="work">
        <Work />
      </div>
      <Portfolio />
      <div id="testimonial">
        <Testimonial />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
