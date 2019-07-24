import React, { useState } from "react";
import "./styles/App.css";
import "./styles/tachyons.min.css";
import FormInput from "./FormInput";
import Results from "./Results";
import MetaTags from "react-meta-tags";
import Favicon16 from "./assets/favicon-16x16.png";
import Favicon32 from "./assets/favicon-32x32.png";
import AppleTouch from "./assets/apple-touch-icon.png";

function App() {
  const [OneRepMax, setOneRepMax] = useState("");
  return (
    <React.Fragment>
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Lift90</title>
      </MetaTags>
      <div className="bar" />
      <div className="lato mw-400 center ph2-5">
        <h1 className="white normal mt4 mt5-ns f2 ">
          90% lift calculator{" "}
          <span role="img" aria-label="strength">
            💪
          </span>
        </h1>
        <FormInput input={formInput => setOneRepMax(formInput)} />

        {OneRepMax ? <Results input={OneRepMax} /> : ""}
      </div>
    </React.Fragment>
  );
}

export default App;
