import React, { useState } from "react";

function PasswordLengthChecker() {
  const [password, setPassword] = useState("");

  return (
    <>
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <h1>Length of Pasword {password.length} </h1>
    </>
  );
}

export default PasswordLengthChecker;
