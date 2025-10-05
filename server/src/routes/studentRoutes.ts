import { Router } from 'express';
import {
  getStudentAttendance,
  getStudentCourses,
  getStudentDashboard,
  getStudentGrades,
} from '../controllers/studentController';

const router = Router();

router.get('/dashboard/:id', getStudentDashboard);
router.get('/courses/:id', getStudentCourses);
router.get('/grades/:id', getStudentGrades);
router.get('/attendance/:id', getStudentAttendance);

export default router;
