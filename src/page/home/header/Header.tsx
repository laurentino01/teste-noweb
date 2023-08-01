import { NavLink } from "react-router-dom";

import logo from "../../../assets/bg-imgs/logo.svg";
import pattern from "../../../assets/header-pattern.svg";
import { Button } from "../../../components/buttons/Button";
import { DropDown } from "../../../components/dropdown/DropDown";
import "./header.css";
import { ResponsiveMenu } from "../../../components/responsiveMenu/responsiveMenu";

export const Header = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={pattern}
        alt=""
        style={{
          position: "absolute",
          left: 0,
          zIndex: 0,
          width: "clamp(3.75rem, 3.0357rem + 3.5714vw, 6.25rem)",
        }}
      />
      <header
        style={{
          margin: "0 auto",

          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="logo-area">
          <img
            src={logo}
            alt=""
            style={{ width: "100px", cursor: "pointer" }}
          />
        </div>
        <nav>
          <ul className="list-items">
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <DropDown>Categorias</DropDown>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/Localização">Localização</NavLink>
            </li>
            <li>
              <Button variant="cta">Contato</Button>
            </li>
          </ul>
          <ResponsiveMenu />
        </nav>
      </header>
    </div>
  );
};
