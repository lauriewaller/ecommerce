import React from "react";
import data from "./../data";
import Product from "./../components/Product";

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          // key here allows each card to be separated based on id from each obj
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
