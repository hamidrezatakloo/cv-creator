import Input from "./Input";
function Form() {
  return (
    <form className="col-span-6">
      <label
        htmlFor="cv-image"
        className="block w-[150px] h-[150px] bg-gray-300 flex justify-center items-center px-4 py-4 cursor-pointer"
      >
        no file chosen
      </label>
      <input type="file" id="cv-image" className="hidden" />
      <Input type="text" id="f-name" label="First Name" />
      <Input type="text" id="l-name" label="Last Name" />
      <Input type="text" id="title" label="Title" />
      <Input type="number" id="phone" label="phone Number" />
    </form>
  );
}

export default Form;
