import React, { useState } from "react";
import openIcon from "../../assets/images/chapters/open.svg";
import closeIcon from "../../assets/images/chapters/close.svg";
import AccordionStyleWrapper from "./accordion.style";

const Accordion = ({ area, name, topics }) => {
  const [open, setOpen] = useState(false);
  return (
    <AccordionStyleWrapper>
      <div className="accordion-title" onClick={() => setOpen(prevState => !prevState)}>
        <p>{area}</p>
        <p>{name}</p>
        <button onClick={() => setOpen(prevState => !prevState)}>
          {open ? (<img src={openIcon} alt="open" />) : (<img src={closeIcon} alt="close" />) }
        </button>
      </div>
      {open && (
        <div className="accordion-content">
          {topics.map((topic, idx) => (
            <div className="topic" key={idx}>
              <p>{topic.name}</p>
              <p>{topic.type}</p>
            </div>
          )) }
        </div>
      )}
    </AccordionStyleWrapper>
  );
};

export default Accordion;
