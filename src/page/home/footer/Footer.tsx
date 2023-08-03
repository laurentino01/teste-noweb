import { Typography } from "../../../components/typography/Typography";
import logo from "../../../assets/logo-white.svg";
import whats from "../../../assets/icons/whatsapp-icon.svg";
import insta from "../../../assets/icons/instagram-icon.svg";
import face from "../../../assets/icons/facebook-icon.svg";
import logoNoWeb from "../../../assets/logo-noweb.svg";
import pattern from "../../../assets/footer-pattern.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={pattern} alt="" />
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
          <div className="social-icons">
            <img src={whats} alt="" />
            <img src={insta} alt="" />
            <img src={face} alt="" />
          </div>
        </div>
      </div>

      <span className="line"></span>

      <div className="footer-copy-area">
        <div>
          <Typography element="p" variant="paragraph">
            © Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados
          </Typography>
        </div>
        <img src={logoNoWeb} alt="" style={{ cursor: "pointer" }} />
      </div>
    </footer>
  );
};
