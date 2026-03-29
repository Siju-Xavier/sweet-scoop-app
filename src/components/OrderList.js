import React, { useEffect } from 'react';
import OrderItem from './OrderItem';

function OrderList({ order, setOrder }) {
  useEffect(() => {
    const savedOrder = localStorage.getItem('order');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, [setOrder]);

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  const handleRemove = (id) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = order.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <div className="order-list">
      <h2>Your Order</h2>
      {order.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <>
          {order.map((item) => (
            <OrderItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default OrderList;
