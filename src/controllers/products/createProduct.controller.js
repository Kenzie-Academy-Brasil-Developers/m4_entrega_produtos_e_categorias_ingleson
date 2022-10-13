import { createProductService } from "../../services/products/createProduct.service";

export const createProductController = async (request, response) => {
  const { name, price, category_id} = request.body;

  try {
    const createdProduct = await createProductService(name, price, category_id);

    return response.status(201).json(createdProduct);
  } catch (err) {
    return response.status(400).json({message: err.message});
  };
};