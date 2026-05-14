import React from "react";

function PlantCard({ plant, onToggleStock }) {
  const isInStock = plant.in_stock !== false; // Default to true if not specified

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button
          className="primary"
          onClick={() => onToggleStock(plant.id, isInStock)}
        >
          In Stock
        </button>
      ) : (
        <button onClick={() => onToggleStock(plant.id, isInStock)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
