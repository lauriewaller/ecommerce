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
        <div className="dropdown menu">
          <Link to="#">
            <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/category/cacti">Cacti</Link>
            </li>
            <li>
              <Link to="/category/houseplants">Houseplants</Link>
            </li>
            <li>
              <Link to="/category/succulents">Succulents</Link>
            </li>
          </ul>
        </div>

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
              </Link>
              <ul className="dropdown-content right">
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
            <div className="dropdown">
              <Link to="#">
                <i className="fa fa-user fa-lg" aria-hidden="true"></i>{" "}
              </Link>
              <ul className="dropdown-content right">
                <li>
                  <Link to="/profile">User Profile</Link>
                </li>
                <li>
                  <Link to="/orderhistory">Order History</Link>
                </li>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
