import {Router} from 'express';
import { deletedCategory, getAllCategories, getCategoryByID } from '../model/categoryModel';
import { createCategory, editCategory, getCategory ,getCategories} from '../controller/categoryController';

const router = Router();

router.get('/',getCategories);
router.post('/',createCategory);
router.get('/:id',getCategoryByID);
router.put('/:id',editCategory);
router.delete('/.id',deletedCategory);

export default router;