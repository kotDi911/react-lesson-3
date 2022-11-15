import React from "react";

const Loader = ({loading})=>{
    return loading ? (<span className='preloader'>Loading...</span>) : (<></>);
};

export default Loader