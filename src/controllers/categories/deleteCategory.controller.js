import { deleteCategoryService } from "../../services/categories/deleteCategory.service";

export const deleteCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedCategory = await deleteCategoryService(id);

    return response.status(204).json(deletedCategory);
  } catch (err) {
    return response.status(400).json({message: err.message});
  };
};