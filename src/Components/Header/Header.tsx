import logo from "../../img/shared/logo.svg";
import { pagesProps} from "../../type/header";
import HeaderButton from "./HeaderButton";
import "./style.css";

const Header = ({page,onActive}:pagesProps) => {


  return (
    <nav className="header">
      <div className="logoBx">
        <img src={logo} alt="Logo" />
      </div>
        <HeaderButton page={page} onActive={onActive}/>
    </nav>
  );
};

export default Header;
