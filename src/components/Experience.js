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
    if (context.blocks.length === 2 && props.exp.length === 1) return;
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

  const handleRemove = (e) => {
    e.preventDefault();
    props.setExp((prevState) => prevState.filter((id) => id !== props.id));

    const temp = context.blocks.filter((obj) => obj.id !== data.id);
    context.updateBlocks(temp);
  };
  return (
    <Fragment>
      <h2 className="mx-4 my-6">Experience</h2>
      <form className="grid grid-cols-12 shadow py-4">
        <div className=" inline-flex flex-col  mx-4 col-span-4">
          <label htmlFor={"position"} className="text-stone-500 ">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="bg-gray-200"
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
            className="bg-gray-200"
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
            className="bg-gray-200"
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
            className="bg-gray-200"
            onChange={handleInput}
          />
        </div>
        <div className=" inline-flex flex-col mx-4 col-span-6">
          <label htmlFor={"to"} className="text-stone-500 ">
            To
          </label>
          <input
            type="number"
            id="to"
            className="bg-gray-200"
            onChange={handleInput}
          />
        </div>
        <button
          className="col-start-2 col-end-12 mt-4 bg-rose-400 text-white text-lg 
          font-medium py-1 rounded hover:bg-rose-500 transition delay-150
          ease-in-out hover:-translate-y-1  hover:animate-pulse"
          onClick={handleRemove}
        >
          Delete
        </button>
      </form>
    </Fragment>
  );
}

export default Experience;
