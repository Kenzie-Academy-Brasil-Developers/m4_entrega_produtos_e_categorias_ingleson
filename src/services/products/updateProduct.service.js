import { database } from "../../database"

export const updateProductService = async (name, id) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if(res.rows.length === 0) {
      throw "Product not found";
    };

    return { message: "Product updated", product: res.rows[0]};
  } catch (err) {
    throw new Error(err);
  };
};