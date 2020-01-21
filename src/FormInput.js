import React, { useState, useEffect } from 'react';

const FormInput = ({ input }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    input(value * 0.9);
  });

  return (
    <form className="mt4">
      <input
        type="number"
        name="weight"
        placeholder="Enter 1 rep max"
        className="input f4"
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
        autoFocus
        autoComplete="off"
        pattern="\d*"
        inputMode="decimal"
      />
      <label className="ml2 white f4" htmlFor="weight">
        kg
      </label>
    </form>
  );
};

export default FormInput;
