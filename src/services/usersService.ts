import usersModel from '../models/usersModel';
import { IUser } from '../interfaces/usersInterface';

const addUser = async (user: IUser): Promise<IUser> => {
  const newUser = await usersModel.addUser(user);
  return newUser;
};

export default {
  addUser,
};
