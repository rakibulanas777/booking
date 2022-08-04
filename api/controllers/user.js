export const updateUser = async (req, res) => {
	try {
		const updateUser = await User.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		});
		res.status(200).json(updateUser);
	} catch (err) {
		res.status(500).json(err);
	}
};
export const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User has been deleted");
	} catch (err) {
		res.status(500).json(err);
	}
};
export const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
};
export const getUsers = async (req, res, next) => {
	// const failed = true;
	// const err = new Error();
	// err.status(404);
	// err.message("Sorry not found!");
	// if (failed) return next(createError(401, "You are not Authinticated"));
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};
