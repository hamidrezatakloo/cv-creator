import Profile from "./Profile";
import History from "./History";
function View() {
  return (
    <div className="col-span-6 grid grid-cols-3 border-t-[40px] border-t-cyan-400 p-4 border-2 border-gray-200 shadow-lg sticky top-0 self-start">
      <Profile />
      <History />
    </div>
  );
}

export default View;
