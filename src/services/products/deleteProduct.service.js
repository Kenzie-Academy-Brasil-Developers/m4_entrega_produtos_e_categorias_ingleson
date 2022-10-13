import { database } from "../../database"

export const deleteProductService = async (id) => {
  
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if(res.rows.length === 0) {
      throw {message: "Product not found"};
    };

    return { message: "Product deleted", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  };
};