const shorten = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = `${splitTitle[0]} ${splitTitle[1]}`;
  return newTitle;
};

const isExist = (state, id) => {
  const result = !!state.selectedItem.find((item) => item._id === id);
  return result;
};

const quantityCounter = (state, id) => {
  const index = state.selectedItem.findIndex((item) => item._id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItem[index].quantity;
  }
};

export { shorten, isExist, quantityCounter };
