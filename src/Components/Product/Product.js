import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// functions
import { shorten, isExist, quantityCounter } from "../../helper/functions";
// context
import { CartContext } from "../../context/CartContextProvider";
// css
import style from "./Product.module.css";
import trashIcon from "../../assets/icons/trash.svg";

const Product = ({ productInfo }) => {
  const { state, dispatch } = useContext(CartContext);
  const URL_IMG = ` http://localhost:3000/`;
  const img = productInfo.img.split("public/");

  return (
    <div className={style.cardContainer}>
      <img
        className={style.productImg}
        src={`${URL_IMG}${img[1]}`}
        alt="product-image"
      />

      <h4>{shorten(productInfo.name)}</h4>
      <p>{productInfo.price} $</p>

      <div className={style.btnContainer}>
        <Link to={`/products/${productInfo._id}`}>Details</Link>

        <div>
          {quantityCounter(state, productInfo._id) > 1 && (
            <button
              className={style.btn}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productInfo })
              }
            >
              -
            </button>
          )}
          {quantityCounter(state, productInfo._id) === 1 && (
            <button
              className={style.btn}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productInfo })
              }
            >
              <img className={style.icon} src={trashIcon} alt="trashIcon" />
            </button>
          )}
          {quantityCounter(state, productInfo._id) && (
            <span className={style.numOfProduct}>
              {quantityCounter(state, productInfo._id)}
            </span>
          )}
          {isExist(state, productInfo._id) ? (
            <button
              className={style.btn}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productInfo })
              }
            >
              +
            </button>
          ) : (
            <button
              className={style.btn}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productInfo })
              }
            >
              Add to card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
