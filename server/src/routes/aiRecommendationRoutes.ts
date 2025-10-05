import { Router } from 'express';
import {
  getCareerPathRecommendations,
  getCollaborationRecommendations,
  getCourseRecommendations,
  getUserRecommendations,
  provideFeedback,
} from '../controllers/aiRecommendationController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticate, getUserRecommendations);
router.get('/courses', authenticate, getCourseRecommendations);
router.get('/collaborations', authenticate, getCollaborationRecommendations);
router.get('/careers', authenticate, getCareerPathRecommendations);
router.post('/feedback', authenticate, provideFeedback);

export default router;
