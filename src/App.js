
import './App.css';

import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";

import SmartHome from "./container/SmartHome";
import SmartLogin from "./container/SmartLogin";
import SmartEvent from "./container/SmartEvent";
import SmartAccommodation from "./container/SmartAccommodation";
import SmartRoom from "./container/SmartRoom";
import SmartContact from "./container/SmartContact";

import SmartComment from "./container/SmartComment";

function App() {
  return (
    <div className="App">

        <HashRouter>
            <Routes>
                <Route exact={true} element= {<SmartHome/>} path="/" />
                <Route exact={true} element= {<SmartLogin/>} path="/login" />
                <Route exact={true} element= {<SmartEvent/>} path="/event/:cityName/:startDate&:endDate" />
                <Route exact={true} element= {<SmartAccommodation/>} path="/acc" />
                <Route exact={true} element= {<SmartContact/>} path="/contact" />
                <Route exact={true} element= {<SmartRoom/>} path="/room" />
                <Route exact={true} element= {<SmartComment/>} path="/comment" />


            </Routes>
        </HashRouter>


    </div>

  );
}

export default App;
