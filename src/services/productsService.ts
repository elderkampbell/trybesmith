import productsModel from '../models/productsModel';
import { IProduct } from '../interfaces/productsInterface';

const addProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await productsModel.addProduct(product);
  return newProduct;
};

export default {
  addProduct,
};
