import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { filterProductsByCategoryThunk } from "../store/slices/products";
import { addProductsThunk } from "../store/slices/cart";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

const ProductsDetail = () => {
  const { id } = useParams();
  const [productDetail, setproductDetail] = useState({});
  const [rate,setRate] = useState(1)
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);

  useEffect(() => {
    getDetail();
  }, [id]);

  const getDetail = () => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((resp) => {
        setproductDetail(resp.data);
        dispatch(filterProductsByCategoryThunk(resp.data?.categoryId));
      })
      .catch((error) => console.error(error));
  };

  const increment = () =>{
    setRate(rate + 1)
  }
  const decrement = () =>{
    if(rate > 1){
      setRate(rate - 1)
    }
  }

  const addProductToCart = () =>{
    const data = {
      "quantity": rate,
      "productId": productDetail.id
    }
    dispatch(addProductsThunk(data))
  }
  return (
    <>
      <main className="product_detail--container">
        <Row>
          <Col
            sm={6}
            md={5}
            lg={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={productDetail.images ? productDetail.images[0]?.url : null}
              alt=""
              fluid
            />
          </Col>
          <Col
            sm={6}
            md={7}
            lg={7}
            style={{
              
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <section className="product_detail--info">
              <div className="product_info">
                <h1>{productDetail.title}</h1>
                <p>{productDetail.price}</p>
                <p>{productDetail.description}</p>
              </div>

              <div className="btn_product--info">
                <Button onClick={increment} >+</Button>
                           <p>{rate}</p>     
                <Button onClick={decrement} >-</Button>
              </div>
              <Button onClick={()=>addProductToCart()}>Añadir al Carrito</Button>
            </section>
          </Col>
        </Row>
      </main>

      <div className="productos_relacionados">
        <Row>
          <h4>Productos Relacionados</h4>
          <ListGroup horizontal>
            {allproducts?.map((product) => (
              <ListGroup.Item key={product.id}>
                {product.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </div>
    </>
  );
};
export default ProductsDetail;
