import ordersModel from '../models/ordersModel';

const getAllOrders = async () => {
  const AllOrders = await ordersModel.getAllOrders();
  return AllOrders;
};

export default {
  getAllOrders,
};
