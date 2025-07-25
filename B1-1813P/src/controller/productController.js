import { addNewItem } from "../model/productIngredientsModel";
import { addProduct, getAllProducts, updateProducts } from "../model/productModel";


export const createProduct = async (req,res) =>{
    try {
        const{name,description,price,category_id} = req.body;
        const Item = await addProduct({name,description,price,category_id});
        res.status(200).json(Item);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:'Bir hata aldik'});
    }
}

export const getProducts = async (req,res) =>{
    try {
        const {show_deleted,category_id} = req.query;
        const allItem = await getAllProducts(show_deleted,category_id);
        res.status(201).json(allItem);
    } catch (error) {
        console.log(error);
        res.status(402).json({message:'Bir hata aldik'});
    }
}


export const getProductsByID = async(req,res) =>{
    try {
        const {id} = req.params;
        const getID = await getProductsByID(id);
        if(!getID){
            res.status(404).json({message:'Not found'});    
        }else{
            res.status(203).json(getID);
        }
    } catch (error) {
        console.log(error);
    }
}


export const editProduct = async(req,res) =>{
    try {
        const {id} = req.params;
        const {data} = req.body;
        const editItem = await updateProducts(id,data);
        res.status(202).json(editItem);
    } catch (error) {
        console.log(Error);
        res.status(404).json({message:'not found'});
    }
}

export const deletedProducts = async(req,res) =>{
    try {
        const {id} = req.params;
        const{data} = req.body;
        const deletedItem = await deletedProducts(id,data);
        res.status(201).json(deletedItem);
    } catch (error) {
        console.log(error)
        res.status(406).json({message:'Bir hata aldik'});
    }
}


export const addIngredientToProduct = async(req,res) =>{
    try {
        const {id} = req.params;
        const{ingredientId} = req.body;
        const newItem = await addNewItem(id,ingredientId);
        res.status(202).json(newItem);
    } catch (error) {
        console.log(error);     
        res.status(404).json({message:'Bir hata oldu'})
    }

}

export const getIngredientToProduct = async(req,res) =>{
    try {
        const {id} = req.params;
        const Items = await getItemsByProductId(id);
        res.json(Items);
    } catch (error) {
        console.log(error);
            res.status(404).json({message:'Bir hata oldu'})
    }
}

export const deleteIngredientToProduct = async(req,res) =>{
    try {
        const {id,iId} = req.params;
        const Items = await deleteItem(id,iId);
        res.json(Items);
    } catch (error) {
        console.log(error);
            res.status(404).json({message:'Bir hata oldu'})
    }
}