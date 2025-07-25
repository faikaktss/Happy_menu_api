import { addProduct, getAllProducts, updateProducts } from "../model/productModel";
import {getAllİngredients,addİngredients,getİngredientsByID,updateİngredients,deletedİngredients} from '../model/ingredients';

export const createIngredients= async (req,res) =>{
    try {
        const{name,is_allergen} = req.body;
        const Item = await addİngredients({name,is_allergen});
        res.status(200).json(Item);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:'Bir hata aldik'});
    }
}

export const getIngredients = async (req,res) =>{
    try {
        const allItem = await getAllİngredients();
        res.status(201).json(allItem);
    } catch (error) {
        console.log(error);
        res.status(402).json({message:'Bir hata aldik'});
    }
}


export const getIngredientsByID = async(req,res) =>{
    try {
        const {id} = req.params;
        const getID = await getİngredientsByID(id);
        if(!getID){
            res.status(404).json({message:'Not found'});    
        }else{
            res.status(203).json(getID);
        }
    } catch (error) {
        console.log(error);
    }
}


export const editIngredients = async(req,res) =>{
    try {
        const {id} = req.params;
        const {data} = req.body;
        const editItem = await updateİngredients(id,data);
        res.status(202).json(editItem);
    } catch (error) {
        console.log(Error);
        res.status(404).json({message:'not found'});
    }
}

export const deletedIngredients = async(req,res) =>{
    try {
        const {id} = req.params;
        const{data} = req.body;
        const deletedItem = await deletedİngredients(id,data);
        res.status(201).json(deletedItem);
    } catch (error) {
        console.log(error)
        res.status(406).json({message:'Bir hata aldik'});
    }
}