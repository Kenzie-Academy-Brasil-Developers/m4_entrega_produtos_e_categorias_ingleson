import { listOneProductService } from "../../services/products/listOneProduct.service";

export const listOneProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await listOneProductService(id);

    return response.json(product);
  } catch (err) {
    return response.status(400).json({message: err.message});
  };
};