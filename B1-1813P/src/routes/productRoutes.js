import {Router} from 'express';
import { createProduct, getProducts ,getProductsByID,editProduct,deletedProducts} from '../controller/productController';

const router = Router();

router.get('/',getProducts);
router.post('/',createProduct);
router.get('/:id',getProductsByID);
router.put('/:id',editProduct);
router.delete('/:id',deletedProducts);

router.post('/:id/ingredients',addIngredientToProduct);
router.get('/:id/ingredients',getIngredientToProduct);
router.delete('/:id/ingredients/:iId',deleteIngredientToProduct);

export default router;