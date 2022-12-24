import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ContextProducts } from "../../context/ContextProductsProvider";
// import style from "./ProductDetails.module.css";
import Comment from "../Comments/Comment";
import BtnCalculate from "../BtnCalculate/BtnCalculate";

function ProductDetails() {
  const { id } = useParams();
  const data = useContext(ContextProducts);
  const [isLoadingRecipes, setLoadingRecipes] = useState(true);
  const [productdata, setProductdata] = useState({});
  useEffect(() => {
    const product = data.filter((item) => item._id === id);
    if (product[0]) {
      const URL_IMG = `http://localhost:3000/`;
      const image = product[0].img.split("public/");
      setLoadingRecipes(false);
      setProductdata({
        name: product[0].name,
        img: `${URL_IMG}${image[1]}`,
        description: product[0].description,
        price: product[0].price,
        model: product[0].model,
        brand: product[0].brand,
      });
    } else {
      setLoadingRecipes(true);
    }
  }, [data, id]);
  return (
    <>
      {isLoadingRecipes === true ? (
        <div className="pt-5" style={{ width: "100%", maxWidth: "1500px" }}>
          <h1 className="mt-5">
            please back to main page and don't refresh page
          </h1>
          <Link
            className="text-decoration-none"
            style={{ fontSize: "22px" }}
            to="/products"
          >
            Back to shop
          </Link>
        </div>
      ) : (
        <>
          <div
            className="border border-muted rounded shadow p-5 mb-4 mx-auto"
            style={{ width: "80%", maxWidth: "1500px", marginTop: "6rem" }}
          >
            <h1 className="text-center">{productdata.name}</h1>
            <div className="d-flex justify-content-around align-items-center">
              <img
                src={productdata.img}
                style={{ width: "300px" }}
                alt="product"
              />
              <p className="fa-2x">
                <span>Brand: </span> {productdata.brand}
              </p>
              <div className="fa-2x">
                <p>{productdata.price} $</p>
              </div>
            </div>
            <p className="text-black mt-4" style={{ fontSize: "18px" }}>
              {productdata.description}
            </p>
            <div className="d-flex justify-content-between mt-4">
              <Link
                className="text-decoration-none"
                style={{ fontSize: "22px" }}
                to="/products"
              >
                Back to shop
              </Link>
              <BtnCalculate data={data} id={id} />
            </div>
          </div>
          <Comment id={id} />
        </>
      )}
    </>
  );
}

export default ProductDetails;
