import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Breadcrumbs from './components/Breadcrumbs';



const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');

dotenv.config(); // environment variables from .env

const app = express();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(express.json());


app.use('/api', productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
