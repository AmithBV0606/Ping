import { Router } from "express";
import { login } from "../controllers/AuthController";
import middleware from "../middlewares/middleware";
import { Index, Show, Store, Update } from "../controllers/ChatGroupController";

const router = Router();

// Auth routes :
router.post("/auth/login", login);

// Chat Group routes :
router.post("/chat-group", middleware, Store);
router.get("/chat-group", middleware, Index);
router.get("/chat-group/:id", middleware, Show)
router.patch("/chat-group/:id", middleware, Update)

export default router;
