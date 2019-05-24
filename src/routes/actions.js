import { Router } from "express";
import { createAction, getAction, deleteAction, updateAction, getOneAction } from '../controllers/action.controller';

const router = Router();

// /api/action/
router.post('/', createAction);
router.get('/', getAction);

// /api/projects/:id
router.get('/:id', getOneAction);
router.delete('/:id', deleteAction);
router.put('/:id', updateAction);


export default router;