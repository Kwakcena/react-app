import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => setNumber((number) => number + 1);
  const onDecrease = () => setNumber((number) => number - 1);

  return (
    <div>
      <h2>number : {number}</h2>
      <hr />
      <button onClick={onIncrease}>증가 +1</button>
      <button onClick={onDecrease}>감소 -1</button>
    </div>
  );
};

export default Counter;
