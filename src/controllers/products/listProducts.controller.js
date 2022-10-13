import { listProductsService } from "../../services/products/listProducts.service"

export const listProductsController = async (request, response) => {
  try {
    const products = await listProductsService();

    return response.json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  };
};