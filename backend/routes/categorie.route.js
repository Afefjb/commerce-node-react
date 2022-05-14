import express from 'express';
const router = express.Router();
import { getCategories, getCategorieByID, createCategorie, updateCategorie, deleteCategorie } from '../controllers/categorie.controller.js';
/**
* @route GET /api/categories
* @desc Get All categories
* @access Public
*/
router.get('/', getCategories);
/**
* @route POST /api/categories
* @desc Ajouter un categorie
* @access Public
*/
router.post('/', createCategorie);
/**
* @route GET /api/categories/:id
* @desc Renvoyer un categorie
* @access Public
*/
router.get('/:id', getCategorieByID);
/**
* @route PUT /api/categories/:id
* @desc Modifier un categorie
* @access Public
*/
router.put('/:id', updateCategorie);
/**
* @route DELETE /api/categories/:id
* @desc Supprimer un categorie
* @access Public
*/
router.delete('/:id', deleteCategorie);
export default router;