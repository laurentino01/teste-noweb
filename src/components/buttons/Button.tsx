import { Typography } from "../typography/Typography";

import { useMemo } from "react";

interface IButtonProps {
  children: React.ReactNode;
  variant: "primary" | "dark" | "outline" | "cta";
}

export const Button: React.FC<IButtonProps> = ({ children, variant }) => {
  const variants = useMemo(() => {
    const style = {
      primary: {
        cursor: "pointer",
        border: "none",
        backgroundColor: "var(--orange)",
        color: "var(--dark)",
        textTransform: "uppercase",
        padding:
          "clamp(0.75rem, 0.6964rem + 0.2679vw, 0.9375rem) clamp(1.25rem, 1.1607rem + 0.4464vw, 1.5625rem)",
        borderRadius: "8px",
      },
      dark: {
        cursor: "pointer",
        border: "none",
        backgroundColor: "var(--dark-blue)",
        color: "white",
        textTransform: "uppercase",
        padding:
          "clamp(0.75rem, 0.6964rem + 0.2679vw, 0.9375rem) clamp(1.25rem, 1.1607rem + 0.4464vw, 1.5625rem)",
        borderRadius: "8px",
      },
      outline: {
        cursor: "pointer",
        border: "1px solid white",
        backgroundColor: "#20233200",
        color: "white",
        textTransform: "uppercase",
        padding:
          "clamp(0.75rem, 0.6964rem + 0.2679vw, 0.9375rem) clamp(1.25rem, 1.1607rem + 0.4464vw, 1.5625rem)",
        borderRadius: "8px",
      },
      cta: {
        cursor: "pointer",
        border: "none",
        backgroundColor: "var(--dark-blue)",
        color: "white",

        padding: "10px 20px",
        borderRadius: "8px",
      },
    };

    return style[variant] as React.CSSProperties | undefined;
  }, [variant]);

  return (
    <>
      <button style={variants}>
        <Typography variant="button" element="h6">
          {children}
        </Typography>
      </button>
    </>
  );
};
