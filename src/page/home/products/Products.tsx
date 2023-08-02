import { useEffect, useState } from "react";

import productBG from "../../../assets/bg-imgs/products-background.svg";
import { Card } from "../../../components/cards/Card";
import { Typography } from "../../../components/typography/Typography";
import lustres from "../../../assets/products-imgs/lustre.svg";
import lampada from "../../../assets/destaques/lampada.svg";
import reguas from "../../../assets/destaques/reguas.svg";
import ferramentas from "../../../assets/destaques/kit-ferramentas.svg";
import garfos from "../../../assets/destaques/garfos.svg";
import chuveiros from "../../../assets/destaques/chuveiros.svg";
import ventiladores from "../../../assets/destaques/ventilador.svg";
import tomadas from "../../../assets/destaques/tomadas.svg";

import "./Products.css";

interface IProductListData {
  srcImg: string;
  tag: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  paymentDatail: string;
}

export const Products = () => {
  const [productList, setProductList] = useState<IProductListData[]>([]);

  useEffect(() => {
    const list = [
      {
        srcImg: lustres,
        tag: "Lustres",
        title: "Lustre suspenso rústico",
        oldPrice: "R$ 1.500,00",
        newPrice: "R$ 1.000,00",
        paymentDatail: "ou em 3x de R$ 333,33",
      },
      {
        srcImg: lampada,
        tag: "Lâmpadas",
        title: "Lâmpada",
        oldPrice: "R$ 60,00",
        newPrice: "R$ 45,00",
        paymentDatail: "ou em 2x de R$ 22,50",
      },
      {
        srcImg: reguas,
        tag: "Acessórios",
        title: "Filtros de linha",
        oldPrice: "R$ 25,00",
        newPrice: "R$ 17,00",
        paymentDatail: "",
      },
      {
        srcImg: ferramentas,
        tag: "Ferramentas",
        title: "Kit de ferramentas",
        oldPrice: "R$ 100,00",
        newPrice: "R$ 80,00",
        paymentDatail: "ou em 2x de R$ 40,00",
      },
      {
        srcImg: garfos,
        tag: "Utensílios domésticos",
        title: "Garfos de mesa inox",
        oldPrice: "R$ 15,00",
        newPrice: "R$ 8,00",
        paymentDatail: "",
      },
      {
        srcImg: chuveiros,
        tag: "Acessórios",
        title: "Chuveiro",
        oldPrice: "R$ 120,00",
        newPrice: "R$ 100,00",
        paymentDatail: "ou em 4 x de R$ 25,00",
      },
      {
        srcImg: ventiladores,
        tag: "Utensílios domésticos",
        title: "Ventilador 2 em 1 mesa e parede",
        oldPrice: "R$ 50,00",
        newPrice: "R$ 30,00",
        paymentDatail: "",
      },
      {
        srcImg: tomadas,
        tag: "Acessórios",
        title: "Tomada",
        oldPrice: "R$ 20,00",
        newPrice: "R$ 10,00",
        paymentDatail: "",
      },
    ];

    setProductList(list);
  }, []);

  return (
    <section className="products" id="products">
      <div className="title-area">
        <img src={productBG} alt="" />
        <Typography variant="subtitle" element="h2">
          PRODUTOS EM DESTAQUE
        </Typography>
      </div>
      <div className="products-area">
        {productList.map((item) => (
          <Card
            key={item.title}
            srcImg={item.srcImg}
            tag={item.tag}
            title={item.title}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            paymentDatail={item.paymentDatail}
          />
        ))}
      </div>
    </section>
  );
};
