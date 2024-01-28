import express from "express";
import { createComment, editComment, getComment, deleteComment } from "../controllers/comment-controller";
import { authenticateToken} from "../middleware/token-middleware"

const commentRouter = express.Router();

commentRouter.post("/publications/:id", authenticateToken, createComment);
commentRouter.get("/comment/:id", authenticateToken, getComment);
commentRouter.put("/comment/:id", authenticateToken, editComment);
commentRouter.delete("/comment/:id", authenticateToken, deleteComment);

export default commentRouter;
