import { Router } from "express";

import { createProductController } from "../controllers/products/createProduct.controller";
import { deleteProductController } from "../controllers/products/deleteProduct.controller";
import { listOneProductController } from "../controllers/products/listOneProduct.controller";
import { listProductCategoryController } from "../controllers/products/listProductCategory.controller";
import { listProductsController } from "../controllers/products/listProducts.controller";
import { updateProductController } from "../controllers/products/updateProduct.controller";

export const productsRouter = Router();

productsRouter.post('', createProductController);
productsRouter.get('', listProductsController);
productsRouter.get('/:id', listOneProductController);
productsRouter.patch('/:id', updateProductController);
productsRouter.delete('/:id', deleteProductController);
productsRouter.get('/category/:category_id', listProductCategoryController);