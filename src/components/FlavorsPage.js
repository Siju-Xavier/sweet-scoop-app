import React, { useState } from 'react';
import Header from './Header';
import FlavorCatalog from './FlavorCatalog';
import OrderList from './OrderList';
import Footer from './Footer';

function FlavorsPage() {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (flavor) => {
    setOrder((prevOrder) => {
      const existing = prevOrder.find((item) => item.id === flavor.id);
      if (existing) {
        return prevOrder.map((item) =>
          item.id === flavor.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevOrder, { ...flavor, quantity: 1 }];
    });
  };

  return (
    <div className="flavors-page">
      <Header />
      <div className="content">
        <FlavorCatalog onAddToOrder={handleAddToOrder} />
        <OrderList order={order} setOrder={setOrder} />
      </div>
      <Footer />
    </div>
  );
}

export default FlavorsPage;
