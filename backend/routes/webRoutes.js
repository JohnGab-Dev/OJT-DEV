import express from 'express';
import { verifyToken } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { getDashboardData, getUsersData, addUser } from '../controllers/superAdminController.js';

const router = express.Router();

router.get('/admin-dashboard', verifyToken, authorizeRoles("superadmin"), getDashboardData);
router.get('/users', verifyToken, authorizeRoles("superadmin"), getUsersData);
router.post('/users/add', verifyToken, authorizeRoles("superadmin"), addUser);

export default router;