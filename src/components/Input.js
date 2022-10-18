function Input({ type, w = "100px", h = "30px", id, label }) {
  return (
    <span className=" inline-flex flex-col mx-4">
      <label htmlFor={id} className="text-stone-500">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="bg-gray-100"
        style={{ width: w, height: h }}
      />
    </span>
  );
}

export default Input;
