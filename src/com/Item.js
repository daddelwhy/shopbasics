import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.css";
import { useCart } from "../context/CartContext";

function Item(props) {
  const { id, name, price, image, quantity } = props;
  const { formatMoney, removeItem, add, subtract } = useCart();
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={id} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>price :{formatMoney(price)} BATH</Card.Text>
          <Card.Text>sum :{formatMoney(price * quantity)} BATH</Card.Text>
          <div className="qua">
            <Button variant="primary" size="sm" onClick={() => add(id)}>
              +
            </Button>
            <input type="text" value={quantity} disabled />
            <Button variant="primary" size="sm" onClick={() => subtract(id)}>
              -
            </Button>
            <Button variant="primary" size="sm" onClick={() => removeItem(id)}>
              delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
