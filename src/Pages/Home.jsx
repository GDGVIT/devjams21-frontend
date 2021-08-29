import React, { useRef } from "react";
import Events from "../Components/Events";
import { ReactComponent as DevJamsLogo } from "../Assets/Logos/DevJams Logo.svg";
import { ReactComponent as Mouse } from "../Assets/Mouse.svg";
import "../Styles/Home.css";
import Contact from "../Components/Contact";

export default function Home(props) {
  const theme = props.darkTheme ? "dark" : "light";
  const contentRef = useRef(null);
  const handleScroll = () => {
    if (contentRef) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <DevJamsCard theme={theme} handleScroll={handleScroll} />
      <div
        className={`h-screen flex items-center ${
          props.darkTheme ? "bg-jams_black" : "bg-white"
        } font-sora pt-20`}
        ref={contentRef}
      >
        <Events darkTheme={props.darkTheme} />
      </div>
      <Contact />
    </>
  );
}

const DevJamsCard = (props) => {
  return (
    <div className="w-screen h-screen grid place-items-center relative bottom-20">
      <div
        className={`devjams-card--${props.theme} card-shadow grid place-items-center py-5 px-9 lg:px-14 lg:pt-9 z-10 rounded-lg mx-5 transition-all duration-500 ease-in-out`}
      >
        <DevJamsLogo className="w-48 md:w-60 lg:w-96" />
        <Mouse
          className={`w-5 sm:w-5 mouse--${props.theme} cursor-pointer`}
          onClick={props.handleScroll}
        />
      </div>
    </div>
  );
};
