import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export default function (req, res, next) {
	if (req.session.token) {
		const decoded = jwt.decode(req.session.token, process.env.JWT_SECRET);
		if (!decoded) {
			const error = 405;
			res.redirect(`/login?error=${encodeURIComponent(error)}`);
			return;
		}
		next();
		return;
	}

	const error = 405;
	res.redirect(`/login?error=${encodeURIComponent(error)}`);
}
