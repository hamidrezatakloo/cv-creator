function Input({ type, w = "100px", h = "30px", id, label }) {
  return (
    <div className=" inline-flex flex-col mx-4">
      <label htmlFor={id} className="text-stone-500">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="bg-gray-100"
        style={{ width: w, height: h }}
      />
    </div>
  );
}

export default Input;
