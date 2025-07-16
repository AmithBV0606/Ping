import { Router } from "express";
import { login } from "../controllers/AuthController";
import middleware from "../middlewares/middleware";
import { Store } from "../controllers/ChatGroupController";

const router = Router();

// Auth routes :
router.post("/auth/login", login);

// Chat Group routes :
router.post("/chat-group", middleware, Store);

export default router;
