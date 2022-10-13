import { database } from "../../database"

export const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if(res.rows.length === 0) {
      throw {message: "Category not found"};
    };

    return { message: "Category deleted", category: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  };
}