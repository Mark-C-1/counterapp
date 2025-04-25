import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";
import "./App.css";

function App() {
  const initialCounters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
  ];

  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (counter) => {
    const updated = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    );
    setCounters(updated);
  };

  const handleDecrement = (counter) => {
    const updated = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value - 1 } : c
    );
    setCounters(updated);
  };

  const handleReset = () => {
    const updated = counters.map((c) => ({ ...c, value: 0 }));
    setCounters(updated);
  };

  const handleDelete = (counterId) => {
    const updated = counters.filter((c) => c.id !== counterId);
    setCounters(updated);
  };

  return (
    <>
    
    
    <div className="app-container">
    <h1 className="app-title">Counter App</h1>
      {/* <h1 className="app-title">Counter App</h1> */}
      <NavBar totalItems={counters.filter((c) => c.value > 0).length} />
      
      <div className="top-buttons">
        <button className="btn-green" onClick={handleReset}>
          🔄
        </button>

        <button className="btn-blue" onClick={() => window.location.reload()}>
          ❄️
        </button>
      </div>

      <Counters
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
    </div>
    </>
  );
}

export default App;
