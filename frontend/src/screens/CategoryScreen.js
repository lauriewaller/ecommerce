import React, { useEffect } from "react";
import Product from "./../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { categoriesProduct } from "../actions/productActions";

export default function CategoryScreen(props) {
  const thisCategory = props.match.params.category;
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const { loading, error, products } = productCategoryList;

  useEffect(() => {
    dispatch(categoriesProduct(thisCategory));
  }, [dispatch, thisCategory]);

  return (
    // <div>
    //   <h1>{thisCategory}</h1>
    // </div>
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {/* <p>{thisCategory}</p> */}
          {products.map((product) => (
            // key here allows each card to be separated based on id from each obj
            <div>
              <Product key={product._id} product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
