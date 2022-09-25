import swirl from "../assets/@.svg";
import up from "../assets/up.svg";
import work from "../assets/projects.svg";
import me from "../assets/me.svg";
import contact from "../assets/contact.svg";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 525) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden fixed group md:flex justify-center items-center left-0 top-0 bottom-0 w-[10vw] ${
        show && "opacity-100"
      } ${!show && "opacity-0"}`}
    >
      <div className="flex flex-col border xl:border-transparent group-hover:border-[honeydew] gap-8 xl:gap-0 group-hover:gap-8 w-10 p-2 xl:p-0 group-hover:p-2 rounded-full transition-all duration-300">
        <a
          className="ttr xl:w-0 w-auto group-hover:w-auto"
          data-tt="Home"
          href="#"
        >
          <img src={up} />
        </a>
        <a
          className="ttr xl:w-0 w-auto group-hover:w-auto"
          data-tt="Projects"
          href="#work"
        >
          <img src={work} />
        </a>
        <a className="ttr" data-tt="Resume" href="#resume">
          <img className="spin" src={swirl} />
        </a>
        <a
          className="ttr xl:w-0 w-auto group-hover:w-auto"
          data-tt="About"
          href="#about"
        >
          <img src={me} />
        </a>
        <a
          className="ttr xl:w-0 w-auto group-hover:w-auto"
          data-tt="Contact"
          href="#contact"
        >
          <img src={contact} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
