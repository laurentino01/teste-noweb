import { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow-down-icon.svg";
import lampada from "../../assets/products-imgs/lampada.svg";
import lustres from "../../assets/products-imgs/lustres-categoria.svg";
import luminarias from "../../assets/products-imgs/luminárias-categoria.svg";
import decoracoes from "../../assets/products-imgs/decoracoes-categoia.svg";
import acessorios from "../../assets/products-imgs/acessorios-categorias.svg";
import ferramentas from "../../assets/products-imgs/ferramentas-categoria.svg";
import utensilios from "../../assets/products-imgs/utensilios-categoria.svg";
import cabos from "../../assets/products-imgs/cabos-categorias.svg";
import "./DropDown.css";

interface IDropDownProps {
  children: React.ReactNode;
}

interface IDropDownItemsData {
  srcImg: string;
  title: string;
}

import { ShowCase } from "../showcase/ShowCase";
import { Typography } from "../typography/Typography";

export const DropDown: React.FC<IDropDownProps> = ({ children }) => {
  const [items, setItems] = useState<IDropDownItemsData[]>([]);

  useEffect(() => {
    const itemsList: IDropDownItemsData[] = [
      { srcImg: lampada, title: "Lâmpada" },
      { srcImg: lustres, title: "Lustres" },
      { srcImg: luminarias, title: "Luminárias" },
      { srcImg: decoracoes, title: "Decorações" },
      { srcImg: acessorios, title: "Acessórios" },
      { srcImg: ferramentas, title: "Ferramentas" },
      {
        srcImg: utensilios,
        title: "Utensílios Domésticos",
      },
      {
        srcImg: cabos,
        title: "Cabos",
      },
    ];

    setItems(itemsList);
  }, []);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-item">
          <Typography element="h6" variant="menuItems">
            {children}
          </Typography>
          <img src={arrow} />
        </div>

        <div className="dropdown-content">
          <div className="dropdown-menu-triangle "></div>
          <ul>
            {items.map((item) => (
              <li
                key={item.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  cursor: "pointer",
                }}
              >
                <ShowCase srcImg={item.srcImg} size="small"></ShowCase>
                <Typography element="h6" variant="button">
                  {item.title}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
