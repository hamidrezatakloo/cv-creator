function ExperienceView({ block }) {
  return (
    <div className="text-cyan-500 my-4">
      <h1 className="text-lg font-bold">{block.title}</h1>
      <div className="flex justify-between my-4">
        <h2 className="text-black text-xl font-bold">{block.position}</h2>
        <div>
          <span>{block.from}</span>
          {block.from ? "-" : ""}
          <span>{block.to}</span>
        </div>
      </div>
      <div>
        <span>{block.company}</span>
        {block.company ? "," : ""}
        <span>{block.city}</span>
      </div>
    </div>
  );
}

export default ExperienceView;
