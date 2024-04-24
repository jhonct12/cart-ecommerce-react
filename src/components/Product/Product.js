import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "react-bootstrap";
import "./Product.scss";
import { BASE_PATH } from "../../utils/constants";

export default ({ product, addProductCart }) => {
  return (
    <Col xs="3" className="product">
      <Card>
        <CardImg variant="top" src={`${BASE_PATH}/${product.image}`}></CardImg>
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardText>{product.extraInfo}</CardText>
          <CardText>{product.price.toFixed(2)} $ / Unidad</CardText>
          <Button onClick={() => addProductCart(product.id, product.name)}>
            Añadir al carrito
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
