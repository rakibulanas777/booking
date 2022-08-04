import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

//connect mongodb
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("Connected to mongodb");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("Disconnected mongo db");
});
mongoose.connection.on("connected", () => {
	console.log("connected mongo db");
});

//send request

app.get("/", (req, res) => {
	res.send("hello world");
});

//middlewares
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//error handling middleware
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong!";

	return res.status(errorStatus).json({
		sucess: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

app.listen(8800, () => {
	connect();
	console.log("Connected to backend");
});
