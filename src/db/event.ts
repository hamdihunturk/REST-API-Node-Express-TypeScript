import { EventModel } from "../models/events";

export const getEvent = () => EventModel.find();
export const createEvent = (values: Record<string, any>) =>
    new EventModel(values).save().then((user) => user.toObject());
export const deleteEventById = (id: string) =>
    EventModel.findOneAndDelete({ _id: id });
export const updateEventById = (id: string, values: Record<string, any>) =>
    EventModel.findByIdAndUpdate(id, values);