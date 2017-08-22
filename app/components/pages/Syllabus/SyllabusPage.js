// Dependencies
import React from "react";

// Content
import Syllabus from "./Syllabus";

// Components
import Deck from "app/components/components/Deck/Deck";
import SectionCard from "../../components/SectionCard/SectionCard";

export default function SyllabusPage(props) {
  const title = "Syllabus";
  const keywords = "Test, Developer, Tested, Trusted";

  return (
    <Deck data={Syllabus} sectionCard={<SectionCard title={title} keywords={keywords} />} />
  );
}
