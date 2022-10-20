import { useContext } from "react";
import { blockContext } from "../App";
function Info(props) {
  const context = useContext(blockContext);

  const handleFileInput = (e) => {
    context.setSrc(URL.createObjectURL(e.target.files[0]));
  };

  const handleInfo = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    context.setInfo({ ...context.info, [id]: value });
  };

  return (
    <form className="grid grid-cols-3 shadow-md py-4">
      <label
        htmlFor="cv-image"
        className="block row-span-2 bg-gray-200 flex justify-center items-center px-4 py-4 cursor-pointer mx-4"
      >
        upload image
      </label>
      <input
        type="file"
        id="cv-image"
        className="hidden"
        onChange={handleFileInput}
      />
      <div className=" inline-flex flex-col  mx-4">
        <label htmlFor={"f-name"} className="text-stone-500 ">
          First Name
        </label>
        <input
          type="text"
          id="f-name"
          className="bg-gray-100"
          onChange={handleInfo}
        />
      </div>
      <div className=" inline-flex flex-col mx-4">
        <label htmlFor={"l-name"} className="text-stone-500 ">
          Last Name
        </label>
        <input
          type="text"
          id="l-name"
          className="bg-gray-100"
          onChange={handleInfo}
        />
      </div>
      <div className=" inline-flex flex-col mx-4 col-span-2">
        <label htmlFor={"title"} className="text-stone-500 ">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-100"
          onChange={handleInfo}
        />
      </div>
      <div className=" inline-flex flex-col mx-4">
        <label htmlFor={"phone"} className="text-stone-500 ">
          phone Number
        </label>
        <input
          type="number"
          id="phone"
          className="bg-gray-100"
          onChange={handleInfo}
        />
      </div>
      <div className=" inline-flex flex-col mx-4 col-span-2">
        <label htmlFor={"email"} className="text-stone-500 ">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-100"
          onChange={handleInfo}
        />
      </div>
      <div className=" inline-flex flex-col mx-4 col-span-3">
        <label htmlFor="address" className="text-stone-500 ">
          Address
        </label>
        <textarea
          id="address"
          rows="4"
          cols="50"
          className="bg-gray-100"
          onChange={handleInfo}
        ></textarea>
      </div>
    </form>
  );
}

export default Info;
