export const createHotel = async (req, res) => {
	const newHotel = new Hotel(req.body);
	try {
		const saveHotel = await newHotel.save();
		res.status(200).json(saveHotel);
	} catch (err) {
		next(err);
	}
};
export const updateHotel = async (req, res) => {
	try {
		const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		});
		res.status(200).json(updateHotel);
	} catch (err) {
		res.status(500).json(err);
	}
};
export const deleteHotel = async (req, res) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json("Hotel has been deleted");
	} catch (err) {
		res.status(500).json(err);
	}
};
export const getHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json(hotel);
	} catch (err) {
		res.status(500).json(err);
	}
};
export const getHotels = async (req, res, next) => {
	// const failed = true;
	// const err = new Error();
	// err.status(404);
	// err.message("Sorry not found!");
	// if (failed) return next(createError(401, "You are not Authinticated"));
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels);
	} catch (err) {
		next(err);
	}
};
