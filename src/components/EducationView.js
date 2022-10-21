function EducationView({ block }) {
  return (
    <div className="text-cyan-500 my-4">
      <h1 className="text-lg font-bold">{block.title}</h1>
      <div className="flex justify-between my-4">
        <h2 className="text-black text-xl font-bold">{block.subject}</h2>
        <div>
          <span>{block.from}</span>
          {block.from ? "-" : ""}
          <span>{block.to}</span>
        </div>
      </div>
      <div>
        <span>{block.university}</span>
        {block.university ? "," : ""}
        <span>{block.city}</span>
        {block.city ? "," : ""}
        <span>{block.degree}</span>
      </div>
    </div>
  );
}

export default EducationView;
