import IconButton from "../button/IconButton";
import { RiAppsLine, RiAppsFill } from "react-icons/ri";

interface MenuTogglerProps {
  menu: boolean;
  setMenu: (func: (prev: boolean) => boolean) => void;
}
const MenuToggler: React.FC<MenuTogglerProps> = ({ menu, setMenu }) => {
  return (
    <IconButton
      icon={menu ? <RiAppsFill /> : <RiAppsLine />}
      onClick={() => setMenu((p) => !p)}
    />
  );
};
export default MenuToggler;
