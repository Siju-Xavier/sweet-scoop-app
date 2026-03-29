import React, { useState } from 'react';

function FlavorItem({ flavor, onAddToOrder }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flavor-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={flavor.image} alt={flavor.name} />
      <h3>{flavor.name}</h3>
      <p>{flavor.price}</p>
      {hovered && <p>{flavor.description}</p>}
      <button onClick={() => onAddToOrder(flavor)}>Add to Order</button>
    </div>
  );
}

export default FlavorItem;
