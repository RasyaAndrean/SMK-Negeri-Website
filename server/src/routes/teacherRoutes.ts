import { Router } from 'express';
import {
  getClassStudents,
  getTeacherClasses,
  getTeacherDashboard,
  submitGrades,
} from '../controllers/teacherController';

const router = Router();

router.get('/dashboard/:id', getTeacherDashboard);
router.get('/classes/:id', getTeacherClasses);
router.get('/classes/:id/students', getClassStudents);
router.post('/grades', submitGrades);

export default router;
