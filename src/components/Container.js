import Form from "./Form";
import View from "./View";
function Container() {
  return (
    <div className="grid grid-cols-12">
      <Form />
      <View />
    </div>
  );
}

export default Container;
