import { useMemo } from "react";

interface ITypographyProps {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant: "title" | "subtitle" | "paragraph" | "button" | "menuItems";
  children: React.ReactNode;
}

export const Typography: React.FC<ITypographyProps> = ({
  element,
  variant,
  children,
}) => {
  const variants = useMemo(() => {
    const style = {
      title: {
        fontWeight: 600,
        fontSize: "clamp(1.75rem, 1.3929rem + 1.7857vw, 3rem)",
      },
      subtitle: {
        fontWeight: 600,
        fontSize: "clamp(1.375rem, 1.2679rem + 0.5357vw, 1.75rem)",
      },
      paragraph: {
        fontWeight: 400,
        fontSize: "14px",
      },
      button: {
        fontWeight: 500,
        fontSize: "14px",
      },
      menuItems: {
        fontSize: "14px",
        fontWeight: 400,
      },
    };

    return style[variant];
  }, [variant]);

  const elements = {
    h1: <h1 style={variants}> {children} </h1>,
    h2: <h2 style={variants}>{children}</h2>,
    h3: <h3 style={variants}>{children}</h3>,
    h4: <h4 style={variants}> {children}</h4>,
    h5: <h5 style={variants}>{children}</h5>,
    h6: <h6 style={variants}>{children}</h6>,
    p: <p style={variants}>{children}</p>,
  };

  return elements[element];
};
