import { useEffect, useState } from "react";
import Products from "./components/Products";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { STORAGE_PRODUCT_CART, URL_API_PRODUCTS } from "./utils/constants";
import { toast, ToastContainer } from "react-toastify";

function App() {
  console.log("enter here n veces");
  const products = useFetch(URL_API_PRODUCTS, null);
  const [productCart, setProductCart] = useState([]);

  const getProductsCart = () => {
    const idsProductsCart = localStorage.getItem(STORAGE_PRODUCT_CART);

    if (idsProductsCart) {
      setProductCart(idsProductsCart.split(","));
    } else {
      setProductCart([]);
    }
  };

  useEffect(() => {
    getProductsCart();
  }, []);

  const addProductCart = (id, name) => {
    let idsProductsCart = [...productCart];
    idsProductsCart.push(String(id));
    setProductCart(idsProductsCart);
    localStorage.setItem(STORAGE_PRODUCT_CART, idsProductsCart);
    toast.success(`${name} añadido al carrito correctamente`);
  };

  return (
    <div>
      <TopMenu
        productCart={productCart}
        getProductsCart={getProductsCart}
        products={products}
      ></TopMenu>
      <Products products={products} addProductCart={addProductCart}></Products>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      ></ToastContainer>
    </div>
  );
}

export default App;
