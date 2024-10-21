import { Request, Response } from 'express';
import Ticket from '../models/ticket.model';
import { differenceInMinutes } from 'date-fns';
import { HTTPStatus } from '../helper/HttpStatus';

export const createTicket = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userID, date, deviceID, queryText } = req.body;

        const lastTicket = await Ticket.findOne({ userID }).sort({ date: -1 });

        if (lastTicket && differenceInMinutes(new Date(date), lastTicket.date) <= 30) {
            res.status(HTTPStatus.CONFLICT).json({
                message: "You have already placed a support ticket. Please wait at least one hour before sending another request."
            });
            return;
        }

        const newTicket = new Ticket({ userID, date, deviceID, queryText });
        await newTicket.save();

        res.status(HTTPStatus.OK).json({ data: { _id: newTicket._id } });
    } catch (error) {
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ message: 'Server error', error });
    }
};
