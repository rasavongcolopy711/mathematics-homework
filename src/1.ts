
<TS>
import { useState } from "react";

function RandomNumber() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(Math.floor(Math.random() * 10) + 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>Generate new number</button>
    </div>
  );
}

export default RandomNumber;
</TS>