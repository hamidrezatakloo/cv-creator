import { Fragment } from "react";
function Education(props) {
  return (
    <Fragment>
      <h2 className="mx-4 my-6">Education</h2>
      <form className="grid grid-cols-12">
        <div className=" inline-flex flex-col  mx-4 col-span-6">
          <label htmlFor={"university"} className="text-stone-500 ">
            University Name
          </label>
          <input type="text" id="university" className="bg-gray-100" />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"degree"} className="text-stone-500 ">
            Degree
          </label>
          <input type="text" id="degree" className="bg-gray-100" />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"city"} className="text-stone-500 ">
            City
          </label>
          <input type="text" id="city" className="bg-gray-100" />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"subject"} className="text-stone-500 ">
            Subject
          </label>
          <input type="text" id="subject" className="bg-gray-100" />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"from"} className="text-stone-500 ">
            From
          </label>
          <input type="number" id="from" className="bg-gray-100" />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"to"} className="text-stone-500 ">
            To
          </label>
          <input type="email" id="to" className="bg-gray-100" />
        </div>
      </form>
    </Fragment>
  );
}

export default Education;
