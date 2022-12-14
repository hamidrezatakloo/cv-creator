import { useContext } from "react";
import { blockContext } from "../App";
function Profile() {
  const context = useContext(blockContext);
  return (
    <div className="flex flex-col">
      <div>
        <img src={context.src} alt="profile" className="w-[200px] rounded" />
        <h2 className="capitalize text-cyan-500 font-bold text-2xl mt-4">
          {context.info.title}
        </h2>
      </div>
      <h4 className="my-2">Name</h4>
      <p className="text-stone-500">
        {context.info["f-name"] + " " + context.info["l-name"]}
      </p>
      <h4 className="my-2">Email Address</h4>
      <p className="text-stone-500">{context.info.email}</p>
      <h4 className="my-2">Phone Number</h4>
      <p className="text-stone-500">{context.info.phone}</p>
      <h4 className="my-2">Address</h4>
      <p className="text-stone-500">{context.info.address}</p>
    </div>
  );
}

export default Profile;
