import React from "react";
import Item from "./Item";
import { useCart } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cart() {
  const { products } = useCart();
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Row className="justify-content-center">
        {products.map((data) => (
          <Col key={data.id}>
            <Item {...data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cart;
