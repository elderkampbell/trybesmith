import { Request, Response } from 'express';
import productsService from '../services/productsService';

const addProduct = async (req : Request, res : Response) : Promise<Response> => {
  const productAdded = await productsService.addProduct(req.body);
  return res.status(201).json(productAdded);
};

export default {
  addProduct,
};
