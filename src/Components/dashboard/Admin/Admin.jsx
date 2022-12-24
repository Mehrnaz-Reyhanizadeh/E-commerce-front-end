import React, { useEffect , useContext } from 'react';
import { Link } from 'react-router-dom';


const Admin = () => {
    const {isAdmin, setIsAdmin } =
    useContext(ContextUser);
      useEffect(() => {
    const sessionIsadmin = sessionStorage.getItem("isadmin");
    // console.log(user);
    if (sessionIsadmin === "true") {
      setIsAdmin("true");
    } else {
      setIsAdmin("false");
    }
  }, [isAdmin])
    return (
        <div className='mt-5 pt-5'>
            <Link to={/dashboard/usermanagement}>User management</Link>
            {isAdmin === "true" &&<Link className='text-dark ml-2 5 display-4 ' to="/admin/CreateProduct">Add Product</Link>}
            
        </div>
    );
};

export default Admin;