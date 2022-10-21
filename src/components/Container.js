import Form from "./Form";
import View from "./View";
function Container() {
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto py-4 gap-x-2 min-w-[1000px]">
      <Form />
      <View />
    </div>
  );
}

export default Container;
