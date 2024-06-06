import React from "react";
import "./Checkout.css";

const Checkout = ({ cart, removeFromCart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <hr />
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <button>Confirm Order</button>
    </div>
  );
};

export default Checkout;
