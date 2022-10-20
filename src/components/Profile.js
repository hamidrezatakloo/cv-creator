import { useContext } from "react";
import { blockContext } from "../App";
function Profile() {
  const context = useContext(blockContext);

  return (
    <div className="flex flex-col">
      <div>
        <img src={context.src} alt="profile" className="w-[200px] rounded" />
        <h2 className="capitalize text-cyan-500 font-bold text-2xl">
          senior developer
        </h2>
      </div>
      <h4>Name</h4>
      <p className="text-stone-500">hamid reza</p>
      <h4>Email Address</h4>
      <p className="text-stone-500">gamemaster9970@gmail.com</p>
      <h4>Phone Number</h4>
      <p className="text-stone-500">+98939166257</p>
      <h4>Address</h4>
      <p className="text-stone-500">emam ali highway tajik street cottage 14</p>
    </div>
  );
}

export default Profile;
