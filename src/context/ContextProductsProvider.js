import React, { useState, useEffect, createContext } from "react";
// API
import { getProducts } from "../services/api";

export const ContextProducts = createContext();

function ContextProductsProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
      // console.log("first log");
    };

    fetchApi();
  }, []);

  return (
    <ContextProducts.Provider value={products}>
      {props.children}
    </ContextProducts.Provider>
  );
}

export default ContextProductsProvider;
