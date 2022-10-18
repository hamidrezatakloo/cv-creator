import Input from "./Input";
function Form() {
  return (
    <form className="col-span-6 grid grid-cols-3">
      <label
        htmlFor="cv-image"
        className="block row-span-2 bg-gray-300 flex justify-center items-center px-4 py-4 cursor-pointer"
      >
        no file chosen
      </label>
      <input type="file" id="cv-image" className="hidden" />
      <Input type="text" id="f-name" label="First Name" />
      <Input type="text" id="l-name" label="Last Name" />
      <Input type="text" id="title" label="Title" />
      <Input type="number" id="phone" label="phone Number" />
      <Input type="email" id="email" label="Email" />
      <div className=" inline-flex flex-col mx-4">
        <label htmlFor="address" className="text-stone-500">
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

export default Form;
