import { updateProductService } from "../../services/products/updateProduct.service";

export const updateProductController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const updatedProduct = await updateProductService(name, id);

    return response.json(updatedProduct);
  } catch (err) {
    return response.status(400).json({message: err.message});
  };
};