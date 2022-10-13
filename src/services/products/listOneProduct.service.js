import { database } from "../../database"

export const listOneProductService = async (id) => {
  
  try {
    const res = await database.query(
      "SELECT * FROM products WHERE id = $1;",
      [id]
    );

    if(res.rows.length === 0) {
      throw {message: "Product not found"};
    };

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  };
};