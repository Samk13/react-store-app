import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import ProductList from './ProductList';
import Details from './Details';
import Card from './CartComp';
import Default from './Default';
import Modal from './Modal';

function Store() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/Details" component={Details} />
        <Route path="/Card" component={Card} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default Store;
