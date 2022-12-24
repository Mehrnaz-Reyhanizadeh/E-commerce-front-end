import React, { createContext, useReducer } from "react";
const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  isCheckout: false,
};
const sumItem = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item._id === action.payload._id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
        ...sumItem(state.selectedItem),
        isCheckout: false,
      };
    case "REMOVE_ITEM":
      const newSelectItem = state.selectedItem.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        ...state,
        selectedItem: [...newSelectItem],
        ...sumItem(newSelectItem),
      };
    case "INCREASE":
      const indexI = state.selectedItem.findIndex(
        (item) => item._id === action.payload._id
      );
      state.selectedItem[indexI].quantity++;
      return {
        ...state,
        ...sumItem(state.selectedItem),
      };
    case "DECREASE":
      const indexD = state.selectedItem.findIndex(
        (item) => item._id === action.payload._id
      );
      state.selectedItem[indexD].quantity--;
      return {
        ...state,
        ...sumItem(state.selectedItem),
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        isCheckout: true,
      };
    case "CLEAR":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        isCheckout: false,
      };

    default:
      return state;
  }
};
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
