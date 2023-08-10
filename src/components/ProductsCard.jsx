import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductsCard = ({ data }) => {
  
  return (
    <>
      <Card style={{ 
        width: "18rem",
         backgroundColor:"",
          marginBottom:"1.5rem",
          filter: "drop-shadow(3px 3px 4px  #5B9A8B)",
          border:"none"
          }}>
        <Card.Img 
        style={{height: 200, objectFit:"cover" }}
        variant="top" 
        src= {data.images ? data.images[0]?.url : null} />
        <Card.Body>
          <Card.Title tooltip>{`${data.title.slice(0,20)}...`}</Card.Title>
          <Card.Text>
            { data.price }
            <br />
            { data.brand }
          </Card.Text>
          <Button 
          variant="primary"
          as={Link}
          to= {`/products/${data.id}`}
          >Ver Producto
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProductsCard;
