const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const config = require('./config/db');

const app = express();


mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(express.json());


app.use('/api', productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
