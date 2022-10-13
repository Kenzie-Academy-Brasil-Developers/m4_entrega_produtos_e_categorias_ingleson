import { Router } from "express";
import { createCategoryController } from "../controllers/categories/createCategory.controller";
import { deleteCategoryController } from "../controllers/categories/deleteCategory.controller";
import { listCategoriesController } from "../controllers/categories/listCategories.controller";
import { listOneCategoryController } from "../controllers/categories/listOneCategory.controller";
import { updateCategoryController } from "../controllers/categories/updateCategory.controller";

export const categoriesRouter = Router();

categoriesRouter.post('', createCategoryController);
categoriesRouter.get('', listCategoriesController);
categoriesRouter.get('/:id', listOneCategoryController);
categoriesRouter.patch('/:id', updateCategoryController);
categoriesRouter.delete('/:id', deleteCategoryController);
