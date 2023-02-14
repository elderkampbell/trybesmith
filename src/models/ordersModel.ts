import connection from './connection';

const getAllOrders = async () => {
  const [orders] = await connection.execute(
    `SELECT o.id, o.user_Id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders o INNER JOIN Trybesmith.products p ON p.order_Id = o.id
    GROUP BY o.id;`,
  );
  return orders;
};

export default {
  getAllOrders,
};
