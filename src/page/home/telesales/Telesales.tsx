import woman from "../../../assets/bg-imgs/woman-telesales.svg";
import { Button } from "../../../components/buttons/Button";
import "./telesales.css";

export const Telesales = () => {
  return (
    <section className="telesales">
      <img src={woman} alt="" />
      <div>
        <Button variant="primary">ACIONE NOSSO TELEVENDAS</Button>
      </div>
    </section>
  );
};
