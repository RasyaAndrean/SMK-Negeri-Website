import { Router } from 'express';
import {
  createAnnotation,
  deleteAnnotation,
  getAllAnnotations,
  getAnnotationById,
  getAnnotationsByTag,
  updateAnnotation,
  verifyAnnotation,
} from '../controllers/arAnnotationController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.get('/collaboration/:collaboration_id', authenticate, getAllAnnotations);
router.get('/tag/:tag', authenticate, getAnnotationsByTag);
router.get('/:id', authenticate, getAnnotationById);
router.post('/collaboration/:collaboration_id', authenticate, createAnnotation);
router.put('/:id', authenticate, updateAnnotation);
router.delete('/:id', authenticate, deleteAnnotation);
router.post('/:id/verify', authenticate, verifyAnnotation);

export default router;
