import express from "express";
import { 
    createPublication, 
    getAllPublications, 
    getPublicationById, 
    editPublication, 
    deletePublication, 
    getPublicationsByKeyWord } from "../controllers/publication-controller"; 
import { authenticateToken } from "../middleware/token-middleware";

const router = express.Router();

router.post("/", authenticateToken, createPublication);
router.get("/", authenticateToken, getAllPublications);
router.get("/:id", authenticateToken, getPublicationById);
router.put("/:id", authenticateToken, editPublication);
router.delete("/:id", authenticateToken, deletePublication);
router.get("/search/:keyWord", authenticateToken, getPublicationsByKeyWord);

export default router;
