import { Router } from "express";
import { getAllVisits, getVisitById } from "../controllers/visitsController.js";

const router = Router();

router.get("/", getAllVisits);
router.get("/:id", getVisitById);

export default router;
