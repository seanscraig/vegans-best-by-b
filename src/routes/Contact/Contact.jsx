import "./Contact.css";
import { useState, useRef } from "react";
import { IconContext } from "react-icons";
import { HiX } from "react-icons/hi";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSuccess(true);
  };

  const closeBanner = () => {
    setIsActive(false);
    setIsSuccess(false);
  };

  const renderCloseBtn = (
    <IconContext.Provider value={{ size: "2em" }}>
      <button className="msg-close-btn" onClick={closeBanner}>
        <HiX />
      </button>
    </IconContext.Provider>
  );

  const renderMessage = () => {
    if (isSuccess) {
      return (
        <div className={isActive ? "thank-you-msg" : "hidden"}>
          {renderCloseBtn}
          <h3>
            {`Thank you ${name} for your message. I will respond by sending an email to ${email}`}
          </h3>
        </div>
      );
    } else if (isError) {
      return (
        <div className="error-msg">
          {renderCloseBtn}
          <h3>{`There was an error sending the message: ${errorText}`}</h3>
        </div>
      );
    }
  };

  return (
    <>
      {renderMessage()}
      <div
        id="contact-container"
        className={isSuccess ? "margin-top-none" : "margin-top-3"}
      >
        <h1>Contact Us!</h1>
        <p>Send us a Message!</p>
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message"></label>
          <textarea
            required
            name="message"
            cols="30"
            rows="10"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </>
  );
};

export default Contact;
