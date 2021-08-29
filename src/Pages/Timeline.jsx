import React from "react";
import Baner from "../Components/Baner";
import Contact from "../Components/Contact";

export default function Timeline() {
  // const contentRef = useRef(null)
  // const handleScroll = () => {
  //   if (contentRef) {
  //     contentRef.current.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <div className="z-20 absolute">
      <Baner color="#F9C531" title="Timeline" />
      {/* <div className="w-screen p-10 grid place-items-center blur-3xl">
        <div className="text-3xl font-bold font-sora bg-jams_yellow text-white px-20 py-8 rounded-xl">
          Coming Soon ...
        </div>
      </div> */}
      <Contact />
    </div>
  );
}
