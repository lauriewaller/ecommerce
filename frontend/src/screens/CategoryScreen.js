import React, { useEffect } from "react";
import Product from "./../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { categoriesProduct } from "../actions/productActions";
import succulentBanner from "../images/banner-3.jpg";

export default function CategoryScreen(props) {
  const thisCategory = props.match.params.category;
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const { loading, error, products } = productCategoryList;

  useEffect(() => {
    dispatch(categoriesProduct(thisCategory));
  }, [dispatch, thisCategory]);

  return (
    <div>
      <div className="banner-container">
        <img src={succulentBanner} alt="Succulent Banner" />
        <div className="centered">{thisCategory}</div>
      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <div key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
