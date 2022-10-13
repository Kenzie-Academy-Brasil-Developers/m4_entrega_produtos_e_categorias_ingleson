import { database } from "../../database"

export const listProductCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT pr.name, pr.price, ca.name AS category FROM products pr JOIN categories ca ON pr.category_id = ca.id WHERE pr.category_id = $1",
      [category_id]
    );

    if(res.rows.length === 0) {
      throw "Product not found"
    };

    return res.rows;
  } catch (err) {
    throw new Error(err);
  };
};