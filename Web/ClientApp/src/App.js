import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import Counter from "./components/Counter";
import Customers from "./customers/Customers";
import Partners from "./partners/Partners";
import { Products } from "./products/Products";
import { Sales } from "./sales/Sales";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetchdata" component={FetchData} />
        <Route path="/customers" component={Customers} />
        <Route path="/partners" component={Partners} />
        <Route path="/products" component={Products} />
        <Route path="/sales" component={Sales} />
      </Layout>
    );
  }
}
