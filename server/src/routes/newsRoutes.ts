import { Router } from 'express';
import { getAllNews, getNewsById } from '../controllers/newsController';

const router = Router();

router.get('/', getAllNews);
router.get('/:id', getNewsById);

export default router;
