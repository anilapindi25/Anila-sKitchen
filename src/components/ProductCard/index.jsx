import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

const ProductCard = ({ product, quantity, onAddToCart, onIncrease, onDecrease }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/restaurants/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <img src={product.image_url} alt={product.name} className="product-img" />
      <h4>{product.name}</h4>
      <span>{product.cuisine}</span>
      <span className="rating">
        {product.user_rating?.rating} ★ ({product.user_rating?.total_reviews} ratings)
      </span>
      {/* If you have add-to-cart logic, keep it here but stop event propagation */}
      {onAddToCart && (
        quantity > 0 ? (
          <div className="quantity-controls" onClick={e => e.stopPropagation()}>
            <button onClick={() => onDecrease(product.id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => onIncrease(product.id)}>+</button>
          </div>
        ) : (
          <button onClick={e => { e.stopPropagation(); onAddToCart(product); }}>Add</button>
        )
      )}
    </div>
  );
};

export default ProductCard;