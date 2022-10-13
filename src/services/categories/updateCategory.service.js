import { database } from "../../database"

export const updateCategoryService = async (name, id) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if(res.rows.length === 0) {
      throw "Category not found"
    };

    return { message: "Category updated", category: res.rows[0] };
  } catch(err) {
    throw new Error(err);
  };
};