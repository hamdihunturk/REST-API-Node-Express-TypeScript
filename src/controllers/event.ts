import express from "express";
import { getEvent, updateEventById, deleteEventById, createEvent } from "../db/event";

export const getAllEvents = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const users = await getEvent();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteEvent = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteEventById(id);

        return res.json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const addEvent = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const { eventName, eventPlaceName, eventDate, eventDescription } = req.body;

        const addEvent = await createEvent(
            {
                eventName,
                eventPlaceName,
                eventDate,
                eventDescription
            }
        );

        return res.json(addEvent);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};