import React, { useState, useEffect } from "react";

const FormInput = ({ input }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    input(value.toString());
  });

  return (
    <form className="mt4">
      <input
        type="number"
        name="weight"
        placeholder="Enter 1 rep max"
        className="input"
        onChange={event => setValue(event.target.value)}
        value={value}
        autoFocus
        autoComplete="off"
      />
      <label className="ml2 white" htmlFor="weight">
        kg
      </label>
    </form>
  );
};

export default FormInput;
