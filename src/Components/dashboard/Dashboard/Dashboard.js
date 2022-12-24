import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextUser } from "../../../context/ContextUserProvider";

const Admin = () => {
  const { isAdmin, setIsAdmin } = useContext(ContextUser);

  useEffect(() => {
    const sessionIsadmin = sessionStorage.getItem("isadmin");
    if (sessionIsadmin === "true") {
      setIsAdmin("true");
    } else {
      setIsAdmin("false");
    }
  }, [isAdmin]);
  return (
    <div className="mt-5 pt-5 pl-3">
      <h1 className="text-left text-warning mb-4">Dashboard menu</h1>
      <div className="d-flex flex-column" style={{ fontSize: "20px" }}>
        <Link className="text-dark mt-2" to="/dashboard/usermanagement">
          <i className="fa fa-user mr-2"></i>
          User management
        </Link>
        {isAdmin === "true" && (
          <>
            <Link className="text-dark mt-2" to="/dashboard/CreateProduct">
              <i className="fas fa-cart-plus mr-2"></i>
              Add Product
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
