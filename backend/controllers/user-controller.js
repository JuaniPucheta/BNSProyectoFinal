import User from "../model/user.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
	try {
		const password = req.body.password;
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			user: req.body.user,
			password: hashedPassword,
		});
		res.json(user);
	} catch (error) {
		console.error(error);
	}
};

const compareUser = async (req, res) => {
	try {
		const user = await User.findOne({
			user: req.body.user,
		});

		const isPasswordMatch = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (isPasswordMatch) {
			return res.json("La contraseña es correcta.");
		} else {
			return res.json("La contraseña es incorrecta.");
		}
	} catch (error) {
		console.error(error);
	}
};

export { createUser, compareUser };