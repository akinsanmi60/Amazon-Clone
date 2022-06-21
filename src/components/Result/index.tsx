import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
import "./Results.css";
import books from "../../books";
import { CategoriesProp } from "../../type";

type Props = {
  rating: number;
  priceMin: number;
  priceMax: number;
  category: CategoriesProp;
};

function Results({ category, rating, priceMin, priceMax }: Props) {
  const bookCategory = books[category]
    .filter((x: { rating: number }) => x.rating >= rating)
    .filter((x: { price: number }) => x.price > priceMin)
    .filter((x: { price: number }) => x.price <= priceMax);
  console.log(bookCategory);
  return (
    <>
      {bookCategory.map(e => {
        return (
          <Card>
            <div style={{ display: "flex" }}>
              <img src={e.image} alt="logo" width="300px" />
              <div>
                <p className="title">{e.name}</p>
                <Rate value={e.rating} disabled />
                <h2> ${e.price}</h2>
                <p>Ships to Your Location</p>
                <Link to="/product" state={e} className="login">
                  Got to Product Page
                </Link>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default Results;
