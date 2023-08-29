import React, {useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Movielist from "./Movielist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./Video";
import Youtube from "./Youtube";

const App = () => {

  const [sendData, setSendData] = useState();

  return (
    <BrowserRouter>
      <div>
        <Header sendData={setSendData} />
        <div className="container">
          <Routes>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/movie" element={<Movielist sendData={sendData} />} />
              <Route path="/video" element={<Video/>} />
              <Route path="/trailer" element={<Youtube sendData={sendData}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >

  );
}


export default App;
