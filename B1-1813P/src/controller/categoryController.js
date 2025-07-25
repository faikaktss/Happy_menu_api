import { addCategory, getAllCategories, updateCategory } from "../model/categoryModel";
import {SHOW_DELETED} from '../constant';

export const createCategory = async (req,res) =>{
    try {
        const {name ,description } = req.body;
        const Item = await addCategory({name,description});
        res.status(201).json(Item);
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Bir hata aldik'});
    }
}


export const getCategories = async (req,res) =>{
    try {
        const {show_deleted} = req.query;
        const allItem = await getAllCategories(show_deleted);
        res.status(203).json(allItem);
    } catch (error) {
        console.log(error);
        res.status(402).json({message:'Bir hata aldik'});
    }
}


export const getCategoryByID = async (req,res) =>{
    try {
        const {id} = req.params;
        const getId = await getCategoryByID(id);
        if(!getId){
            res.status(404).json({message:'Not found'});
        }else
            res.json(getId);
    } catch (error) {
        console.log(error);
        res.status(403).json({message:'Bir hata aldik'});
    }
}

export const editCategory = async(req,res) =>{
    try {
        const {id} = req.params;
        const editItem = await updateCategory(id,req.boyd);
        res.status(205).json(editItem);
    } catch (error) {
        console.log(error);
        res.status(405).json({message:'bir hata aldik'});
    }
}

export const deletedCategory = async(req,res) =>{
    try {
        const {id} = req.params;
        const{data} = req.body;
        const deletedItem = await deletedCategory(id,data);
        res.status(201).json(deletedItem);
    } catch (error) {
        console.log(error)
        res.status(406).json({message:'Bir hata aldik'});
    }
}