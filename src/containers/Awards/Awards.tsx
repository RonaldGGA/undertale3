import { useEffect, useRef, useState } from "react";
import award from "../../assets/awards4.png";
import { Comunity } from "../../components/exports";
const Awards = () => {
  const text = useRef<HTMLDivElement>(null);
  const awards = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (text.current) {
        setWidth(text.current.clientWidth);
      }
    };

    handleResize(); // Obtener el ancho inicial

    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar
    };
  }, []);

  useEffect(() => {
    const options = {
      once: true,
      root: null,
      margin: "0 0 -50% 0",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target === awards.current &&
          !animationCompleted
        ) {
          setIsVisible(true);
          setAnimationCompleted(true);
        }
      });
    }, options);
    if (awards.current) {
      observer.observe(awards.current);
    }
    return () => observer.disconnect();
  }, [isVisible, animationCompleted]);

  return (
    <div ref={awards} className={`app__awards ${isVisible ? "animate" : ""}`}>
      <div className="container">
        <h5 className="app__awards--title">Do you Know?</h5>
        <div ref={text} className="app__awards-info">
          <p>
            Best PC Game from <span> Destructoid </span> , and the{" "}
            <span> Matthew Crump Cultural Innovation Award </span>and Most{" "}
            <span>Fulfilling Crowdfunded Game </span> from the SXSW Gaming
            Awards.
            {width > 800 && (
              <span>
                Undertale garnered awards and nominations in a variety of
                categories with praise for its story, narrative and for its
                role-playing.
              </span>
            )}
          </p>
          <div className="app__awards-info-img">
            <img src={award} alt="award" />
          </div>
        </div>
        <Comunity width={width} />
      </div>
    </div>
  );
};

export default Awards;
