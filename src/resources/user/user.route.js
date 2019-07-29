import { Router } from "express";
import { signup, getUsers } from "./user.controller";

const router = Router();

router.post("/register", signup);

router.get("/users", getUsers);

export default router;
