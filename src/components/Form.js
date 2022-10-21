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

    const expSample = {
      position: "senior web developer",
      company: "facebook",
      city: "Ink",
      from: "2018",
      to: "2020",
    };
    const eduSample = {
      university: "University of Technology",
      degree: "Master",
      city: "Oklahoma",
      subject: "Science",
      from: "2015",
      to: "2018",
    };
    //reset to as single edu and exp
    context.updateBlocks([]);
    setExp([uniqid()]);
    setEdu([uniqid()]);

    const temp = context.blocks.map((obj) =>
      obj.title === "Experience"
        ? { ...obj, ...expSample }
        : { ...obj, ...eduSample }
    );

    context.updateBlocks(temp);
  };
  return (
    <div className="col-span-6 border-2 border-gray-200 shadow-lg py-4">
      <Info />
      {exp.map((id) => (
        <Experience key={id} id={id} setExp={setExp} exp={exp} />
      ))}
      <button
        className="w-10/12 mx-auto block mt-4 bg-emerald-300 text-white  text-lg font-medium py-1 rounded"
        onClick={() => setExp([...exp, uniqid()])}
      >
        Add Experience
      </button>

      {edu.map((id) => (
        <Education key={id} id={id} setEdu={setEdu} edu={edu} />
      ))}
      <button
        className="w-10/12 mx-auto block mt-4 bg-emerald-300 text-white text-lg font-medium py-1 rounded"
        onClick={() => setEdu([...edu, uniqid()])}
      >
        Add Education
      </button>

      <button
        className="w-10/12 mx-auto block my-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
       text-white text-lg font-medium py-1 rounded"
        onClick={LoadSample}
      >
        Load sample
      </button>

      <button
        className="w-10/12 mx-auto block my-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
       text-white text-lg font-medium py-1 rounded"
        onClick={Reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Form;
