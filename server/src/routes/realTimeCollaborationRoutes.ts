import { Router } from 'express';
import {
  createSession,
  endSession,
  getSessionEvents,
  getSessionInfo,
  joinSession,
  leaveSession,
  sendMessage,
  shareFile,
} from '../controllers/realTimeCollaborationController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.post('/session', authenticate, createSession);
router.post('/session/:session_id/join', authenticate, joinSession);
router.post('/session/:session_id/leave', authenticate, leaveSession);
router.post('/session/:session_id/message', authenticate, sendMessage);
router.get('/session/:session_id', authenticate, getSessionInfo);
router.get('/session/:session_id/events', authenticate, getSessionEvents);
router.post('/session/:session_id/file', authenticate, shareFile);
router.post('/session/:session_id/end', authenticate, endSession);

export default router;
