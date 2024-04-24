import { Container, Row } from "react-bootstrap";
import Loading from "../Loading";
import Product from "../Product/Product";

export default ({ products: { loading, result, error }, addProductCart }) => {
  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading></Loading>
        ) : (
          result.map((item, index) => (
            <Product
              key={index}
              product={item}
              addProductCart={addProductCart}
            ></Product>
          ))
        )}
      </Row>
    </Container>
  );
};
