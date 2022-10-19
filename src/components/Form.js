import Info from "./Info";
import Experience from "./Experience";
import Education from "./Education";
function Form() {
  return (
    <div className="col-span-6 border-2 border-gray-200 shadow-lg py-4">
      <Info />
      <Experience />
      <Education />
    </div>
  );
}

export default Form;
