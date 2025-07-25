import {Router} from 'express';
import {getIngredients,createIngredients,getIngredientsByID,editIngredients,deletedIngredients} from '../controller/ingredientsController'
const router = Router();

router.get('/',getIngredients);
router.post('/',createIngredients);
router.get('/:id',getIngredientsByID);
router.put('/:id',editIngredients);
router.delete('/.id',deletedIngredients);

export default router;