import React, { useEffect, useRef } from "react";
import { resizing } from "../Utils/MasonryLayout";
import events from "../Data/EventsData";
import "../Styles/Components/Events.css";
// import Img from "../Assets/Train Animations/Night/CityLighthouse.svg";

// Logos
import { ReactComponent as DevJamsLogo } from "../Assets/Logos/DevJams Logo.svg";
import { ReactComponent as KnockathonsLogo } from "../Assets/Logos/Knockathons Logo.svg";
import { ReactComponent as DevTalksLogo } from "../Assets/Logos/DevTalks Logo.svg";
import { ReactComponent as HexathonLogo } from "../Assets/Logos/Hexathon Logo.svg";
// import { ReactComponent as CTFLogo } from "../Assets/Logos/CTF Logo.svg";

// Devjams Grid SVGs
import { ReactComponent as RightArrow } from "../Assets/Home/Right Arrow.svg";
import DevJamsGridGround from "../Assets/Home/DevJamsGridGround";

export default function Events(props) {
  const homeContainerRef = useRef(null);
  const theme = props.darkTheme ? "dark" : "light";

  useEffect(() => {
    const { resizeGridItem } = resizing();
    const masonrify = () => resizeGridItem(homeContainerRef.current);
    window.addEventListener("resize", masonrify);

    masonrify();

    return () => {
      window.removeEventListener("resize", masonrify);
    };
  }, []);

  //Add auto-rows-10 if you want grid masonry layout
  return (
    <div
      ref={homeContainerRef}
      className="sm:w-11/12 mx-auto mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-10 auto-rows-10"
    >
      <CurrentEventGrid event={events.knockathon} theme={theme}>
        <KnockathonsLogo className="w-64" />
      </CurrentEventGrid>
      <ComingSoonGrid event={events.devtalks} theme={theme}>
        <DevTalksLogo className="w-48" />
      </ComingSoonGrid>
      <ComingSoonGrid event={events.designzzz} theme={theme}>
        <HexathonLogo className="w-44 my-3" />
      </ComingSoonGrid>
      <ComingSoonGrid event={events.ctf} theme={theme}>
        <KnockathonsLogo className="w-64" />
      </ComingSoonGrid>
      <DevJamsGrid theme={theme} />
    </div>
  );
}

// Don't remove event class its not for CSS

const DevJamsGrid = (props) => {
  const { theme } = props;
  return (
    <div
      className={`grid--${theme} coming-soon-grid--${theme} ${events.devjams.class}--${theme} event col-span-full relative shadow-md sm:rounded-3xl overflow-hidden`}
    >
      <div className="flex items-center py-5 px-10 mb-20">
        <div>
          <DevJamsLogo className="w-32 sm:w-40 h-auto my-5" />
          <div
            className={`content--${theme} text-xs sm:text-sm md:text-base pb-6`}
          >
            {events.devjams.content}
          </div>
        </div>
        <div className="absolute top-5 right-10 sm:static px-5">
          <RightArrow className="w-6 sm:w-8" />
        </div>
      </div>
      <DevJamsGridGround />
    </div>
  );
};

const CurrentEventGrid = (props) => {
  const { event, theme } = props;
  const { date, content } = event;

  return (
    <div
      className={`grid--${theme} register-grid--${theme} event pt-8 relative shadow-md sm:rounded-3xl overflow-hidden`}
    >
      <div className="content-container z-30 relative">
        <div className="grid place-items-center gap-y-4">
          {props.children}
          <div className="text-jams_red font-bold">{date}</div>
        </div>
        <div className={`content--${theme}`}>{content}</div>
        <div className="text-center">
          <button className={`btn__register--${theme} grid-btn`}>
            Register
          </button>
        </div>
      </div>

      {/* circles */}
      <div className="absolute z-0 top-0 left-0 right-0 bottom-0">
        <Circles info={props.event} theme={theme} />
      </div>
    </div>
  );
};

const ComingSoonGrid = (props) => {
  const { theme, event } = props;
  const { date, content } = event;

  return (
    <div
      className={`grid--${theme} coming-soon-grid--${theme} event pt-8 relative shadow-md sm:rounded-3xl overflow-hidden`}
    >
      <div className="content-container z-30 relative">
        <div className="grid place-items-center gap-y-4">
          {props.children}
          <div className="text-jams_red font-bold">{date}</div>
        </div>
        <div className={`content--${theme}`}>{content}</div>
        <div className="text-center">
          <div className={`btn__coming-soon--${theme} grid-btn`}>
            Coming Soon
          </div>
        </div>
      </div>
      <div className="absolute z-0 top-0 bottom-0 right-0 left-0">
        <Circles info={props.event} theme={theme} />
      </div>
    </div>
  );
};

const Circles = (props) => {
  const { theme, info } = props;
  const { coords, classname } = info;

  return (
    <>
      <div
        style={{ width: "300px", height: "300px" }}
        className={`circle ${coords.circle1} ${classname}__circle--${theme}`}
      />
      <div
        style={{ width: "200px", height: "200px" }}
        className={`circle ${coords.circle2} ${classname}__circle--${theme}`}
      />
    </>
  );
};
