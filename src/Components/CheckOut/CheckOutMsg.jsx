import React from 'react';
import {Link} from "react-router-dom"
import style from "./CheckOut.module.css"
const CheckOutMsg = () => {
    return (
        <div className="mx-auto shadow-lg py-4 px-3 w-50">
           
            <h3 className='text-center my-3 text-success'>Thanks for shopping</h3>
            <Link className='d-block fa-2x text-center' to="/product" >Buy more</Link>
            
        </div>
    );
};

export default CheckOutMsg;