import { Router } from 'express';
import {
  addCollaborationMessage,
  createCollaboration,
  getAllCollaborations,
  getCollaborationById,
  getCollaborationMessages,
  joinCollaboration,
  updateCollaborationProgress,
} from '../controllers/collaborationController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticate, getAllCollaborations);
router.get('/:id', authenticate, getCollaborationById);
router.post('/', authenticate, createCollaboration);
router.get('/:id/messages', authenticate, getCollaborationMessages);
router.post('/:id/messages', authenticate, addCollaborationMessage);
router.post('/:id/join', authenticate, joinCollaboration);
router.put('/:id/progress', authenticate, updateCollaborationProgress);

export default router;
