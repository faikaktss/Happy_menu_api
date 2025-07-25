import db from '../config/database';
import { SHOW_DELETED } from '../constant';

export const getAllCategories = (show_deleted) =>{
    const query = db('categories');
    if(show_deleted === SHOW_DELETED.TRUE){
    
    }else if(show_deleted === SHOW_DELETED.FALSE){
        query.whereNot('deleted_at',null);
    }else{
        query.where('deleted_at',null);     
    }
    return query;
}

export const addCategory = (data)=>{
    return db('categories').insert(data).returning('*');
}

export const getCategoryByID = (id) =>{
    return db('categories').where({id,deleted_at:null}).first();
} 

export const updateCategory = (id,data) =>{
    return db('categories').where({id,deleted_at:null}).update(data).returning('*');
}

export const deletedCategory = (id,data) =>{
    return db('categories').where({id,deleted_at:null}).update({deleted_at:new Date()}).returning('*');
}