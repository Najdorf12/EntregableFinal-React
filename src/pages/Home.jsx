import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ProductsCard from "../components/ProductsCard";
import {
  getProductsThunk,
  filterProductsByCategoryThunk,
  searchProductsByNameThunk,
} from "../store/slices/products";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk());
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((resp) => setCategories(resp.data))
      .catch((error) => console.error(error));
  };
  const searchProduct = () => {
    dispatch(searchProductsByNameThunk(searchValue));
  };

  return (
    <main>
      <Row>
        <Col md={4} lg={3} style={{position:"relative",marginTop:"3rem",}}>
          
            <ListGroup style={{position:"fixed", width:"16rem"}}>
              <h3>CATEGORIAS</h3>
              {categories?.map((category) => (
                <ListGroup.Item
                  key={category.id}
                  action
                  style= {{fontWeight:600}}
                  onClick={() =>
                    dispatch(filterProductsByCategoryThunk(category.id))
                  }
                >
                  {category.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
        </Col>

        <Col md={8} lg={9}>
          
          <Row>
            <Col>
              <InputGroup className="mb-3" style={{marginTop:"3rem"}}>
                <Form.Control
                  placeholder="Samsung, Sony, Apple..."
                  aria-label="Samsung, Sony, Apple..."
                  aria-describedby="basic-addon2"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={() => searchProduct()}
                >
                  Buscar
                </Button>
              </InputGroup>
             
              <div className="title_home">
              <h4>Nuestros Productos</h4>
          </div>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} style={{margin:"1rem"}}>
            {products?.map((product) => (
              <Col key={product.id}>
                <ProductsCard data={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </main>
  );
};
export default Home;
