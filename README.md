# Books API

A RESTful Books API built using Node.js, Express, and MongoDB (Mongoose).
The API provides endpoints to create and explore books with support for
searching, filtering, pagination, sorting, and request validation.

--------------------------------------------------

## Environment Configuration

This project uses environment variables for configuration.

Before running the application, create a `.env` file in the project root
and provide the required values.

## Example `.env` file:

PORT=5000  
MONGO_URL=your_mongodb_connection_string_here

--------------------------------------------------

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi (request validation)
- dotenv

--------------------------------------------------

## Project Overview

This API allows clients to:

- Create book records
- Search books by name and description
- Filter books by author
- Filter books by publish date range
- Paginate large result sets
- Sort results by name, author, or publish date

The project follows a clean and modular structure with proper separation of
concerns between routing, validation, business logic, and data access.

--------------------------------------------------

## Setup Instructions

1. Install dependencies

npm install

2. Create environment file

Create a `.env` file in the project root and add your MongoDB connection string.

3. Start the server

npm start

The server will start on:

http://localhost:5000

--------------------------------------------------

## Database Seeding

To populate the database with sample data for testing and evaluation:

npm run seed

The seed script inserts 15 books with different authors and publish dates.

--------------------------------------------------

## API Endpoints

Create Book  
POST /api/books

Explore Books  
GET /api/books

--------------------------------------------------

## Request Validation

Request validation is implemented using Joi at the API boundary.

- All incoming requests are validated before reaching the controller layer
- Invalid requests are rejected early with descriptive error messages
- Database operations execute only for validated input

Mongoose schema validation is used as an additional safeguard to ensure
database-level data integrity.

--------------------------------------------------

## API Usage and Testing

The following examples demonstrate how each endpoint behaves,
including expected responses.

### 1. Create Book
Endpoint:  
POST http://localhost:5000/api/books


### 2. Fetch All Books  
GET http://localhost:5000/api/books

### 3. Search Books (Name + Description)  
GET http://localhost:5000/api/books?search=habit

### 4. Filter by Author 
GET http://localhost:5000/api/books?author=james clear

### 5. Filter by Publish Date Range  
GET http://localhost:5000/api/books?from=2015-01-01&to=2020-12-31

### 6. Pagination  
GET http://localhost:5000/api/books?page=1&limit=10

### 7. Sorting  
GET http://localhost:5000/api/books?sortBy=publishDate&order=desc  

GET http://localhost:5000/api/books?sortBy=publishDate&order=asc  

Explanation:  
## sortBy=publishDate&order=desc  
Sorts books by publish date in descending order.
Recently published (newer) books appear first.

## sortBy=publishDate&order=asc  
Sorts books by publish date in ascending order.
Older published books appear first.

--------------------------------------------------

### 1. Create Book

Endpoint:  
POST http://localhost:5000/api/books

Request Body:
{
  "name": "Atomic Habits",
  "description": "This book teaches how small habits can change your life.",
  "author": "James Clear",
  "publishDate": "2018-10-16"
}

Response:
{
  "_id": "generated_id",
  "name": "Atomic Habits",
  "description": "This book teaches how small habits can change your life.",
  "author": "James Clear",
  "publishDate": "2018-10-16T00:00:00.000Z",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

--------------------------------------------------

### 2. Validation Error Example

Request Body:
{
  "name": "Atomic Habits",
  "author": "James Clear"
}

Response:
{
  "message": "Validation error",
  "errors": [
    "\"description\" is required"
  ]
}

--------------------------------------------------

### 3. Fetch All Books

Endpoint:  
GET http://localhost:5000/api/books

Response:
[
  {
    "_id": "id1",
    "name": "Atomic Habits",
    "author": "James Clear",
    "publishDate": "2018-10-16T00:00:00.000Z"
  },
  {
    "_id": "id2",
    "name": "Deep Work",
    "author": "Cal Newport",
    "publishDate": "2016-01-05T00:00:00.000Z"
  }
]

--------------------------------------------------

### 4. Search Books (Name + Description)

Endpoint:  
GET http://localhost:5000/api/books?search=habit

Response:
[
  {
    "_id": "id1",
    "name": "Atomic Habits",
    "author": "James Clear"
  }
]

--------------------------------------------------

### 5. Filter by Author

Endpoint:  
GET http://localhost:5000/api/books?author=james clear

Response:
[
  {
    "_id": "id1",
    "name": "Atomic Habits",
    "author": "James Clear"
  }
]

--------------------------------------------------

### 6. Filter by Publish Date Range

Endpoint:  
GET http://localhost:5000/api/books?from=2015-01-01&to=2020-12-31

Response:
[
  {
    "_id": "id1",
    "name": "Atomic Habits",
    "publishDate": "2018-10-16T00:00:00.000Z"
  },
  {
    "_id": "id2",
    "name": "Deep Work",
    "publishDate": "2016-01-05T00:00:00.000Z"
  }
]

--------------------------------------------------

### 7. Pagination

Endpoint:  
GET http://localhost:5000/api/books?page=1&limit=1

Response:
[
  {
    "_id": "id1",
    "name": "Atomic Habits"
  }
]

--------------------------------------------------

### 8. Sorting

Endpoint:  
GET http://localhost:5000/api/books?sortBy=publishDate&order=desc

Response:
[
  {
    "_id": "id1",
    "name": "Atomic Habits",
    "publishDate": "2018-10-16T00:00:00.000Z"
  },
  {
    "_id": "id2",
    "name": "Deep Work",
    "publishDate": "2016-01-05T00:00:00.000Z"
  }
]

--------------------------------------------------

## Execution Order

For the explore endpoint, operations are applied in the following order:

1. Search and filters
2. Sorting
3. Pagination

--------------------------------------------------

## Conclusion

This API demonstrates clean backend architecture, strong request validation,
and flexible data exploration capabilities. The implementation is designed
to be maintainable, testable, and suitable for real-world usage.
