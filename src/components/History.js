import ExperienceView from "./ExperienceView";
import { useContext } from "react";
import { blockContext } from "./../App";
import EducationView from "./EducationView";
function History() {
  const context = useContext(blockContext);
  return (
    <div className="col-span-2 px-4">
      {context.blocks.map((block, i) => {
        if (block.title === "Experience")
          return <ExperienceView block={block} key={i} />;
        else return <EducationView block={block} key={i} />;
      })}
    </div>
  );
}

export default History;
