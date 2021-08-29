import React, { useRef, useEffect } from "react";
import Accordion from "accordion-js";
import "../Styles/Faq.css";
import Baner from "../Components/Baner";
import faq from "../Data/FaqData";
import Contact from "../Components/Contact";

const Accordian = ({ color, question, answer, darkTheme }) => {
  return (
    <div className={`ac ${color}`}>
      <h2 className={`ac-header ${darkTheme ? "bg-jams_dark_blue" : ""}`}>
        <button className="ac-trigger font-sora md:text-lg">{question}</button>
      </h2>
      <div className="ac-panel h-28">
        <p>
          <span className="text">{answer}</span>
        </p>
      </div>
    </div>
  );
};

export default function Faq(props) {
  const accordionRef = useRef(null);

  useEffect(() => {
    /* eslint-disable no-unused-vars */
    const Acc = new Accordion(accordionRef.current, {
      duration: 200,
    });
  }, []);

  const handleScroll = () => {
    if (accordionRef) {
      accordionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute">
      <Baner title="FAQ" color="#2BA24C" handleScroll={handleScroll} />
      <div
        className={`faq ${props.darkTheme ? "dark" : ""} font-sora pt-28`}
        ref={accordionRef}
      >
        {faq.map((el) => {
          return (
            <Accordian
              key={el.key}
              color={el.color}
              question={el.question}
              answer={el.answer}
              darkTheme={props.darkTheme}
            />
          );
        })}
      </div>
      <Contact />
    </div>
  );
}
