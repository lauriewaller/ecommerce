import React, { useEffect } from "react";
//import Product from "./../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/productActions";
import { Link } from "react-router-dom";
import orangeBanner from "../images/orange-banner-sampletext.jpg";
import succulentBanner from "../images/banner-3.jpg";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]); // fills the products. another hook that happens when comp did mounts to page. first param is a function and second is an array that accepts dependencies. This has no dependencies. this function will run only one time
  //sends ajax req to backend and fetch products

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="category-container">
          {categories.map((category) => (
            // key here allows each card to be separated based on id from each obj
            <div key={category}>
              <Link to={`/category/${category}`}>
                <div className="image-row-container">
                  <img src={succulentBanner} alt="Succulent Banner" />
                  <div className="centered home">{category}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
