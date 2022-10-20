import Info from "./Info";
import Experience from "./Experience";
import Education from "./Education";
import { useState } from "react";
function Form() {
  const [exp, setExp] = useState(1);
  const [edu, setEdu] = useState(1);
  return (
    <div className="col-span-6 border-2 border-gray-200 shadow-lg py-4">
      <Info />
      {[...Array(exp)].map((v, i) => (
        <Experience key={i} />
      ))}
      <button
        className="w-full mt-4 bg-emerald-300 text-white text-lg font-medium py-1 rounded"
        onClick={() => setExp(exp + 1)}
      >
        Add
      </button>

      {[...Array(edu)].map((v, i) => (
        <Education key={i} />
      ))}
      <button
        className="w-full mt-4 bg-emerald-300 text-white text-lg font-medium py-1 rounded"
        onClick={() => setEdu(edu + 1)}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
