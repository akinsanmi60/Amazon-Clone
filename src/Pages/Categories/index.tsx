import React, { useState } from "react";

import { Button, Layout } from "antd";
import { useLocation } from "react-router";

import Header from "../../components/Header";
import Rating from "../../components/Rating";
import PriceRanges from "../../components/PriceRange";
import Results from "../../components/Result";
import { CategoriesProp } from "../../type";

const { Sider, Content } = Layout;

function Categories() {
  const location = useLocation();
  const category = location.state as string;
  console.log("++++++++++", category);
  const [rating, setRating] = useState(1);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);

  return (
    <div className="container">
      <Header />
      <div className="results-header">
        <span>Showing Poducts for </span>
        <span className="category">{category}</span>
      </div>

      <Layout>
        <Sider width="340px" theme="light" style={{ padding: "25px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Rating rating={rating} setRating={setRating} />
            <PriceRanges
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
            />
            <Button className="login">Apply Filters</Button>
          </div>
        </Sider>

        <Content
          theme="light"
          style={{ padding: "35px", backgroundColor: "white" }}
        >
          <h1 style={{ fontSize: "30px" }}>RESULTS</h1>
          <Results
            category={category as CategoriesProp}
            rating={rating}
            priceMin={priceMin}
            priceMax={priceMax}
          />
        </Content>
      </Layout>
    </div>
  );
}
export default Categories;
