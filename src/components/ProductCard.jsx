import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const handleClick = () => {
    if (product.inStock) {
      addToCart(product);
    }
  };

  return (
    <div
      data-testid={`product-${product.id}`}
      onClick={handleClick}
      style={{
        border: "1px solid gray",
        padding: "0.5rem",
        margin: "0.5rem",
        cursor: product.inStock ? "pointer" : "not-allowed"
      }}
    >
      <p>
        <strong>{product.name}</strong> - {product.price}{" "}
        {product.inStock ? "(In Stock)" : "(Out of Stock)"}
      </p>

      <button disabled={!product.inStock}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
