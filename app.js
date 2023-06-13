import express from "express";
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	}),

	session({
		secret: "any string",
		resave: false,
		saveUninitialized: true,
	})
);
app.use(express.json());
app.use(cors());
HelloController(app);
UserController(app);
TuitsController(app);
AuthController(app);
app.listen(4000);
