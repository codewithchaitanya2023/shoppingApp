import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <hr />
          <div className="total">
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
