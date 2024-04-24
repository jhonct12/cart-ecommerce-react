import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import "./Cart.scss";
import { useState } from "react";

export default ({ productCart }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const widthCartContent = cartOpen ? 400 : 0;

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <Button variant="link" className="cart">
        {productCart.length > 0 ?}
        <CartEmpty onClick={openCart} />
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        Todos mis productos
      </div>
    </>
  );
};
