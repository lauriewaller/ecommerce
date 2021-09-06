import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./../components/Product";

export default function HomeScreen() {
  const [products, setProducts] = useState([]); // sets default value to empty array
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products"); // the array in backend will be transfreerd to data in frontend
      setProducts(data);
    };
    fetchData();
  }, []); // fills the products. another hook that happens when comp did mounts to page. first param is a function and second is an array that accepts dependencies. This has no dependencies. this function will run only one time
  //sends ajax req to backaend and fetch products
  return (
    <div>
      <div className="row center">
        {products.map((product) => (
          // key here allows each card to be separated based on id from each obj
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
