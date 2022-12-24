import React, { useContext, useState } from "react";
import style from "./CheckOut.module.css";
import { CartContext } from "../../context/CartContextProvider";
import CheckOutCart from "./CheckOutCrat";
import ClearedMsg from "./ClearedMsg";
import CheckOutMsg from "./CheckOutMsg";
const CheckOut = () => {
  const { state, dispatch } = useContext(CartContext);
  const [clearFlag, setClearFlag] = useState(false);
  const [CheckOutFlag, setCheckOutFlag] = useState(false);
  const clearClickHandler = () => {
    dispatch({ type: "CLEAR" });
    setClearFlag(true);
  };
  const checkOutClickHandler = () => {
    dispatch({ type: "CHECKOUT" });
    setCheckOutFlag(true);
  };

  return (
    <>
      <div className="row mx-0 justify-content-between mt-5 pt-5">
        <div className="col-lg-8">
          {state.selectedItem.map((product, index) => (
            <CheckOutCart
              productData={product}
              contextValue={{ state, dispatch }}
              key={index}
            />
          ))}
        </div>
        <div className="col-lg-4">
          {state.itemCounter > 0 && (
            <div
              className={
                clearFlag || CheckOutFlag ? style.msgBox : style.msgBoxD
              }
            >
              <p className="text-dark">Total Item: {state.itemCounter}</p>
              <p className="text-dark">Total payments: {state.total} $</p>
              <div className="d-flex justify-content-between">
                <button
                  // style={{ width: "80px" }}
                  className="btn btn-danger px-1"
                  onClick={clearClickHandler}
                >
                  Clear
                </button>
                <button
                  className="btn btn-success px-1"
                  // style={{ width: "80px" }}
                  onClick={checkOutClickHandler}
                >
                  CheckOut
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {clearFlag && <ClearedMsg />}
      {CheckOutFlag && <CheckOutMsg />}
    </>
  );
};

export default CheckOut;
