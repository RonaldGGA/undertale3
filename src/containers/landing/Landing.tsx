import { useRef, useEffect } from "react";
import landing from "../../assets/landing.png";
import Typed from "typed.js";

interface CustomTyped extends Typed {
  strings: string[];
}

const Landing: React.FC = () => {
  const writing = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(writing.current!, {
      strings: ["Thrilling", "Friendly", "Featured"],
      typeSpeed: 80,
      backSpeed: 50,
      contentType: "string",
      loop: true,
      cursorChar: ".",
      backDelay: 2000,
      onStringTyped: (arrayPos, self: CustomTyped) => {
        if (arrayPos === self.strings.length - 1) {
          self.cursor.style.opacity = "0";
        }
      },
    });

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [writing]);

  return (
    <div className="app__landing">
      <div className="container">
        <div className="app__landing-flex">
          <div className="app__landing_img">
            <img
              className="app__landing_img--img"
              src={landing}
              alt="Landing"
            />
          </div>
          <div className="app__landing__main">
            <div className="app__landing__main-container">
              <h2>Undertale Blue Project Presents:</h2>
              <h1>
                A new History <span ref={writing}></span>
              </h1>
              <div>
                <h2>
                  Get ready for the friendlier travel you will ever do in a game
                </h2>
              </div>
              <div className="app__landing__main-container--play">
                <a href="#">Get the Game</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
