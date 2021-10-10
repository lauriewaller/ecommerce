import React, { useEffect } from "react";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/productActions";
import { Link } from "react-router-dom";
import succulentBanner from "../images/banner-3.jpg";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="category-container">
          {categories.map((category) => (
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
