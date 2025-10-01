import { Router } from "express";
import postController from "../controller/postController.js";
import userController from "../controller/userController.js";
import authMiddleware from "../middleware/auth.js";

const router = Router();

router.get("/login", userController.loginPage);

router.post("/login", userController.login);
router.get("/logout", userController.logout);

router.get("/", postController.getPost);
router.get("/add", authMiddleware, postController.postForm);
router.post("/add", authMiddleware, postController.addPost);

export default router;
