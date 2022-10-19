import { Fragment, useContext, useEffect, useState } from "react";
import { blockContext } from "./../App";
import uniqid from "uniqid";
function Experience(props) {
  const context = useContext(blockContext);
  const [data, setData] = useState({
    id: uniqid(),
    title: "Experience",
    position: "",
    company: "",
    city: "",
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
      <h2 className="mx-4 my-6">Experience</h2>
      <form className="grid grid-cols-12">
        <div className=" inline-flex flex-col  mx-4 col-span-4">
          <label htmlFor={"position"} className="text-stone-500 ">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-4">
          <label htmlFor={"company"} className="text-stone-500 ">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-100"
            onChange={handleInput}
          />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-4">
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

export default Experience;
