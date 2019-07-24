import React, { useState } from "react";
import "./styles/App.css";
import "./styles/tachyons.min.css";
import FormInput from "./FormInput";
import Results from "./Results";

function App() {
  const [OneRepMax, setOneRepMax] = useState("");
  return (
    <React.Fragment>
      <div className="bar" />
      <div className="lato mw-400 center ph2-5">
        <h1 className="white normal mt4 mt5-ns f3 f2-ns ">
          90% lift calculator
        </h1>
        <FormInput input={formInput => setOneRepMax(formInput)} />

        {OneRepMax ? <Results input={OneRepMax} /> : ""}
      </div>
    </React.Fragment>
  );
}

export default App;
