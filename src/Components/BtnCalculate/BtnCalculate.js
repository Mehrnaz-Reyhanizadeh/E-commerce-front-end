import React, { useContext } from "react";
import { quantityCounter, isExist, shorten } from "../../helper/functions";
import trashIcon from "../../assets/icons/trash.svg";
import { CartContext } from "../../context/CartContextProvider";

const BtnCalculate = ({ data, id }) => {
  const { state, dispatch } = useContext(CartContext);
  const productInfo = data.filter((item) => item._id === id)[0];

  return (
    <div>
      {quantityCounter(state, productInfo._id) > 1 && (
        <button
          style={{ width: "40px" }}
          className="btn btn-info px-1"
          onClick={() => dispatch({ type: "DECREASE", payload: productInfo })}
        >
          -
        </button>
      )}
      {quantityCounter(state, productInfo._id) === 1 && (
        <button
          style={{ width: "40px" }}
          className="btn btn-info px-1"
          onClick={() =>
            dispatch({ type: "REMOVE_ITEM", payload: productInfo })
          }
        >
          <img
            className="bg-info"
            style={{ width: "20px" }}
            src={trashIcon}
            alt="trashIcon"
          />
        </button>
      )}
      {quantityCounter(state, productInfo._id) && (
        <span className=" mx-1 p-2">
          {quantityCounter(state, productInfo._id)}
        </span>
      )}
      {isExist(state, productInfo._id) ? (
        <button
          style={{ width: "40px" }}
          className="btn btn-info px-1"
          onClick={() => dispatch({ type: "INCREASE", payload: productInfo })}
        >
          +
        </button>
      ) : (
        <button
          style={{ width: "100px" }}
          className="btn btn-info px-1"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: productInfo })}
        >
          Add to card
        </button>
      )}
    </div>
  );
};

export default BtnCalculate;
