function Info(props) {
  return (
    <form className="grid grid-cols-3">
      <label
        htmlFor="cv-image"
        className="block row-span-2 bg-gray-300 flex justify-center items-center px-4 py-4 cursor-pointer mx-4"
      >
        no file chosen
      </label>
      <input type="file" id="cv-image" className="hidden" />
      <div className=" inline-flex flex-col  mx-4">
        <label htmlFor={"f-name"} className="text-stone-500 ">
          First Name
        </label>
        <input type="text" id="f-name" className="bg-gray-100" />
      </div>
      <div className=" inline-flex flex-col mx-4">
        <label htmlFor={"l-name"} className="text-stone-500 ">
          Last Name
        </label>
        <input type="text" id="l-name" className="bg-gray-100" />
      </div>
      <div className=" inline-flex flex-col mx-4 col-span-2">
        <label htmlFor={"title"} className="text-stone-500 ">
          Title
        </label>
        <input type="text" id="title" className="bg-gray-100" />
      </div>
      <div className=" inline-flex flex-col mx-4">
        <label htmlFor={"phone"} className="text-stone-500 ">
          phone Number
        </label>
        <input type="number" id="phone" className="bg-gray-100" />
      </div>
      <div className=" inline-flex flex-col mx-4 col-span-2">
        <label htmlFor={"email"} className="text-stone-500 ">
          Email Address
        </label>
        <input type="email" id="email" className="bg-gray-100" />
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
        ></textarea>
      </div>
    </form>
  );
}

export default Info;
