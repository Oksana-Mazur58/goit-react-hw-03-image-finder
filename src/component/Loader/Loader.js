import React from 'react';
import Loader from "react-loader-spinner";
const Spinner = () => {
    return (
        <div className="spinner">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}/>
        </div>
    )
}
export default Spinner