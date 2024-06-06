import React, { useState } from "react";
import "./ProductListing.css";

const products = [
  {
    id: 1,
    name: "poco m6 Pro 5G",
    price: 100,
    img: "img/img1.avif",
    info: " 6 GB RAM | 128 GB ROM | Expandable Upto 1 TB 17.25 cm (6.79 inch) Full HD+ Display  50MP + 2MP | 8MP Front Camera 5000 mAh Battery  Snapdragon 4 Gen 2 Processor",
  },
  {
    id: 2,
    name: "poco m4 5G",
    price: 200,
    img: "img/img2.jpg",
    info: "MediaTek Dimensity 700 with 5G  90Hz DynamicSwitch display 5000mAh (typ) battery",
  },
  {
    id: 3,
    name: "Redmi y2",
    price: 100,
    img: "img/img3.jpg",
    info: "12MP + 5MP AI dual camera5.99 HD+ 18:9 full-screen display Snapdragon 625 octa-core processor 3080mAh (typ) full-day battery",
  },
  {
    id: 4,
    name: "Poco F4 5G",
    price: 200,
    img: "img/img4.jpg",
    info: "Snapdragon® 870 with 5G 120Hz 6.67” AMOLED DotDisplay 64MP main camera with OIS 67W turbo charging",
  },
];

const ProductListing = ({ addToCart }) => {
  const [quantity, setQuantity] = useState({});

  const handleChange = (e, productId) => {
    setQuantity({ ...quantity, [productId]: parseInt(e.target.value) });
  };

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.info}</p>
          <input
            type="number"
            min="1"
            value={quantity[product.id] || 1}
            onChange={(e) => handleChange(e, product.id)}
          />
          <button
            onClick={() =>
              addToCart({ ...product, quantity: quantity[product.id] || 1 })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
