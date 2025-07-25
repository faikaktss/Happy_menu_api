import db from '../config/database';
import { SHOW_DELETED } from '../constant';

export const getAllProducts = (show_deleted,category_id) =>{
    const query = db('products');
    if(show_deleted === SHOW_DELETED.TRUE){
    
    }else if(show_deleted === SHOW_DELETED.FALSE){
        query.whereNot('deleted_at',null);
    }else{
        query.where('deleted_at',null);
    }   
    if(category_id){
        query.where('category_id',Number(category_id));
    }
    return query;
}

export const addProduct = (data) =>{
    return db('products').insert(data).returning('*');
}

export const getProcutsByID = (id) =>{
    return db('products').where({id,deleted_at:null}).first();
}

export const updateProducts = (id,data) =>{
    return db('products').where({id,deleted_at:null}).update(data).returning('*');
}

export const deletedProducts = (id,data) =>{
    return db('categories').where({id,deleted_at:null}).update({deleted_at:new Date()}).returning('*');
}