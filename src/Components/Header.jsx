import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ sendData }) {
  const [passData, setPassData] = useState(undefined);

  const handleChange = (value) => {
    setPassData(value);
  };

  useEffect(() => {
    sendData(passData);
  }, [passData, sendData]);

  return (
    <div className="alert alert-primary sticky-top mainnav">
      <div className="">
        <div className="row">
          <div className="col-md-4 midhead">
            <h2>
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src="./logo.png"
                  alt="logo"
                  className="logo"
                  srcset=""
                  width={"90px"}
                  height={"90px"}
                  onClick={() => {
                    setPassData(undefined);
                  }}
                />
              </Link>
            </h2>
            <h3>MOVIE BROWSER</h3>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              placeholder="Search"
              className="form-cantrol navsearch"
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
