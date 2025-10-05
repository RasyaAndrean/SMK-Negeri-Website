import { Router } from 'express';
import {
  getAllApplications,
  getApplicationStatus,
  submitApplication,
} from '../controllers/ppdbController';

const router = Router();

router.post('/register', submitApplication);
router.get('/status/:registration_number', getApplicationStatus);
router.get('/applications', getAllApplications);

export default router;
