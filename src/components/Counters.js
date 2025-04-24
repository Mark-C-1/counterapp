import React from "react";
import Counter from "./Counter";

function Counters({ counters, onIncrement, onDecrement, onDelete }) {
  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Counters;
