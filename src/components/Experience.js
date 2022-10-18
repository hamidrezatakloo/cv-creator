import { Fragment } from "react";
function Experience(props) {
  return (
    <Fragment>
      <h2 className="mx-4 my-6">Experience</h2>
      <form className="grid grid-cols-12">
        <div className=" inline-flex flex-col  mx-4 col-span-4">
          <label htmlFor={"position"} className="text-stone-500 ">
            Position
          </label>
          <input type="text" id="position" className="bg-gray-100" />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-4">
          <label htmlFor={"company"} className="text-stone-500 ">
            Company
          </label>
          <input type="text" id="company" className="bg-gray-100" />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-4">
          <label htmlFor={"city"} className="text-stone-500 ">
            City
          </label>
          <input type="text" id="city" className="bg-gray-100" />
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

export default Experience;
