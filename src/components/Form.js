import Info from "./Info";
import Experience from "./Experience";
import Education from "./Education";
import { useState, useContext } from "react";
import { blockContext } from "../App";
import uniqid from "uniqid";
function Form() {
  const [exp, setExp] = useState([uniqid()]);
  const [edu, setEdu] = useState([uniqid()]);

  const context = useContext(blockContext);
  const Reset = () => {
    context.updateBlocks([]);
    setExp([uniqid()]);
    setEdu([uniqid()]);
    context.setSrc("./placeholder.svg");
    context.setInfo({
      title: "",
      "f-name": "",
      "l-name": "",
      phone: "",
      email: "",
      address: "",
    });
  };
  const LoadSample = () => {
    Reset();

    // set profile image
    context.setSrc("./rick.jpeg");
    // set information
    context.setInfo({
      title: "senior developer",
      "f-name": "rick",
      "l-name": "sanchez",
      phone: "+11111111111",
      email: "rickSanchez@mars.com",
      address: "plotonium highway morty street p22",
    });

    let temp = context.blocks.slice(0, 2);
    temp.map((obj) => {
      if (obj.title === "Experience") {
        obj.position = "senior web developer";
        obj.company = "facebook";
        obj.city = "Ink";
        obj.from = "2018";
        obj.to = "2020";
        return obj;
      } else {
        obj.university = "University of Technology";
        obj.degree = "Master";
        obj.city = "Oklahoma";
        obj.subject = "teach";
        obj.from = "2015";
        obj.to = "2018";
        return obj;
      }
    });

    context.updateBlocks(temp);
  };
  return (
    <div className="col-span-6 border-2 border-gray-200 shadow-lg py-4 min-w-[400px]">
      <Info />
      {exp.map((id) => (
        <Experience key={id} id={id} setExp={setExp} exp={exp} />
      ))}
      <button
        className="w-10/12 mx-auto block mt-4 bg-emerald-300 text-white  text-lg font-medium py-1 rounded
        hover:bg-emerald-500 transition delay-150
        ease-in-out hover:-translate-y-1  hover:animate-pulse"
        onClick={() => setExp([...exp, uniqid()])}
      >
        Add Experience
      </button>

      {edu.map((id) => (
        <Education key={id} id={id} setEdu={setEdu} edu={edu} />
      ))}
      <button
        className="w-10/12 mx-auto block mt-4 bg-emerald-300 text-white text-lg font-medium py-1 rounded
        hover:bg-emerald-500 transition delay-150
          ease-in-out hover:-translate-y-1  hover:animate-pulse"
        onClick={() => setEdu([...edu, uniqid()])}
      >
        Add Education
      </button>

      <button
        className="w-10/12 mx-auto block my-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
       text-white text-lg font-medium py-1 rounded transition delay-150
       ease-in-out hover:-translate-y-1  hover:animate-pulse"
        onClick={LoadSample}
      >
        Load sample
      </button>

      <button
        className="w-10/12 mx-auto block my-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
       text-white text-lg font-medium py-1 rounded transition delay-150
        ease-in-out hover:-translate-y-1  hover:animate-pulse"
        onClick={Reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Form;
