import mongoose from 'mongoose'; 
import Scategorie from '../models/scategorie.model.js';
export const getScategories = async (req, res) => { 
    try { 
        const cat = await Scategorie.find().populate('categorie') 
        
        ; 

        res.status(200).json(cat); 
    } catch (error) { 
        res.status(404).json({ message: error.message }); 
    } 
} 
export const getScategorieByID = async (req, res) => { 
    try { 
        const scat = await Scategorie.findById(req.params.id).populate('categorie') 
        
        res.status(200).json(scat); 
    } catch (error) { 
        res.status(404).json({ message: error.message }); 
    } 
} 
export const createScategorie = async (req, res) => { 
    const { nomscategorie,imagescat,categorie } = req.body; 

    const newScategorie = new Scategorie({ nomscategorie:nomscategorie,imagescat:imagescat,categorie:categorie }) 
    try { 
        await newScategorie.save(); 
        res.status(201).json(newScategorie ); 
    } catch (error) { 
        res.status(409).json({ message: error.message }); 
    } 
} 
export const updateScategorie= async (req, res) => { 
    const { id } = req.params; 
    const { 
    nomscategorie,categorie } = 
    req.body; 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Sous categorie avec un id: ${id}`); 
    const scat1 = { nomscategorie:nomscategorie,imagescat:imagescat,categorie:categorie, _id: id }; 
    await Scategorie.findByIdAndUpdate(id, scat1); 
    res.json(scat1); 
} 
export const deleteScategorie = async (req, res) => { 
    const { id } = req.params; 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Sous categorie avec l'ID: ${id}`); 
    await Scategorie.findByIdAndDelete(id); 
    res.json({ message: "Sous categorie supprimé avec succès." }); 
} 