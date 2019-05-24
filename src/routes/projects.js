import { Router } from "express";

import { createProject, getProjects, getOneProjects, deleteProjects, updateProjects } from '../controllers/project.controller';

const router = Router();

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);

// /api/projects/:id
router.get('/:id', getOneProjects);
router.delete('/:id', deleteProjects);
router.put('/:id', updateProjects);

export default router;  