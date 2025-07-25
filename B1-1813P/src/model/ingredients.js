import db from '../config/database';

export const getAllİngredients = () =>{
    const query = db('ingredients');

    return query;
}

export const addİngredients = (data)=>{
    return db('ingredients').insert(data).returning('*');
}

export const getİngredientsByID = (id) =>{
    return db('ingredients').where({id,deleted_at:null}).first();
} 

export const updateİngredients = (id,data) =>{
    return db('ingredients').where({id,deleted_at:null}).update(data).returning('*');
}

export const deletedİngredients = (id,data) =>{
    return db('ingredients').where({id,deleted_at:null}).update({deleted_at:new Date()}).returning('*');
}