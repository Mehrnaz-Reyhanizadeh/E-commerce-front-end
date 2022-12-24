import React from "react";
import { quantityCounter, isExist, shorten } from "../../helper/functions";
import style from "./CheckOutCrat.module.css";
import trashIcon from "../../assets/icons/trash.svg";

function CheckOutCart({ productData, contextValue }) {
  const { state, dispatch } = contextValue;
  const totalPrice = productData.price * productData.quantity;
  const URL_IMG = `http://localhost:3000/`;
  const img = productData.img.split("public/");

  return (
    <div className="row justify-content-between border-bottom mb-4 px-3 pb-3">
      <div className="col-lg-4">
        <img
          src={`${URL_IMG}${img[1]}`}
          alt="product"
          style={{ width: "200px", height: "200px" }}
          className="mt-4"
        />
      </div>
      <div className="col-lg-8">
        <p className="text-center fa-2x">{shorten(productData.name)}</p>
        <p className="bg-info rounded w-50 mx-auto text-light text-center p-2">
          {productData.price} $
        </p>
        <div className="text-center text-dark">
          <span className="mr-1">Number of item :</span>

          <span>{productData.quantity}</span>
        </div>
        <div className="text-center text-primary" style={{ fontSize: "20px" }}>
          <span className="mr-1">Totla price :</span>

          <span>{totalPrice} $</span>
        </div>
        <div className={style.btnContainer}>
          {quantityCounter(state, productData._id) > 1 && (
            <button
              style={{ width: "40px" }}
              className="btn btn-info px-1"
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCounter(state, productData._id) === 1 && (
            <button
              className="btn btn-info px-1"
              style={{ width: "40px" }}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img className={style.icon} src={trashIcon} alt="trashIcon" />
            </button>
          )}
          {isExist(state, productData._id) && (
            <button
              style={{ width: "40px" }}
              className="btn btn-info px-1 ml-1"
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOutCart;
