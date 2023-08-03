import { Typography } from "../../../components/typography/Typography";
import logo from "../../../assets/logo-white.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-area">
        <div>
          <img src={logo} alt="" />
          <Typography element="p" variant="paragraph">
            Venha na Elétrica J. Santos e garanta a melhor <br /> opção para sua
            casa!
          </Typography>
        </div>
        <div>
          <Typography element="p" variant="paragraph">
            NOS SIGA NAS REDES
          </Typography>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Typography element="p" variant="paragraph">
            &copy Copyright 2021 - Elétrica J. Santos - Todos os Direitos
            Reservados
          </Typography>
        </div>
        <img src="" alt="" />
      </div>
    </footer>
  );
};
