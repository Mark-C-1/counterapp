import React from "react";
import '../NavBar.css'; // ✅ Go up one level to reach App.css



function NavBar({ totalItems }) {
  return (
    <div className="navbar">
      <span  className="cart-items" role="img" aria-label="cart">🛒</span>
      <span className="badge">{totalItems}</span>
      <span className="items">Items</span>
    </div>
  );
}

export default NavBar;
