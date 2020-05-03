import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Shopping from "./pages/Shopping/Shopping";

export default () => (
  <Switch>
    <Route path="/detalhe-produto" component={ProductDetail} />
    <Route path="/finalizar-compra" component={Shopping} />
    <Route path="*" component={Home} />
  </Switch>
);
