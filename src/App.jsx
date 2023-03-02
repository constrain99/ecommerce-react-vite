import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar } from "./components";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setcart(await commerce.cart.retrieve());
  };

  const handlerAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    setcart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);
  return (
    <div>
      {/* <Navbar totalItems={cart.constructor.values.length} /> */}

      <Products products={products} onAddToCart={handlerAddToCart} />
    </div>
  );
};

export default App;
