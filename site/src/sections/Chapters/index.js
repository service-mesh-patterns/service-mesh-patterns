import React from "react";
import ChaptersStyleWrapper from "./chapters.style";
import chaptersData from "./chaptersData";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import healthIcon from "../../assets/images/chapters/healthicon.svg";
import layer5Icon from "../../assets/images/chapters/layer5-white-no-trim.svg";
import Callout from "../../components/Callout";

function Chapters() {
  return (
    <ChaptersStyleWrapper>
      <h1>Chapters of the book</h1>
      <div className="accordion-container">
        {chaptersData.map((chapter, idx) => (
          <Accordion key={idx} area={chapter.area} name={chapter.name} topics={chapter.topics} />
        ))}
      </div>
      <section className="callToAction">
        <h4>Discuss patterns and best practices on the</h4>
        <Button
          url="https://discuss.layer5.io/"
          className="community-button"
          title="Community Discussion Forum"
          icon={layer5Icon}
        >
          <img src={healthIcon} alt="layer5 logo" />
        </Button>
      </section>
      <Callout/>
    </ChaptersStyleWrapper>
  );
}

export default Chapters;
