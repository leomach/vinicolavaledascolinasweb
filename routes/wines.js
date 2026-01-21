import { Router } from "express";
import { getWines } from "../controllers/winesController.js";

const router = Router();

router.get("/", getWines);

export default router;
