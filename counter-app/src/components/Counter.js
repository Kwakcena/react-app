import React, { useState } from "react";

const Counter = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [number, setNumber] = useState(0);

  const onIncrease = (number) => setNumber((num) => num + number);
  const onDecrease = (number) => setNumber((num) => num - number);

  return (
    <div>
      <h2>number : {number}</h2>
      <hr />
      증가 버튼 :
      {numbers.map((number, index) => (
        <button key={index} onClick={() => onIncrease(number)}>
          +{number}
        </button>
      ))}
      <br />
      감소 버튼 :
      {numbers.map((number, index) => (
        <button key={index} onClick={() => onDecrease(number)}>
          -{number}
        </button>
      ))}
    </div>
  );
};

export default Counter;
