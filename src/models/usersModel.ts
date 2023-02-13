import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/usersInterface';

const addUser = async (user: IUser) => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );

  return { id: insertId, ...user };
};

export default {
  addUser,
};
