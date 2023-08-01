import logo from "../../../assets/bg-imgs/logo.svg";
import pattern from "../../../assets/header-pattern.svg";

export const Header = () => {
  return (
    <div className="container" style={{ position: "relative" }}>
      <img
        src={pattern}
        alt=""
        style={{
          position: "absolute",
          left: 0,
          zIndex: 0,
          width: "clamp(3.75rem, 2.5rem + 6.25vw, 8.125rem)",
        }}
      />
      <header
        style={{
          width: "850px",
          margin: "0 auto",
          padding: "15px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <img src={logo} alt="" style={{ width: "100px" }} />
        </div>
        <nav></nav>
      </header>
    </div>
  );
};
