import { Space, InputNumber } from "antd";
import { SetStateAction } from "react";
import "./PriceRanges.css";

type Props = {
  priceMin: number;
  priceMax: number;
  setPriceMin: React.Dispatch<React.SetStateAction<number>>;
  setPriceMax: React.Dispatch<React.SetStateAction<number>>;
};

function PriceRanges({ priceMin, setPriceMin, priceMax, setPriceMax }: Props) {
  function changePrice(
    min: SetStateAction<number>,
    max: SetStateAction<number>,
  ) {
    setPriceMin(min);
    setPriceMax(max);
  }

  return (
    <>
      <h2>Price Ranges</h2>
      <p className="prices" onClick={() => changePrice(0, 5)}>
        Under $5
      </p>
      <p className="prices" onClick={() => changePrice(5, 10)}>
        $5 to $10
      </p>
      <p className="prices" onClick={() => changePrice(10, 20)}>
        $10 to $20
      </p>
      <p className="prices" onClick={() => changePrice(20, 100)}>
        $20 & Above
      </p>
      <Space>
        <InputNumber
          value={priceMin}
          formatter={(value: any) => `$ ${value}`}
          onChange={(value: any) => changePrice(value, priceMax)}
        />
        <InputNumber
          value={priceMax}
          formatter={(value: any) => `$ ${value}`}
          onChange={(value: any) => changePrice(priceMin, value)}
        />
      </Space>
      <br />
      <br />
    </>
  );
}

export default PriceRanges;
