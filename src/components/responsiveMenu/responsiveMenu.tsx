import { useEffect, useState } from "react";
import hamburguer from "../../assets/icons/hamburgues.svg";
import "./responsiveMenu.css";

import { NavLink } from "react-router-dom";
import { Button } from "../buttons/Button";

export const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setAnimate(true);
      }, 200);
    }
  };

  const handleClose = () => {
    if (isOpen) {
      setAnimate(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  };

  return (
    <>
      <div className="hamburguer">
        <img
          src={hamburguer}
          alt=""
          onClick={isOpen ? handleClose : handleOpen}
        />
      </div>
      {isOpen && (
        <div
          className="responsive-menu"
          style={{
            right: animate ? 0 : "-100%",
          }}
        >
          <ul className="responsive-list">
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/sobre"}>Sobre</NavLink>
            </li>
            <li>
              <NavLink to={"/localizacao"}>Localização</NavLink>
            </li>
            <li>
              <Button variant="cta">Contato</Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
