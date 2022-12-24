export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password need to be 6 character or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.fname.trim()) {
      errors.fname = "First name required";
    } else {
      delete errors.fname;
    }
    if (!data.lname.trim()) {
      errors.lname = "Last Name required";
    } else {
      delete errors.lname;
    }
    if (!data.address.trim()) {
      errors.address = "Address required";
    } else {
      delete errors.address;
    }
    if (data.phoneNumber.toString().length === 0) {
      errors.phoneNumber = "Phone number required";
    } else if (data.phoneNumber.toString().length < 10) {
      errors.phoneNumber = "Phone number is not correct";
    } else {
      delete errors.phoneNumber;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }

    // if (data.isAccepted) {
    //   delete errors.isAccepted;
    // } else {
    //   errors.isAccepted = "Accept our regulations";
    // }
  }

  return errors;
};
