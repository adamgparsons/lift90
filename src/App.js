import React, { useState } from "react";
import "./styles/App.css";
import "./styles/tachyons.min.css";
import FormInput from "./FormInput";
import Results from "./Results";
import MetaTags from "react-meta-tags";

function App() {
  const [OneRepMax, setOneRepMax] = useState("");
  return (
    <React.Fragment>
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </MetaTags>
      <div className="bar" />
      <div className="lato mw-400 center ph2-5">
        <h1 className="white normal mt4 mt5-ns f2 ">90% lift calculator</h1>
        <FormInput input={formInput => setOneRepMax(formInput)} />

        {OneRepMax ? <Results input={OneRepMax} /> : ""}
      </div>
    </React.Fragment>
  );
}

export default App;
