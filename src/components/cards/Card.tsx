interface ICardProps {
  tag: string;
  srcImg: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  paymentDatail: string;
}

export const Card: React.FC<ICardProps> = ({
  tag,
  srcImg,
  title,
  oldPrice,
  newPrice,
  paymentDatail,
}) => {
  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "white",
        borderRadius: "15px 15px 0 0",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "#E0E0E0",
            padding: "7px 17px",
            borderRadius: "0 15px 15px 0 ",
            marginTop: "10px",
          }}
        >
          {tag}
        </div>
        <img src={srcImg} alt="" style={{ width: "260px" }} />
        <div
          style={{
            backgroundColor: "var(--dark-blue)",
            width: "217px",
            height: "19px",
            borderRadius: "15px",
            position: "absolute",
            top: "207px",
            left: "7%",
          }}
        ></div>
      </div>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <h5
          style={{
            fontWeight: 600,
            fontSize: "23px",
            color: "var(--dark-blue)",
          }}
        >
          {title}
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "15px 0 30px 10px",
          }}
        >
          <p
            style={{
              textDecoration: "line-through",
              color: "var(--dark-blue)",
            }}
          >
            {oldPrice}
          </p>
          <span
            style={{
              backgroundColor: "var(--orange)",
              borderRadius: "10px 0 0 10px",
              padding: "10px 20px",
            }}
          >
            <p>{newPrice}</p>
          </span>
        </div>
        <div style={{ paddingBottom: "15px" }}>
          <p> {paymentDatail}</p>
        </div>
      </div>
    </div>
  );
};
