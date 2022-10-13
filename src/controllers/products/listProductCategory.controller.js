import { listProductCategoryService } from "../../services/products/listProductCategory.service";

export const listProductCategoryController = async (request, response) => {
  const { category_id } = request.params;

  try {
    const productCategory = await listProductCategoryService(category_id);

    return response.json(productCategory);
  } catch (err) {
    return response.status(400).json(err.message);
  };
};