import db from '../config/database';

export const addNewItem = (productId,ingredientId) =>{
    return db('productİngredients').insert({product_id:productId, ingredients_id:ingredientId}).returning('*');
}

export const  getItemsByProductId = (productId) =>{
    return db('productİngredients').where({product_id:productId});
}

export const deleteItem = (id,productId)=>{
    return db('productİngredients').where({id,product_id:productId}).delete().returning('*');
}