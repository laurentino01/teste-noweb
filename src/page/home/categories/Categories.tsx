import { useEffect, useState } from "react";

import { Typography } from "../../../components/typography/Typography";
import { ShowCase } from "../../../components/showcase/ShowCase";
import pattern from "../../../assets/whitepattern.svg";
import lampada from "../../../assets/products-imgs/lampada.svg";
import lustres from "../../../assets/products-imgs/lustres-categoria.svg";
import luminarias from "../../../assets/products-imgs/luminárias-categoria.svg";
import decoracoes from "../../../assets/products-imgs/decoracoes-categoia.svg";
import acessorios from "../../../assets/products-imgs/acessorios-categorias.svg";
import ferramentas from "../../../assets/products-imgs/ferramentas-categoria.svg";
import utensilios from "../../../assets/products-imgs/utensilios-categoria.svg";
import cabos from "../../../assets/products-imgs/cabos-categorias.svg";

import "./categories.css";

interface ICategoriesData {
  children: string;
  srcImg: string;
}

export const Categories = () => {
  const [categoriestList, setCategoriesList] = useState<ICategoriesData[]>([]);

  useEffect(() => {
    const list = [
      {
        children: "LÂMPADAS",
        srcImg: lampada,
      },
      {
        children: "LUSTRES",
        srcImg: lustres,
      },
      {
        children: "LUMINÁRIAS",
        srcImg: luminarias,
      },
      {
        children: "DECORAÇÕES",
        srcImg: decoracoes,
      },
      {
        children: "ACESSÓRIOS",
        srcImg: acessorios,
      },
      {
        children: "FERRAMENTAS",
        srcImg: ferramentas,
      },
      {
        children: "UTENSÍLIOS DOMÉSTICOS",
        srcImg: utensilios,
      },
      {
        children: "CABOS",
        srcImg: cabos,
      },
    ];

    setCategoriesList(list);
  }, []);

  return (
    <section className="categories">
      <div className="categories-subtitle-area">
        <div>
          <img src={pattern} alt="" />
          <Typography variant="subtitle" element="h2">
            CATEGORIAS
          </Typography>
        </div>
      </div>
      <div className="categories-categories-area">
        {categoriestList.map((item) => (
          <ShowCase key={item.srcImg} srcImg={item.srcImg} size="normal">
            {item.children}
          </ShowCase>
        ))}
      </div>
    </section>
  );
};
