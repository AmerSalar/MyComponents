import MenuToggler from "./components/menu/MenuToggler";
import CardSlider from "./components/card/CardSlider";
import { useState } from "react";
function App() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <MenuToggler menu={isMenu} setMenu={setIsMenu} />
      <div className="border rounded-2xl h-[90vh] w-">
        <CardSlider />
      </div>
    </>
  );
}

export default App;
