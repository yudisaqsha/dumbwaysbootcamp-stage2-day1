import index from "./assets/index.jpg";

function Card() {
  return (
    <div
      className="container my-4 mx-4 px-0 rounded "
      style={{
        width: "45%",
        height: "400px",
        boxShadow: "5px 5px 5px #c7c9d1",
      }}
    >
      <img
        className=" rounded-top"
        src={index}
        style={{ width: "100%", height: "300px" }}
      />
      <div
        className="d-flex flex-column align-center mt-2"
        style={{ textAlign: "center" }}
      >
        <h3
          style={{
            fontFamily: "Raleway, sans-serif",
            fontWeight: "700",
            fontStyle: "normal",
          }}
        >
          Yudis Aqsha
        </h3>
        <p
          style={{
            fontFamily: "Raleway, sans-serif",
            fontWeight: "400",
            fontStyle: "normal",
          }}
        >
          Fullstack Developer
        </p>
      </div>
    </div>
  );
}

export default Card;
