import { useEffect, useState } from "react";

import { Typography } from "../../../components/typography/Typography";
import { ShowCase } from "../../../components/showcase/ShowCase";
import pattern from "../../../assets/whitepattern.svg";
import lampada from "../../../assets/products-imgs/lampada.svg";

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
