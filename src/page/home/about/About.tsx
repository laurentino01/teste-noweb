import { Typography } from "../../../components/typography/Typography";
import pattern from "../../../assets/whitepattern.svg";
import "./about.css";
import { Button } from "../../../components/buttons/Button";

export const About = () => {
  return (
    <section className="about">
      <div className="about-title-area">
        <img src={pattern} alt="" />
        <Typography variant="subtitle" element="h2">
          SUA MELHOR OPÇÃO
        </Typography>
      </div>
      <div className="about-about-area">
        <img src="" alt="" />
        <div>
          <Typography variant="paragraph" element="p">
            Desde 1970 somos especializados em materiais elétricos, sendo uma
            das principais distribuidoras do setor. Oferecemos os melhores
            produtos, com o preço que cabe no seu bolso e atende todas as
            necessidades do seu dia a dia. Aqui você irá encontrar lustres,
            luminárias, utilidades domésticas, ferramentas, acessórios,
            lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada
            padrão Eletropaulo, materiais elétricos em geral, equipamentos de
            segurança e comunicação.
          </Typography>
          <Button variant="dark">Saiba mais sobre nós</Button>
        </div>
      </div>
    </section>
  );
};
