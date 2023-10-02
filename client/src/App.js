import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Breadcrumbs from './components/Breadcrumbs';

const App = () => {
  return (
    <Router>
      <div>
        <Breadcrumbs paths={[{ label: 'Home', url: '/' }]} />

        <Switch>
          <Route path="/products" exact component={ProductList} />

          <Route path="/products/:productId" component={ProductDetails} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
