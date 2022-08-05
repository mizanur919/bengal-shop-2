import "../styles/globals.css";
import { createContext } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../store/index";
import { SessionProvider } from "next-auth/react";
export const quantityContext = createContext();

function MyApp({ Component, pageProps, session }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [priceValue, setPriceValue] = useState([]);
  const [productCount, setProductCount] = useState([]);
  const [getCategory, setGetCategory] = useState("");
  const [getSingleProduct, setGetSingleProduct] = useState({});

  return (
    <quantityContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        cartItems,
        setCartItems,
        priceValue,
        setPriceValue,
        getCategory,
        setGetCategory,
        getSingleProduct,
        setGetSingleProduct,
        productCount,
        setProductCount,
      }}
    >
      <Provider store={store}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </quantityContext.Provider>
  );
}

export default MyApp;
