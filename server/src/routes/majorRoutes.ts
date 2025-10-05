import { Router } from 'express';
import { getAllMajors, getMajorById } from '../controllers/majorController';

const router = Router();

router.get('/', getAllMajors);
router.get('/:id', getMajorById);

export default router;
