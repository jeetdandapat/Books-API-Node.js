import {
  createBookService,
  exploreBooksService
} from "../services/book.service.js";

/* CREATE BOOK */
export const createBook = async (req, res) => {
  const book = await createBookService(req.body);
  res.status(201).json(book);
};

/* EXPLORE BOOKS */
export const exploreBooks = async (req, res) => {
  const books = await exploreBooksService(req.query);
  res.json(books);
};
