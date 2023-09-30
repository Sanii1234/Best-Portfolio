import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com"; // Import emailjs-com instead of @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0uci0te",
        "template_c4gmh2k",
        form.current,
        "Wh61B9PpbNZh5H15y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // Reset the form by setting the form fields to their initial values
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="from-email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
