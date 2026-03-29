import React from 'react';

function OrderItem({ item, onRemove }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
      <button className="remove" onClick={() => onRemove(item.id)}>Remove Item</button>
    </div>
  );
}

export default OrderItem;
