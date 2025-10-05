import { Router } from 'express';
import { getAllAnnouncements } from '../controllers/announcementController';

const router = Router();

router.get('/', getAllAnnouncements);

export default router;
