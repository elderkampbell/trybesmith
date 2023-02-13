import { Request, Response } from 'express';
import productsService from '../services/productsService';

const addProduct = async (req : Request, res : Response) : Promise<Response> => {
  const productAdded = await productsService.addProduct(req.body);
  return res.status(201).json(productAdded);
};

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

export default {
  addProduct,
  getAllProducts,
};
