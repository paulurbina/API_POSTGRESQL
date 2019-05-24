import { Router } from "express";
import { createAction, getAction, deleteAction, updateAction, getOneAction, getActionByProject} from '../controllers/action.controller';

const router = Router();

// /api/actions/
router.post('/', createAction);
router.get('/', getAction);

// /api/actions/:id
router.get('/:id', getOneAction);
router.delete('/:id', deleteAction);
router.put('/:id', updateAction);

// /api/actions/project/:projectId
router.get('/project/:projectid', getActionByProject);

export default router;