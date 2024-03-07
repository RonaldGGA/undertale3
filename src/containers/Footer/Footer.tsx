import React, { useRef, useState } from "react";
import footer from "../../assets/footer.png";

const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Footer = () => {
  const input = useRef(null);
  const handleButton = (e) => {
    e.preventDefault();
    console.log("Email value submitted:", inputValue);
    if (inputValue.length > 0) {
      input.current.value = "";
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [validInput, setValidInput] = useState(false);
  const handleInput = (e) => {
    setInputValue(e.currentTarget.value);
    if (emailRegex.test(inputValue)) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
    console.log(inputValue);
  };

  return (
    <footer className="app__footer">
      <div className="container">
        <div className="app__footer-email">
          <h5>
            Do you want to recieve our <span>LAST NEWS</span>?
          </h5>
          <form
            className={`app__footer-email-form ${
              validInput ? "goodemail" : ""
            }`}
            id="form"
            method="POST"
            action="#">
            <input
              ref={input}
              onChange={(e) => handleInput(e)}
              type="email"
              id="input"
              form="form"
              placeholder="ronald.dearmass@gmail.com"
            />

            <button
              className={validInput ? "goodemail" : ""}
              type="submit"
              onClick={handleButton}>
              Send
            </button>
          </form>
        </div>
        <div className="app__footer-container">
          <div className="app__footer-img">
            <img src={footer} alt="footer-img" />
          </div>
          <div className="app__footer-content">
            <p>Undertale Fan Page</p>
            <p>Email: contact@undertalefanpage.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Follow us on social media:</p>
            <div className="social-icons">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "hsl(60, 76%, 47%)" }}>
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "hsl(60, 76%, 47%)" }}>
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "hsl(60, 76%, 47%)" }}>
                  <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                  <circle cx="11.994" cy="11.979" r="3.003"></circle>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "hsl(60, 76%, 47%)" }}>
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="app__footer-bottom">
          <p>&copy; 2022 Undertale Fan Page. All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <a href="#" className="myName">
              I'm Ronald
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
