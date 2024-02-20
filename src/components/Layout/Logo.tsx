import LogoImg from "@assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        style={{ height: "50px" }}
        src={LogoImg}
        alt="Pizza Shop"
      />
    </Link>
  );
};

export default Logo;
