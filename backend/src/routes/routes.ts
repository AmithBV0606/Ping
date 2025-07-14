import { Router } from "express";
import { login } from "../controllers/AuthController";

const router = Router();

// Auth routes :
router.post("/auth/login", login);

export default router;