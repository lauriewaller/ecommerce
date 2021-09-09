import React, { useEffect } from "react";
import Product from "./../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]); // fills the products. another hook that happens when comp did mounts to page. first param is a function and second is an array that accepts dependencies. This has no dependencies. this function will run only one time
  //sends ajax req to backend and fetch products
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            // key here allows each card to be separated based on id from each obj
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
