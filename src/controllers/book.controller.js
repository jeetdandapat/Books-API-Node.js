import {
  createBookService,
  exploreBooksService
} from "../services/book.service.js";

/* CREATE BOOK */
export const createBook = async (req, res) => {
  try {
    const book = await createBookService(req.body);

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create book",
      error: error.message
    });
  }
};

/* EXPLORE BOOKS */
export const exploreBooks = async (req, res) => {
  try {
    const books = await exploreBooksService(req.query);

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch books",
      error: error.message
    });
  }
};
