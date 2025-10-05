import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAdminDashboard,
  getUsers,
  updateUser,
} from '../controllers/adminController';

const router = Router();

router.get('/dashboard', getAdminDashboard);
router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
