import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "../models/book.model.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL);

  await Book.deleteMany();

  await Book.insertMany([
    { name: "Atomic Habits", description: "Habits book", author: "James Clear", publishDate: "2018-10-16" },
    { name: "Deep Work", description: "Focus book", author: "Cal Newport", publishDate: "2016-01-05" },
    { name: "Clean Code", description: "Coding best practices", author: "Robert Martin", publishDate: "2008-08-01" },
    { name: "The Monk Who Sold His Ferrari", description: "Life lessons", author: "Robin Sharma", publishDate: "1997-01-01" },
    { name: "Think Fast and Slow", description: "Psychology book", author: "Daniel Kahneman", publishDate: "2011-02-01" },
    { name: "Zero to One", description: "Startup ideas", author: "Peter Thiel", publishDate: "2014-09-16" },
    { name: "Ikigai", description: "Japanese life concept", author: "Hector Garcia", publishDate: "2016-04-27" },
    { name: "The Alchemist", description: "Dream journey", author: "Paulo Coelho", publishDate: "1988-01-01" },
    { name: "Rich Dad Poor Dad", description: "Finance mindset", author: "Robert Kiyosaki", publishDate: "1997-01-01" },
    { name: "Start With Why", description: "Leadership book", author: "Simon Sinek", publishDate: "2009-10-29" },
    { name: "Grit", description: "Passion & perseverance", author: "Angela Duckworth", publishDate: "2016-05-03" },
    { name: "Rework", description: "Business mindset", author: "Jason Fried", publishDate: "2010-03-09" },
    { name: "Hooked", description: "Product psychology", author: "Nir Eyal", publishDate: "2014-11-04" },
    { name: "Mindset", description: "Growth mindset", author: "Carol Dweck", publishDate: "2006-02-28" },
    { name: "Sapiens", description: "Human history", author: "Yuval Noah Harari", publishDate: "2011-01-01" }
  ]);

  console.log("Seed completed successfully. 15 books inserted into the database.");
} catch (error) {
  console.error("Seed failed:", error.message);
} finally {
  process.exit();
}
