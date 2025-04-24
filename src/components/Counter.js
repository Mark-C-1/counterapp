import React from "react";

function Counter({ counter, onIncrement, onDecrement, onDelete }) {
  const getBadgeClass = () => {
    return counter.value === 0 ? "yellow" : "blue";
  };

  return (
    <div className="counter">
      <button className={`value-btn ${getBadgeClass()}`}>
        {counter.value === 0 ? "Zero" : counter.value}
      </button>
      <button className="btn gray" onClick={() => onIncrement(counter)}>➕</button>
      <button className="btn cyan" onClick={() => onDecrement(counter)}>➖</button>
      <button className="btn red" onClick={() => onDelete(counter.id)}>🗑️</button>
    </div>
  );
}

export default Counter;
