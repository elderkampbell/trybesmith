import express from 'express';
import productsController from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', productsController.addProduct);
app.get('/products', productsController.getAllProducts);

export default app;
