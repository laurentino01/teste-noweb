import { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow-down-icon.svg";

interface IDropDownProps {
  children: React.ReactNode;
}

interface IDropDownItemsData {
  srcImg: string;
  title: string;
}

import { ShowCase } from "../showcase/ShowCase";
import { Typography } from "../typography/Typography";

export const DropDown: React.FC<IDropDownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [items, setItems] = useState<IDropDownItemsData[]>([]);

  useEffect(() => {
    const itemsList: IDropDownItemsData[] = [
      { srcImg: "./src/assets/products-imgs/lampada.svg", title: "Lâmpada" },
    ];

    setItems(itemsList);
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
          }}
          onClick={() => {
            setTimeout(() => {
              setIsOpen(!isOpen);
            }, 400);

            if (isOpen) {
              setAnimate(!animate);
            }
          }}
        >
          <Typography element="h6" variant="paragraph">
            {children}
          </Typography>
          <img src={arrow} />
        </div>
        {isOpen && (
          <div
            style={{
              backgroundColor: "white",
              width: "300px",
              borderRadius: "15px",
              padding: "15px",
              position: "absolute",
              top: "40px",

              opacity: animate ? 1 : 0,
              transition: "0.3s",
              boxShadow: "5px 5px 5px #13141b42",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                top: "-13px",
                left: "50%",
                right: "25%",
                borderLeft: "10px solid transparent",
                borderRight: " 10px solid transparent",
                borderBottom: "15px solid white",
                position: "absolute",
              }}
            ></div>
            <ul>
              {items.map((item) => (
                <li
                  key={item.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    cursor: "pointer",
                  }}
                >
                  <ShowCase
                    srcImg="./src/assets/products-imgs/lampada.svg"
                    size="small"
                  ></ShowCase>
                  <Typography element="h6" variant="button">
                    {item.title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
