import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    eventPlaceName: { type: String, required: true },
    eventPicture: [{ type: String }],
    eventDate: [{ type: Date, required: true }],
    eventDescription: { type: String, required: true },
    eventTicketTypes: [{
        eventTicketName: String,
        eventTicketCost: Number,
        eventTicketLimit: Number,
        ticketDescription: String,
        ticketNumPerPerson: Number,
        eventTicketSoldTickets: {
            type: Number,
            default: 0
        }
    }],

}, { timestamps: true });

export const EventModel = mongoose.model("Event", EventSchema);


