import { database } from "../../database"

export const listProductsService = async () => {
  try {
    const res = await database.query(
      "SELECT * FROM products",
      []
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  };
};