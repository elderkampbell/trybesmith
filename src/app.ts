import express from 'express';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.post('/products', productsController.addProduct);
app.get('/products', productsController.getAllProducts);
app.post('/users', usersController.addUser);

export default app;
