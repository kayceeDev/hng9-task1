import express from "express";
import { controllers } from "../controllers";

const router = express.Router();

router.get("/", controllers.home);

export default router;
