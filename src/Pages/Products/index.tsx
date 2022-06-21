import React from "react";
import { Rate } from "antd";
import { useLocation } from "react-router";
import "./Product.css";
import Header from "../../components/Header";
import Purchase from "../../components/Purchase";

type BookProp = {
  image: string;
  price: number;
  name: string;
  about: string;
  rating: number;
};

function Product() {
  const location = useLocation();
  const book = location.state as BookProp;

  return (
    <div className="container">
      <Header />
      <div className="product-content">
        <div>
          <div className="product-img">
            <img src={book.image} alt="product" width="100%" />
          </div>
          <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
        </div>
        <div className="product-details">
          <h1>{book.name}</h1>
          <Rate value={book.rating} disabled />
          <hr />
          <p>
            Price:
            <span className="price"> ${book.price}</span>
          </p>
          <p>No Import Fees & Free Shipping Included</p>
          <h3>About This Item</h3>
          <p>{book.about}</p>
        </div>
        <div className="purchase-details">
          <Purchase book={book} />
        </div>
      </div>
    </div>
  );
}

export default Product;
