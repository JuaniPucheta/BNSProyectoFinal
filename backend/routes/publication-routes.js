import express from "express";
import { createPublication, getAllPublications, getPublicationById, editPublication, deletePublication, getPublicationsByKeyWord } from "../controllers/publication-controller.js";

const router = express.Router();

router.post("/", createPublication);
router.get("/", getAllPublications);
router.get("/:id", getPublicationById);
router.get("/search/:keyWord", getPublicationsByKeyWord);
router.put("/:id", editPublication);
router.delete("/:id", deletePublication);

export default router;
