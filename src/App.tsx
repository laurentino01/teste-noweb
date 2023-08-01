import { Card } from "./components/cards/Card";
import lustre from "./assets/products-imgs/lustre.svg";

export const App = () => {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "black" }}>
        <Card
          srcImg={lustre}
          tag="Lustres"
          title="Lustre suspenso rústico"
          oldPrice="R$ 1.500,00"
          newPrice="R$ 1.000,00"
          paymentDatail="ou em 3x de R$ 333,33"
        ></Card>
      </div>
    </>
  );
};
