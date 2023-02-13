import productsModel from '../models/productsModel';
import { IProduct } from '../interfaces/productsInterface';

const addProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await productsModel.addProduct(product);
  return newProduct;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

export default {
  addProduct,
  getAllProducts,
};
