import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1); //default value of qty is set to 1
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  }; // I think the id allows us to add a new item to the cart

  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to Home</Link>
          <div className="row top">
            <div className="col-1">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name.toUpperCase()}</h1>
                </li>
                <li>Price: ${product.price}</li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>
                  <div className="test2">Status:</div>
                  <div className="test2">
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </li>
                <div>
                  {product.countInStock > 0 && (
                    <div>
                      <div className="test2">Qty</div>
                      <div className="test2">
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="test2">
                        {/* the onClick is defined before return stmt in this file */}
                        <button
                          onClick={addToCartHandler}
                          // className="primary block"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
