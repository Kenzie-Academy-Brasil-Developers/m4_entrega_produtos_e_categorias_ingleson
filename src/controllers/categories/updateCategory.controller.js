import { updateCategoryService } from "../../services/categories/updateCategory.service";

export const updateCategoryController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const updatedCategory = await updateCategoryService(name, id);

    return response.json(updatedCategory);
  } catch (err) {
    return response.status(400).json({message: err.message});
  };
};