import React from "react";

const Results = ({ input }) => {
  return (
    <React.Fragment>
      <p className="c-light-grey mt5"> Based on 90% of 1 rep max</p>
      <div className="bg-c-pale-grey mw-100 ph2-5 br3 mb5">
        <div className="flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            100<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 1 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            90<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.9 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            80<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.8 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            70<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.7 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            60<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.6 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            50<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.5 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            40<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.4 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            30<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.3 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between bb b-c-light-grey">
          <div className="c-light-grey f3">
            20<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.2 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
        <div className=" flex ph1 pv3 justify-between">
          <div className="c-light-grey f3">
            10<span className="f5"> %</span>
          </div>
          <div className="white f3">
            {Math.round(input * 0.1 * 10) / 10}
            <span className="f5"> kg</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Results;
