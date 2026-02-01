import { Router } from "express";
import { createBook, exploreBooks } from "../controllers/book.controller.js";
import { createBookValidation } from "../validations/book.validation.js";

const router = Router();

router.post("/books", createBookValidation, createBook);
router.get("/books", exploreBooks);

export default router;
