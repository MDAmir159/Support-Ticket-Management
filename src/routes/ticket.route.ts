import { Router } from 'express';
import { createTicket } from '../controllers/ticket.controller';

const ticketRoutes = Router();

ticketRoutes.post(
    '/create_ticket', 
    createTicket
);

export default ticketRoutes;