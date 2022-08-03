import express from "express";
import {
	createHotel,
	deleteHotel,
	getHotel,
	getHotels,
	updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();
//post method

router.post("/", createHotel);

//put method
router.put("/:id", updateHotel);
//delete method
router.delete("/:id", deleteHotel);
//get method
router.get("/:id", getHotel);
//get All
router.get("/", getHotels);

export default router;
