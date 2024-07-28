import React, { useState } from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Youtube from "./Youtube";

const App = () => {

  const [sendData, setSendData] = useState();

  return (
    <BrowserRouter>
      <div>
        <Header sendData={setSendData} />
        <div className="container">
          <Routes>
              <Route path="/" exact={true} element={<Youtube sendData={sendData}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >

  );
}


export default App;
