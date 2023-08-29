import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Header(props){

    const [search , setsearch] = useState("iron+man")

    const handleChange = (value) => {
        
        props.sendData(value)
    }

    useEffect(() => {
    })

    return (
        <div className="alert alert-primary">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>
                            <Link to="/" style={{textDecoration : "none"}} >Movie Browser</Link>
                        </h2>
                    </div>
                    <div className="col-md-8">
                        <input type="text" placeholder="searching" className="form-cantrol" onChange={(e) => handleChange(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;