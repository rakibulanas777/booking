import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	res.send("HEllo this is auth");
});

export default router;
