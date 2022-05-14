import express from 'express';
const router = express.Router();
import { getScategories, getScategorieByID, createScategorie, updateScategorie, deleteScategorie } from '../controllers/scategorie.controller.js';
/**
* @route GET /api/scategories
* @desc Get All scategories
* @access Public
*/
router.get('/', getScategories);
/**
* @route POST /api/scategories
* @desc Ajouter un scategorie
* @access Public
*/
router.post('/', createScategorie);
/**
* @route GET /api/scategories/:id
* @desc Renvoyer un scategorie
* @access Public
*/
router.get('/:id', getScategorieByID);
/**
* @route PUT /api/scategories/:id
* @desc Modifier un scategorie
* @access Public
*/
router.put('/:id', updateScategorie);
/**
* @route DELETE /api/scategories/:id
* @desc Supprimer un scategorie
* @access Public
*/
router.delete('/:id', deleteScategorie);
export default router;