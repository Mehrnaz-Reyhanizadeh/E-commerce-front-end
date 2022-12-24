import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const signUp = async (fname, lname, phoneNumber, address, password, email) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, {
    fname,
    lname,
    phoneNumber,
    address,
    password,
    email,
  });
  return response;
};

const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

const getMe = async (token) => {
  const response = await axios.get(
    `${BASE_URL}/user/getMe`,

    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  const res = await response.data;
  return res.data;
};
const updateMe = async (
  fname,
  lname,
  phoneNumber,
  address,
  password,
  email,
  token
) => {
  const response = await axios.put(
    `${BASE_URL}/user/updateMe`,
    {
      fname,
      lname,
      phoneNumber,
      address,
      password,
      email,
    },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  const res = await response.data;
  return res.data;
};

const createProduct = async (
  name,
  description,
  img,
  model,
  brand,
  price,
  token
) => {
  const response = await axios.post(
    `${BASE_URL}/admin/postProduct`,
    {
      name,
      description,
      img,
      model,
      brand,
      price,
    },
    {
      headers: {
        "x-auth-token": token,
        // "content-type": "text/json",
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/product`);
  const res = await response.data;
  // console.log(res.data);
  return res.data;
};

// comments api
const getComments = async (productId, token) => {
  const response = await axios.get(
    `${BASE_URL}/product/getProductsComments/${productId}`,

    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  const res = await response.data;
  // console.log(res.data);
  return res.data;
};
const postComments = async (productId, content, token) => {
  const response = await axios.post(
    `${BASE_URL}/comment/postComment/${productId}`,
    { content },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  const res = await response.data;
  return res.data;
};
const updateComment = async (commentId, content, token) => {
  const response = await axios.put(
    `${BASE_URL}/comment/updateComment/${commentId}`,
    { content },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  const res = await response.data;
  return res.data;
};
const deleteComments = async (commentId, token) => {
  const response = await axios.delete(
    `${BASE_URL}/comment/deleteComment/${commentId}`,

    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
  const res = await response.data;
  return res.data;
};

export {
  signUp,
  login,
  createProduct,
  getProducts,
  getMe,
  updateMe,
  getComments,
  postComments,
  deleteComments,
  updateComment,
};
