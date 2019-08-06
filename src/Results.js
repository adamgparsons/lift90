import React from "react";

const Results = ({ input }) => {
  const percentages = [
    10,
    20,
    30,
    40,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100
  ];
  const lastPercentage = percentages.length;
  const listItems = percentages.reverse().map((percentage, i) => (
    <div
      className={
        lastPercentage === i + 1
          ? "flex ph1 pt3 pb4 justify-between"
          : "flex ph1 pv3 justify-between bb b-c-light-grey"
      }
      key={i}
    >
      <div className="c-light-grey f3">
        {percentage}
        <span className="f5"> %</span>
      </div>
      <div className="white f3">
        {Math.round((input * 1 * percentage * 10) / 100) / 10}
        <span className="f5"> kg</span>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <p className="c-light-grey mt5"> Based on 90% of 1 rep max</p>
      <div className="bg-c-pale-grey mw-100 ph2-5 br3 mb5">{listItems}</div>
    </React.Fragment>
  );
};

export default Results;
