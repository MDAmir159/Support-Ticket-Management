import { Schema, model } from 'mongoose';

interface ITicket {
    userID: string;
    date: Date;
    deviceID: string;
    queryText: string;
}

const ticketSchema = new Schema<ITicket>({
    userID: { type: String, required: true },
    date: { type: Date, required: true },
    deviceID: { type: String, required: true },
    queryText: { type: String, required: true }
});

const Ticket = model<ITicket>('Ticket', ticketSchema);
export default Ticket;
