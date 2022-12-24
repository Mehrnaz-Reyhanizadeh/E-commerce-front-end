import React from 'react';
import {Link} from "react-router-dom"
import style from "./CheckOut.module.css"

const ClearedMsg = () => {
    return (
        <div className="mx-auto shadow-lg py-4 px-3 w-50">
           <h3 className='text-center my-3 text-danger'>Your item was cleares</h3> 
           <Link className='d-block fa-2x text-center' to="/product">Back to store</Link>
        </div>
    );
};

export default ClearedMsg;