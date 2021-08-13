import React from "react";
import Events from "../Components/Events";
import { ReactComponent as DevJamsLogo } from "../Assets/Logos/DevJams Logo.svg";
import { ReactComponent as Mouse } from "../Assets/Mouse.svg";

export default function Home(props) {
  return (
    <>
      {/* <DevJamsCard /> */}
      <div
        className={`${
          props.darkTheme ? "bg-jams_black" : "bg-white"
        } font-sora py-10`}
      >
        <div
          className={`${
            props.darkTheme ? "text-white" : "text-black"
          } text-2xl sm:text-3xl md:text-4xl my-5 sm:my-10 font-bold text-center`}
        >
          DevJams 2021
        </div>
        <Events darkTheme={props.darkTheme} />
      </div>
    </>
  );
}

const DevJamsCard = () => {
  return (
    <div className="w-screen h-screen grid place-items-center relative bottom-20">
      <div
        style={{ background: "#181A6D" }}
        className="card-shadow grid place-items-center p-5 z-50 rounded-lg"
      >
        <DevJamsLogo />
        <Mouse className="w-5" />
      </div>
    </div>
  );
};
