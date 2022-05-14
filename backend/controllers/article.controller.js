import mongoose from 'mongoose'; 
import Article from '../models/Article.model.js'; 
export const getArticles = async (req, res) => { 
    try { 
        const cat = await Article.find().populate('categorie') 
        .populate('scategorie') ;
        
        ; 

        res.status(200).json(cat); 
    } catch (error) { 
        res.status(404).json({ message: error.message }); 
    } 
} 
export const getArticleByID = async (req, res) => { 
    try { 
        const art = await Article.findById(req.params.id).populate('categorie') 
        .populate('scategorie'); 
        res.status(200).json(art); 
    } catch (error) { 
        res.status(404).json({ message: error.message }); 
    } 
} 
export const createArticle = async (req, res) => { 
    const {     caracteristiques,designation,marque,reference,qtestock,prixAchat,prixVente,prixSolde,imageartpetitf, imageartgrandf
        ,scategorie,categorie } = req.body; 

    const newArticle = new Article({ caracteristiques:caracteristiques,designation:designation,marque:marque,reference:reference,qtestock:qtestock,prixAchat:prixAchat,prixVente:prixVente,prixSolde:prixSolde,imageartpetitf:imageartpetitf,imageartgrandf:imageartgrandf,scategorie:scategorie,categorie:categorie }) 
    try { 
        await newArticle.save(); 
        res.status(201).json(newArticle ); 
    } catch (error) { 
        res.status(409).json({ message: error.message }); 
    } 
} 
export const updateArticle= async (req, res) => { 
    const { id } = req.params; 
    const { isbn,titre,annedition,prix,qtestock,couverture,specialite,scategorie,categorie } = 
    req.body; 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Article avec un id: ${id}`); 
    const art1 = { caracteristiques:caracteristiques,designation:designation,marque:marque,reference:reference,qtestock:qtestock,prixAchat:prixAchat,prixVente:prixVente,prixSolde:prixSolde,imageartpetitf:imageartpetitf,imageartgrandf:imageartgrandf,scategorie:scategorie,categorie:categorie, _id: id }; 
    await Article.findByIdAndUpdate(id, art1); 
    res.json(art1); 
} 
export const deleteArticle = async (req, res) => { 
    const { id } = req.params; 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de Article avec l'ID: ${id}`); 
    await Article.findByIdAndDelete(id); 
    res.json({ message: "Article supprimé avec succès." }); 
} 