import { Typography } from "../../../components/typography/Typography";
import pattern from "../../../assets/whitepattern.svg";
import "./categories.css";
export const Categories = () => {
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
    </section>
  );
};
