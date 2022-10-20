import ExperienceView from "./ExperienceView";
import { useContext } from "react";
import { blockContext } from "./../App";
import EducationView from "./EducationView";
function History() {
  const context = useContext(blockContext);
  return (
    <div className="col-span-2 px-4">
      {context.blocks
        .filter((block) => {
          return block.title === "Experience";
        })
        .map((exp, i) => (
          <ExperienceView key={i} block={exp} />
        ))}

      {context.blocks
        .filter((block) => {
          return block.title === "Education";
        })
        .map((edu, i) => (
          <EducationView key={i} block={edu} />
        ))}
    </div>
  );
}

export default History;
