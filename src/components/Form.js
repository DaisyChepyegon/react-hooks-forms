import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input onChange={handleFirstChange} type="text" value={firstName} />
      <input onChange={handleLastChange} type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
