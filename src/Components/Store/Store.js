import React, { useContext, useEffect, useState } from "react";
// components
import Product from "../Product/Product";
// context
import { ContextProducts } from "../../context/ContextProductsProvider";
// css
import style from "./Store.module.css";

function Store(props) {
  const products = useContext(ContextProducts);
  // const [filterCategory, setFilterCategory] = useState("");
  // const [catProduct, setCatProduct] = useState([]);

  // useEffect(() => {
  //   setFilterCategory(props.navData);
  // }, [props.navData]);

  // useEffect(() => {
  //   setCatProduct(products.filter((cat) => cat.category === filterCategory));
  // }, [filterCategory, products]);

  return (
    <>
      <div
        className={`mx-auto ${style.storeContainer}`}
        // className="mx-auto"
        style={{ width: "85%", maxWidth: "1500px" }}
      >
        {/* {filterCategory === "all"
        ? products.map((product) => (
            <Product key={product._id} productInfo={product} />
          ))
        : catProduct.map((product) => (
            <Product key={product._id} productInfo={product} />
          ))} */}

        {products.map((product) => (
          <Product key={product._id} productInfo={product} />
        ))}
      </div>
    </>
  );
}

export default Store;
