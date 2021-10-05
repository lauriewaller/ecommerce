import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "./../actions/userActions";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div>
      <header className="row">
        <div className="brand">
          <Link to="/">Fig Tree</Link>
        </div>
        <div>
          <Link to="/cart">
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                <i className="fa fa-user fa-lg" aria-hidden="true"></i>{" "}
                {/* <i className="fa fa-caret-down"></i>{" "} */}
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/profile">User Profile</Link>
                </li>
                <li>
                  <Link to="/orderhistory">Order History</Link>
                </li>
                <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">SIGN IN</Link>
          )}
        </div>
      </header>

      {/* <hr /> */}
    </div>
  );
}
