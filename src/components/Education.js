import { Fragment, useContext, useEffect, useState } from "react";
import { blockContext } from "./../App";
import uniqid from "uniqid";
function Education(props) {
  const context = useContext(blockContext);
  const [data, setData] = useState({
    id: uniqid(),
    title: "Education",
    university: "",
    degree: "",
    city: "",
    subject: "",
    from: "",
    to: "",
  });
  useEffect(() => {
    // add this instance state to blocks context
    context.AddBlocks(data);
  }, []);

  const handleInput = (e) => {
    const id = e.target.getAttribute("id");
    setData(...[data], (data[id] = e.target.value));
    const temp = context.blocks.map((obj) =>
      obj.id === data.id ? { ...data } : obj
    );
    context.updateBlocks(temp);
  };
  return (
    <Fragment>
      <h2 className="mx-4 my-6">Education</h2>
      <form className="grid grid-cols-12">
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"subject"} className="text-stone-500 ">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>

        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"degree"} className="text-stone-500 ">
            Degree
          </label>
          <input
            type="text"
            id="degree"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"city"} className="text-stone-500 ">
            City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>

        <div className=" inline-flex flex-col  mx-4 col-span-6">
          <label htmlFor={"university"} className="text-stone-500 ">
            University Name
          </label>
          <input
            type="text"
            id="university"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>

        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"from"} className="text-stone-500 ">
            From
          </label>
          <input
            type="number"
            id="from"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"to"} className="text-stone-500 ">
            To
          </label>
          <input
            type="email"
            id="to"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>
      </form>
    </Fragment>
  );
}

export default Education;
