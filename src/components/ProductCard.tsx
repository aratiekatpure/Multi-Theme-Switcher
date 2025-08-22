import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`star ${i < Math.floor(rating) ? 'star-filled' : 'star-empty'}`}
      />
    ));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      
      <div className="product-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description
          }
        </p>
        
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating.rate)}
          </div>
          <span className="rating-text">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        
        <div className="product-footer">
          <div className="product-price">${product.price.toFixed(2)}</div>
          <button className="add-to-cart-btn">
            <ShoppingCart className="cart-icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;