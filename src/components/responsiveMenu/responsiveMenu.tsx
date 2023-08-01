import hamburguer from "../../assets/icons/hamburgues.svg";
import "./responsiveMenu.css";

export const ResponsiveMenu = () => {
  return (
    <>
      <div className="hamburguer">
        <img src={hamburguer} alt="" />
      </div>
    </>
  );
};
