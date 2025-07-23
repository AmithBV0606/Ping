import { Router } from "express";
import { login } from "../controllers/AuthController";
import middleware from "../middlewares/middleware";
import {
  Delete,
  Index,
  Show,
  Store,
  Update,
} from "../controllers/ChatGroupController";
import { IndexUsers, StoreUsers } from "../controllers/ChatGroupUserController";

const router = Router();

// Auth routes :
router.post("/auth/login", login);

// Chat Group routes :
router.post("/chat-group", middleware, Store);
router.get("/chat-group", middleware, Index);
router.get("/chat-group/:id", Show);
router.put("/chat-group/:id", middleware, Update);
router.delete("/chat-group/:id", middleware, Delete);

// Chat group users :
router.get("/chat-group-users", IndexUsers);
router.post("/chat-group-users", StoreUsers);

export default router;
