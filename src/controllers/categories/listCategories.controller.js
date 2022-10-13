import { listCategoriesService } from "../../services/categories/listCategories.service"

export const listCategoriesController = async (request, response) => {
  try {
    const categories = await listCategoriesService();

    return response.json(categories);
  } catch (err) {
    return response.status(400).json(err.message);
  };
};