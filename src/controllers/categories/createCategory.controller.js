import createCategoryService from "../../services/categories/createCategory.service";

export const createCategoryController = async (request, response) => {
  const { name } = request.body;
  
  try {
    const createdCategory = await createCategoryService(name);

    return response.status(201).json(createdCategory);
  } catch (err) {
    return response.status(400).json({message: err.message});
  };
};
