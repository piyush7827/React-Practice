import React, { useState } from "react";

function Select(props) {
  const [country, setCountry] = useState("INDIA");

  return (
    <>
      <select
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        <option value="NZ">NZ</option>
        <option value="AUS">AUS</option>
        <option value="INDIA">INDIA</option>
        <option value="ENGLAND">ENGLAND</option>
      </select>

      <h1>MY COUNTRY IS {country}</h1>
    </>
  );
}

export default Select;
