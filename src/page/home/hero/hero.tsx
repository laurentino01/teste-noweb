import { Button } from "../../../components/buttons/Button";
import { Typography } from "../../../components/typography/Typography";
import arrow from "../../../assets/icons/hero-arrow.svg";
import heroImg from "../../../assets/bg-imgs/hero-woman-img.svg";
import "./hero.css";

export const Hero = () => {
  return (
    <main className="hero">
      <section>
        <Typography element="h1" variant="title">
          ILUMINE O SEU <br /> DIA A DIA!
        </Typography>
        <Typography element="p" variant="paragraph">
          Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia{" "}
          <br />a dia! Temos produtos para toda sua casa com a melhor
          <br /> qualidade e atendimento da região!
        </Typography>
        <Button variant="primary">VEJA NOSSOS PRODUTOS</Button>
        <Button variant="outline">NOS CONHEÇA MELHOR</Button>

        <div>
          <img src={arrow} alt="" />
          <Typography element="p" variant="paragraph">
            Role para ver mais
          </Typography>
        </div>
      </section>
      <div>
        <img className="womanImg" src={heroImg} alt="" />
      </div>
    </main>
  );
};
