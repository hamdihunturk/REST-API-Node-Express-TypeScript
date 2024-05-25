import express from "express";
import { getAllEvents, deleteEvent, addEvent } from "../controllers/event";

export default (router: express.Router) => {
    router.post("/event/create-event", addEvent);
    router.get("/event/get-all-events", getAllEvents);
}