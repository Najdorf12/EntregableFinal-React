import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductsCard = ({ data }) => {
  return (
    <>
      <Card
        style={{
          width: "18rem",
          filter: "drop-shadow(3px 3px 4px #22A699)",
          border: "none",
          margin:"1.2rem",
        }}
      >
        <Card.Img
          style={{ height: 200, objectFit: "cover" }}
          variant="top"
          src={data.images ? data.images[0]?.url : null}
        />
        <Card.Body>
          <Card.Title
            style={{ fontWeight: 700, color: "white" }}
          >{`${data.title.slice(0, 20)}...`}</Card.Title>
          <div className="info_productCard">
            <Card.Text
              style={{ fontWeight: 500, lineHeight: 2, fontSize: "1.1rem" }}
            >
              ${Math.floor(data.price)}
              <br />
              {data.brand}
            </Card.Text>
          </div>

          <div className="btn_productCard">
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                border: "none",
                filter: "drop-shadow(2px 2px 3px gray)",
                color: "darkgray",
                fontWeight:700,
                
              }}
              variant="primary"
              as={Link}
              to={`/products/${data.id}`}
            >
              Ver Producto
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProductsCard;
