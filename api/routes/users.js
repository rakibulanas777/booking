import express from "express";
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
	res.send("Hello you are logged in");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
	res.send("Hello you are logged in");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
	res.send("Hello you admin are logged in");
});

//put method
router.put("/:id", updateUser);
//delete method
router.delete("/:id", deleteUser);
//get method
router.get("/:id", getUser);
//get All
router.get("/", getUsers);

export default router;
