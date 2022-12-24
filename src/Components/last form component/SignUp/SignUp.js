// import style from "./SignUp.module.css";
import React from "react";
// import { login } from "../../services/api";
import Input from "../Input/Input";

function SignUp(props) {
  return (
    <div>
      <form className="mt-5 p-5 w-50 mx-auto">
        <Input
          display="d-none"
          labelName="First name"
          type="text"
          labelId="fname"
        />
        <Input
          display="d-none"
          labelName="Last name"
          type="text"
          labelId="lname"
        />
        <Input
          display="d-none"
          labelName="Email adrress"
          type="email"
          labelId="emailAddress"
        />
        <Input labelName="Phone number" type="number" labelId="phoneNumber" />
        <Input labelName="Address" type="text" labelId="adrress" />
        <Input
          display="d-none"
          labelName="Password"
          type="password"
          labelId="password"
        />
        <Input
          display="d-none"
          labelName="Repeat password"
          type="password"
          labelId="repeatPassword"
        />

        <button type="submit" className="btn btn-primary mr-4">
          Submit
        </button>
        <button type="button" className="btn btn-info">
          Already i have an account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
