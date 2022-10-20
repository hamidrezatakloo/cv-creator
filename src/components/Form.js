import Info from "./Info";
import Experience from "./Experience";
import Education from "./Education";
import { useState } from "react";
import uniqid from "uniqid";
function Form() {
  const [exp, setExp] = useState([uniqid()]);
  const [edu, setEdu] = useState([uniqid()]);
  return (
    <div className="col-span-6 border-2 border-gray-200 shadow-lg py-4">
      <Info />
      {exp.map((id) => (
        <Experience key={id} id={id} setExp={setExp} />
      ))}
      <button
        className="w-full mt-4 bg-emerald-300 text-white text-lg font-medium py-1 rounded"
        onClick={() => setExp([...exp, uniqid()])}
      >
        Add
      </button>

      {edu.map((id) => (
        <Education key={id} id={id} setEdu={setEdu} />
      ))}
      <button
        className="w-full mt-4 bg-emerald-300 text-white text-lg font-medium py-1 rounded"
        onClick={() => setEdu([...edu, uniqid()])}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
