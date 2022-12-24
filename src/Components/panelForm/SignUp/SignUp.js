import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { signUp } from "../../../services/api";
import { validate } from "../validate";
import { notify } from "../../../helper/toast";
import styles from "../form.module.css";
import Input from "../Input/Input";

const SignUp = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    phoneNumber: null || "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHanlder = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        await signUp(
          data.fname,
          data.lname,
          data.phoneNumber,
          data.address,
          data.password,
          data.email
        );
        notify("You signed up successfully", "success");
      } catch (error) {
        notify("This user is already exist!", "error");
      }
    } else {
      notify("Invalid data! fill all fields.", "error");
      setTouched({
        fname: true,
        lname: true,
        email: true,
        address: true,
        phoneNumber: true,
        password: true,
        confirmPassword: true,
      });
      console.log("else1");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>
        <Input
          title="First Name"
          changeHandler={changeHandler}
          focusHanlder={focusHanlder}
          type="text"
          value={data.fname}
          name="fname"
          touched={touched.fname}
          error={errors.fname}
        />
        <Input
          title="Last Name"
          changeHandler={changeHandler}
          focusHanlder={focusHanlder}
          type="text"
          value={data.lname}
          name="lname"
          touched={touched.lname}
          error={errors.lname}
        />
        <Input
          title="Email"
          changeHandler={changeHandler}
          focusHanlder={focusHanlder}
          type="email"
          value={data.email}
          name="email"
          touched={touched.email}
          error={errors.email}
        />
        <Input
          title="Phone number"
          changeHandler={changeHandler}
          focusHanlder={focusHanlder}
          type="number"
          value={data.phoneNumber || ""}
          name="phoneNumber"
          touched={touched.phoneNumber}
          error={errors.phoneNumber}
        />
        <Input
          title="Address"
          changeHandler={changeHandler}
          focusHanlder={focusHanlder}
          type="text"
          value={data.address}
          name="address"
          touched={touched.address}
          error={errors.address}
        />
        <Input
          title="Password"
          changeHandler={changeHandler}
          focusHanlder={focusHanlder}
          type="password"
          value={data.password}
          name="password"
          touched={touched.password}
          error={errors.password}
        />
        <Input
          title="Confirm Password"
          changeHandler={changeHandler}
          focusHanlder={focusHanlder}
          type="password"
          value={data.confirmPassword}
          name="confirmPassword"
          touched={touched.confirmPassword}
          error={errors.confirmPassword}
        />

        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)
