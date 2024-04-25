import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as CartClose } from "../../assets/svg/close.svg";
import { ReactComponent as CartGarbage } from "../../assets/svg/garbage.svg";

import "./Cart.scss";
import { useEffect, useState } from "react";
import { BASE_PATH, STORAGE_PRODUCT_CART } from "../../utils/constants";
import {
  duplicateItemsArray,
  removeArrayDuplicates,
} from "../../utils/arrayFunc";

export default ({ productCart, getProductsCart, products }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const widthCartContent = cartOpen ? 400 : 0;
  const [singelProductsCart, setSingleProductsCart] = useState([]);

  useEffect(() => {
    const allProductsId = removeArrayDuplicates(productCart);
    setSingleProductsCart(allProductsId);
  }, [productCart]);

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  const emptyCart = () => {
    localStorage.removeItem(STORAGE_PRODUCT_CART);
    getProductsCart();
  };

  const increaseQuantity = (id) => {};

  return (
    <>
      <Button variant="link" className="cart">
        {productCart.length > 0 ? (
          <CartFull onClick={openCart}></CartFull>
        ) : (
          <CartEmpty onClick={openCart} />
        )}
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        <CartContentHeader
          closeCart={closeCart}
          emptyCart={emptyCart}
        ></CartContentHeader>
        <div className="cart-content__products">
          {singelProductsCart.map((idProductCart, index) => (
            <CartContentProducts
              key={index}
              products={products}
              productCart={productCart}
              idProductCart={idProductCart}
            ></CartContentProducts>
          ))}
        </div>
      </div>
    </>
  );
};

const CartContentHeader = ({ closeCart, emptyCart }) => {
  return (
    <div className="cart-content__header">
      <div>
        <CartClose onClick={closeCart}></CartClose>
        <h2>Carrito</h2>
      </div>

      <Button variant="link" onClick={emptyCart}>
        Vaciar<CartGarbage></CartGarbage>
      </Button>
    </div>
  );
};

const CartContentProducts = ({
  products: { loading, result },
  productCart,
  idProductCart,
}) => {
  if (!loading && result) {
    return result.map((product, index) => {
      if (idProductCart == product.id) {
        const quantity = duplicateItemsArray(idProductCart, productCart);

        return (
          <RenderProduct
            key={index}
            product={product}
            quantity={quantity}
          ></RenderProduct>
        );
      }
    });
  }
};

const RenderProduct = ({ product, quantity }) => {
  return (
    <div className="cart-content__product">
      <img alt={product.name} src={`${BASE_PATH}/${product.image}`}></img>
      <div className="cart-content__product-info">
        <div>
          <h3>{product.name.substr(0, 25)}...</h3>
          <p>{product.price.toFixed(2)} $ / ud.</p>
        </div>
        <div>
          <p>En Carrito: {quantity} ud.</p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};
