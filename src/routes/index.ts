import express from 'express';
import ticketRoutes from './ticket.route';

const router = express.Router();

// Define routes
router.use('/support', ticketRoutes);

export default router;
