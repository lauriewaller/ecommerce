import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/category/:category" component={CategoryScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <PrivateRoute
            path="/orderhistory"
            component={OrderHistoryScreen}
          ></PrivateRoute>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center footer">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* id is optional in CartScreen component, hence the question mark */
