import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export default function (req, res, next) {
	if (req.session.token) {
		const decoded = jwt.decode(req.session.token, process.env.SECRET);
		if (!decoded) {
			res.redirect(`/login?error=${encodeURIComponent(405)}`);
			return;
		}
		next();
		return;
	}

	res.redirect(`/login?error=${encodeURIComponent(405)}`);
}
