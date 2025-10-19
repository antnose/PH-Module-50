import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center py-5">
        <img src={logo} alt="" />
      </div>
      <p className="text-center">Journalism Without Fear or Favour</p>

      <p className="text-center">
        {format(new Date(), "EEEE")}, {format(new Date(), "LLLL")}{" "}
        {format(new Date(), "d")}, {format(new Date(), "y")}
      </p>
    </div>
  );
};

export default Header;
