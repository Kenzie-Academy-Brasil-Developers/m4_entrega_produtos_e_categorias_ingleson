import { listOneCategoryService } from "../../services/categories/listOneCategory.service";

export const listOneCategoryController = async (request, response) => {
  const { id } = request.params;

  try {
    const category = await listOneCategoryService(id);

    return response.json(category);
  } catch (err) {
    return response.status(400).json({message: err.message});
  };
};