import Book from "../models/book.model.js";

/* CREATE BOOK */
export const createBookService = async (data) => {
  return await Book.create(data);
};

/* EXPLORE BOOKS */
export const exploreBooksService = async (queryParams) => {
  const {
    search,
    author,
    from,
    to,
    page = 1,
    limit = 10,
    sortBy = "name",
    order = "asc"
  } = queryParams;

  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } }
    ];
  }

  if (author) {
    query.author = new RegExp(`^${author}$`, "i");
  }

  if (from || to) {
    query.publishDate = {};
    if (from) query.publishDate.$gte = new Date(from);
    if (to) query.publishDate.$lte = new Date(to);
  }

  const sortOrder = order === "desc" ? -1 : 1;

  return await Book.find(query)
    .sort({ [sortBy]: sortOrder })
    .skip((page - 1) * limit)
    .limit(Math.min(limit, 50));
};
