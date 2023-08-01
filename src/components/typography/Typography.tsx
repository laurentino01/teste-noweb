import { useMemo } from "react";

interface ITypographyProps {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "title" | "subtitle" | "paragraph" | "button";
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
        fontSize: "clamp(0.875rem, 0.8036rem + 0.3571vw, 1.125rem)",
      },
      button: {
        fontWeight: 600,
        fontSize: "clamp(1rem, 0.9643rem + 0.1786vw, 1.125rem)",
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
  };

  return elements[element];
};
