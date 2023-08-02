import productBG from "../../../assets/bg-imgs/products-background.svg";
import { Card } from "../../../components/cards/Card";
import { Typography } from "../../../components/typography/Typography";
import lustres from "../../../assets/products-imgs/lustre.svg";
import "./Products.css";
import { useEffect } from "react";

export const Products = () => {
  useEffect(() => {}, []);

  return (
    <section className="products">
      <div className="title-area">
        <img src={productBG} alt="" />
        <Typography variant="subtitle" element="h2">
          PRODUTOS EM DESTAQUE
        </Typography>
      </div>
      <div className="products-area">
        <Card
          srcImg={lustres}
          tag="Lustres"
          title="Lustre suspenso rústico"
          oldPrice="R$ 1.500,00"
          newPrice="R$ 1.000,00"
          paymentDatail="ou em 3x de R$ 333,33"
        />
        <Card
          srcImg={lustres}
          tag="Lustres"
          title="Lustre suspenso rústico"
          oldPrice="R$ 1.500,00"
          newPrice="R$ 1.000,00"
          paymentDatail="ou em 3x de R$ 333,33"
        />
        <Card
          srcImg={lustres}
          tag="Lustres"
          title="Lustre suspenso rústico"
          oldPrice="R$ 1.500,00"
          newPrice="R$ 1.000,00"
          paymentDatail="ou em 3x de R$ 333,33"
        />
        <Card
          srcImg={lustres}
          tag="Lustres"
          title="Lustre suspenso rústico"
          oldPrice="R$ 1.500,00"
          newPrice="R$ 1.000,00"
          paymentDatail="ou em 3x de R$ 333,33"
        />
        <Card
          srcImg={lustres}
          tag="Lustres"
          title="Lustre suspenso rústico"
          oldPrice="R$ 1.500,00"
          newPrice="R$ 1.000,00"
          paymentDatail="ou em 3x de R$ 333,33"
        />
      </div>
    </section>
  );
};
