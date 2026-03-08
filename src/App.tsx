import MenuToggler from "./components/menu/MenuToggler";
import { useState } from "react";
function App() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <div className="flex">
        <MenuToggler menu={isMenu} setMenu={setIsMenu} />
      </div>
    </>
  );
}

export default App;
