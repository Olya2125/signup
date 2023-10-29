import React from "react";
import Form from "./components/Form";
import "./App.css";

import Info from "./components/Info";


const App = () => {
  return (
    <div>

    <div className="container">
    <div>
      <Form />
      </div>
      <div>
        <Info/>
      </div>
      </div>
      </div>
  )
};

export default App;
