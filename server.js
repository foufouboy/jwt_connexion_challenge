import express from "express";
import router from "./router/index.js";
import path from "node:path";
import session from "express-session";
import MongoStore from "connect-mongo";

const __dirname = import.meta.dirname;
const staticPath = path.join(__dirname, "public");
const app = express();

app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.use(
	session({
		name: "session",
		secret: "catiscat",
		resave: true,
		saveUninitialized: true,
		store: MongoStore.create({
			mongoUrl: "mongodb://localhost:27017/session",
		}),
	})
);

app.use(router);

app.listen(8000, () => {
	console.log("Running at http://localhost:8000");
});
