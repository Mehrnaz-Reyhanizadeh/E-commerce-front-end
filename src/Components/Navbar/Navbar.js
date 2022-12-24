import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { ContextUser } from "../../context/ContextUserProvider";
import shopIcon from "../../assets/icons/shop.svg";
import style from "./Navbar.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../helper/toast";

const Navbar = (props) => {
  const { state } = useContext(CartContext);
  const { user, setUser, userData, setUserData } = useContext(ContextUser);
  const navigate = useNavigate();

  // const [selectoption, setSelectOption] = useState("all");
  // const handleSelectChange = (event) => {
  //   setSelectOption(event.target.value);
  // };

  // useEffect(() => {
  //   props.passNavData(selectoption.toLowerCase());
  // }, [selectoption]);

  const logOutHandler = () => {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("isadmin", "");
    setUser(false);
    // setUserData({});
    notify("You loged out successfully", "warn");
    // navigate("/products");
  };

  return (
    <>
      <div className={` ${style.navContainer}`}>
        <div className={style.categoty}>
          {/* <span>Category</span>
          <select value={selectoption} onChange={handleSelectChange}>
            <option vlaue="all">All</option>
            <option vlaue="women's clothing">Women's clothing</option>
            <option vlaue="men's clothing">Men's clothing</option>
            <option vlaue="jewelery">Jewelery</option>
            <option vlaue="electronics">Electronics</option>
          </select> */}
          {user && userData && (
            <p className="text-light mb-0" style={{ fontSize: "18px" }}>
              Wellcome {userData.fname}
            </p>
          )}
        </div>
        <Link className={style.navLink} to="/products">
          React Shop
        </Link>
        <div className={style.shopiconContainer}>
          <Link to="/checkout">
            <img src={shopIcon} style={{ width: "20px" }} alt="icon" />
          </Link>
          <span>{state.itemCounter}</span>
          {user ? (
            <>
              <Link
                className="ml-3 text-white"
                to="/products"
                onClick={logOutHandler}
              >
                LogOut
              </Link>

              <Link className="ml-3 text-white" to="/dashboard">
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link to="/signUp" className="ml-3 text-white">
                SignUp
              </Link>
              <span className="mx-2 text-white">/</span>
              <Link className="text-white" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
