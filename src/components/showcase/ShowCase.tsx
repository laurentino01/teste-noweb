import { Typography } from "../typography/Typography";

interface IShowCaseProps {
  srcImg: string;
  children?: React.ReactNode;
  size: "normal" | "small";
}

export const ShowCase: React.FC<IShowCaseProps> = ({
  srcImg,
  children,
  size,
}) => {
  const variant = {
    normal: "200px",
    small: "60px",
  };

  const sizeImg = {
    normal: "140px",
    small: "40px",
  };

  return (
    <div
      style={{
        color: "var(--orange)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
        height: variant[size],
        width: variant[size],
      }}
    >
      <Typography variant="button" element="h6">
        {children}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(var(--orange), #FBA017)",

          borderRadius: "40px",
          height: variant[size],
          width: variant[size],
        }}
      >
        <img
          src={srcImg}
          style={{ width: sizeImg[size], height: sizeImg[size] }}
        />
      </div>
    </div>
  );
};
