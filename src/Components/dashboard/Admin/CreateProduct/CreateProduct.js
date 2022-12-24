import React, { useState } from "react";
import { createProduct } from "../../../../services/api";
import { ToastContainer } from "react-toastify";
import { notify } from "../../../../helper/toast";

function CreateProduct(props) {
  const [data, setData] = useState({
    name: "",
    model: "",
    brand: "",
    price: null || "",
    img: "",
    description: "",
  });
  const changeHandler = (event) => {
    if (event.target.name === "img") {
      setData({ ...data, [event.target.name]: event.target.files[0] });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const token = sessionStorage.getItem("token");

    try {
      await createProduct(
        data.name,
        data.description,
        data.img,
        data.model,
        data.brand,
        data.price,
        token
      );
      event.target.reset();
      notify("product added successfully", "success");
    } catch (error) {
      console.log("something is wrong: ", error);
      notify(
        "Something is wrong,This product is already exist! or your data invalid",
        "error"
      );
    }
  };
  return (
    <form onSubmit={submitHandler} className=" p-5 mt-5 w-50 mx-auto">
      <h2 className="d-flex justify-content-center">Add new product</h2>
      <div className="form-group">
        <label htmlFor="productName">Product name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="productName"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productModel">Product model</label>
        <input
          name="model"
          type="text"
          className="form-control"
          id="productModel"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productBrand">Product brand</label>
        <input
          name="brand"
          type="text"
          className="form-control"
          id="productBrand"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productPrice">Product price</label>
        <input
          name="price"
          type="number"
          className="form-control"
          id="productPrice"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productImg">Product image</label>
        <input
          name="img"
          type="file"
          className="form-control-file"
          id="productImg"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productDescription">Product description</label>
        <textarea
          name="description"
          className="form-control"
          id="productDescription"
          rows="3"
          onChange={changeHandler}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <ToastContainer />
    </form>
  );
}

export default CreateProduct;
